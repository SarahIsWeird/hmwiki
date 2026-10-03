import type { Env, MarkdownIt, MarkdownItOptions, Renderer, StateBlock, Token } from 'markdown-it';

/* Adapted from the `fence` impl
 * Original impl for fence: https://github.com/markdown-it/markdown-it/blob/master/src/rules_block/fence.ts
 * Am lazy so the code style is also unchanged :)
 */
const hackmudBlockTokenize = (state: StateBlock, startLine: number, endLine: number, silent: boolean): boolean => {
    let pos = state.bMarks[startLine] + state.tShift[startLine]
    let max = state.eMarks[startLine]

    // if it's indented more than 3 spaces, it should be a code block
    if (state.sCount[startLine] - state.blkIndent >= 4) { return false }

    if (pos + 3 > max) { return false }

    const marker = state.src.charCodeAt(pos)

    if (marker !== '!'.charCodeAt(0)) {
        return false
    }

    // scan marker length
    let mem = pos
    pos = state.skipChars(pos, marker)

    let len = pos - mem

    if (len < 3) { return false }

    const markup = state.src.slice(mem, pos)
    const params = state.src.slice(pos, max)

    if (params.indexOf(String.fromCharCode(marker)) >= 0) {
        return false
    }

    // Since start is found, we can report success here in validation mode
    if (silent) { return true }

    // search end of block
    let nextLine = startLine
    let haveEndMarker = false

    for (;;) {
        nextLine++
        if (nextLine >= endLine) {
            // unclosed block should be autoclosed by end of document.
            // also block seems to be autoclosed by end of parent
            break
        }

        pos = mem = state.bMarks[nextLine] + state.tShift[nextLine]
        max = state.eMarks[nextLine]

        if (pos < max && state.sCount[nextLine] < state.blkIndent) {
            // non-empty line with negative indent should stop the list:
            // - ```
            //  test
            break
        }

        if (state.src.charCodeAt(pos) !== marker) { continue }

        if (state.sCount[nextLine] - state.blkIndent >= 4) {
            // closing fence should be indented less than 4 spaces
            continue
        }

        pos = state.skipChars(pos, marker)

        // closing code fence must be at least as long as the opening one
        if (pos - mem < len) { continue }

        // make sure tail has spaces only
        pos = state.skipSpaces(pos)

        if (pos < max) { continue }

        haveEndMarker = true
        // found!
        break
    }

    // If a fence has heading spaces, they should be removed from its inner block
    len = state.sCount[startLine]

    state.line = nextLine + (haveEndMarker ? 1 : 0)

    const token = state.push('hackmud', 'code-hackmud', 0)
    token.info = params
    token.content = state.getLines(startLine + 1, nextLine, len, true)
    token.markup = markup
    token.map = [startLine, state.line]

    return true
}

const getPrefixLength = (str: string, char: string): number => {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== char) return i;
    }

    return str.length;
}

const combineRegexes = (...regexes: RegExp[]): RegExp => {
    return new RegExp(regexes.map(r => r.source).join(''), 'gv');
};

const dotNetNonWordClass = /([^\p{Ll}\p{Lu}\p{Lt}\p{Lo}\p{Lm}\p{Mn}\p{Nd}\p{Pc}])/u;

const lineStartGCRegex = combineRegexes(
    /^(-)?/,
    /(?:(\d{1,5})Q)?/,
    /(?:(\d{1,3})T)?/,
    /(?:(\d{1,3})B)?/,
    /(?:(\d{1,3})M)?/,
    /(?:(\d{1,3})K)?/,
    /(\d{1,3})?GC/,
);

const gcRegex = combineRegexes(
    dotNetNonWordClass,
    /(-)?/,
    /(?:(\d{1,5})Q)?/,
    /(?:(\d{1,3})T)?/,
    /(?:(\d{1,3})B)?/,
    /(?:(\d{1,3})M)?/,
    /(?:(\d{1,3})K)?/,
    /(\d{1,3})?GC/,
    dotNetNonWordClass,
);

export const formatGC = (str: string) => {
    const replacer = (
        _gcStringPart: string,
        minusGroup: string | null,
        quadrillionsGroup: string | null,
        trillionsGroup: string | null,
        billionsGroup: string | null,
        millionsGroup: string | null,
        thousandsGroup: string | null,
        onesGroup: string | null,
    ) => {
        let formattedString = '';

        if (minusGroup) formattedString += '-';

        formattedString += '<span class="color-b">';

        if (quadrillionsGroup) formattedString +=
            quadrillionsGroup + '<span class="color-d">Q</span>';
        if (trillionsGroup) formattedString +=
            trillionsGroup + '<span class="color-t">T</span>';
        if (billionsGroup) formattedString +=
            billionsGroup + '<span class="color-j">B</span>';
        if (millionsGroup) formattedString +=
            millionsGroup + '<span class="color-l">M</span>';
        if (thousandsGroup) formattedString +=
            thousandsGroup + '<span class="color-n">K</span>';
        if (onesGroup) formattedString +=
            onesGroup + '<span class="color-background"></span>';

        formattedString += '</span><span class="color-c">GC</span>';
        return formattedString
    };

    const nonStartReplacer = (
        gcStringPart: string,
        beforeStringGroup: string,
        minusGroup: string | null,
        quadrillionsGroup: string | null,
        trillionsGroup: string | null,
        billionsGroup: string | null,
        millionsGroup: string | null,
        thousandsGroup: string | null,
        onesGroup: string | null,
        afterStringGroup: string,
    ) => {
        return beforeStringGroup
            + replacer(
                gcStringPart,
                minusGroup,
                quadrillionsGroup,
                trillionsGroup,
                billionsGroup,
                millionsGroup,
                thousandsGroup,
                onesGroup)
            + afterStringGroup;
    };

    return str
        .replace(lineStartGCRegex, replacer)
        .replace(gcRegex, nonStartReplacer);
};

const formatHackmudStuff = (str: string, trim: boolean = false): string => {
    if (trim) {
        str = str.trim();
    }

    str = str
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');

    str = formatGC(str);

    return str;
};

export default (md: MarkdownIt) => {
    // md.block.ruler.push('hackmud-block', hackmudBlockTokenize);

    const existingRenderer = md.renderer.rules['fence'];
    md.renderer.rules['fence'] = (tokens: Token[], idx: number, options: Required<MarkdownItOptions>, env: Env | undefined, self: Renderer) => {
        const token = tokens[idx];

        if (token.info !== 'hackmud') return existingRenderer(tokens, idx, options, env, self);

        // const lines = token.content.split('\n');
        // for (let i = 0; i < lines.length; i++) {
        //     let line = lines[i];
        //     if (line.startsWith(' ')) {
        //         const prefixLength = getPrefixLength(line, ' ');
        //         line = '&ensp;'.repeat(prefixLength) + line.trimStart();
        //     }
        // }

        console.log(token);
        return existingRenderer(tokens, idx, options, env, self);
    };
};
