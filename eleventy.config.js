import markdownItAnchor from 'markdown-it-anchor';
import { colorPlugin as markdownItColor } from 'markdown-it-color';
import markdownItContainer from 'markdown-it-container';
import markdownItFootnote from 'markdown-it-footnote';

export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('pages');
    eleventyConfig.addPassthroughCopy('public');
    eleventyConfig.amendLibrary('md', mdLib =>
        mdLib
            .use(markdownItAnchor)
            .use(markdownItColor, {
                defaultClassName: 'hm-color',
            })
            .use(markdownItContainer)
            .use(markdownItFootnote)
    );
}
