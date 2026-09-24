import fs from 'fs';

const gameOutput = fs.readFileSync('./utils/colors.txt', { encoding: 'utf8' });
const regex = /<color=#(\w{6})\w{2}>(\w)<\/color>/g;

const colors = {};

for (const match of gameOutput.matchAll(regex)) {
    colors[match[2]] = match[1];
}

let css = '';

css += ':root {\n';

/* Grabbed from gui.vfx { bloom: 0, noise: 0, scan: 0, bend: 0 } and gui.size { i: 20 }
 * Reasonably sure that this is the correct color.
 */
css += '    --color-default: #83B0F2;\n';

for (let colorName in colors) {
    const colorCode = colors[colorName];

    if ((colorName >= "0" && colorName <= "9") || (colorName.toUpperCase() === colorName)) {
        colorName = colorName.toLowerCase();
    } else {
        colorName += "-dark";
    }

    let varName = `--color-${colorName}`;

    css += `    ${varName}: #${colorCode};\n`;
}

css += '}\n\n';

for (let colorName in colors) {
    if ((colorName >= "0" && colorName <= "9") || (colorName.toUpperCase() === colorName)) {
        colorName = colorName.toLowerCase();
    } else {
        colorName += "-dark";
    }

    let varName = `--color-${colorName}`;
    let className = `hm-color--${colorName}`;

    css +=
`.${className} {
    color: var(${varName});
    text-shadow: var(${varName}) 0 0 var(--bloom-radius, 0);
}\n
`;
}

css = css.trimEnd() + '\n';

fs.writeFileSync('./public/hackmud_colors.css', css, { encoding: 'utf8' });
