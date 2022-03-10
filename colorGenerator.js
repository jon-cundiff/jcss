const chroma = require("chroma-js");
const fs = require("fs");

const buildCSS = (keys) => {
    const colorKeys = {
        primary: keys ? keys.primary || "#6e41e2" : "#6e41e2",
        secondary: keys ? keys.secondary || "#48D8B9" : "#48D8B9",
        info: keys ? keys.info || "#428bf9" : "#428bf9",
        danger: keys ? keys.danger || "#C7302B" : "#C7302B",
        success: keys ? keys.sucess || "#27AE60" : "#27AE60",
    };

    let cssString = ":root {\n";

    const appendCssVar = (colors, key, index, state) => {
        const stateString = state ? `-${state}` : "";
        cssString += `\t--color-${key}${stateString}: ${colors[index]};\n`;
    };

    for (const [key, value] of Object.entries(colorKeys)) {
        const colorSwatch = chroma.scale(["white", value, "black"]).colors(21);
        appendCssVar(colorSwatch, key, 10);
        appendCssVar(colorSwatch, key, 5, "disabled");
        appendCssVar(colorSwatch, key, 13, "hover");
        appendCssVar(colorSwatch, key, 15, "active");
    }
    cssString +=
        "\t--color-white: #fff;\n\t--color-gray-light: #f1f1f1;\n\t--color-gray-medium: #d4d4d4;\n\t--color-gray-dark: #6b6b6b;\n}";

    return cssString;
};

const writeCSSFile = () => {
    const cssString = buildCSS();
    fs.writeFileSync("./src/colors.css", cssString, { encoding: "utf-8" });
};

// For npm script
if (process.argv.includes("write")) {
    writeCSSFile();
}

module.exports = { buildCSS };
