// @ts-ignore
import { HtmlBasePlugin } from '@11ty/eleventy';
import markdownItAnchor from 'markdown-it-anchor';
import { colorPlugin as markdownItColor } from 'markdown-it-color';
import markdownItFootnote from 'markdown-it-footnote';
// @ts-ignore
import hackmudColorizer from './helpers/HackmudColorizer.ts';
import markdownItHighlightJs from 'markdown-it-highlightjs';
import hlJs from 'highlight.js/lib/core';
import hlJsJavaScript from 'highlight.js/lib/languages/javascript';
import hlJsTypeScript from 'highlight.js/lib/languages/typescript';

hlJs.registerLanguage('javascript', hlJsJavaScript);
hlJs.registerLanguage('typescript', hlJsTypeScript);

export default function (eleventyConfig: any) {
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.setInputDirectory('pages');
    eleventyConfig.addPassthroughCopy('public');
    eleventyConfig.amendLibrary('md', (mdLib: any) =>
        mdLib
            .use(markdownItAnchor)
            .use(markdownItColor, {
                defaultClassName: 'hm-color',
            })
            .use(markdownItFootnote)
            .use(hackmudColorizer)
            .use(markdownItHighlightJs, { hljs: hlJs })
    );
}
