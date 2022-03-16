const chroma = require("chroma-js");
const fs = require("fs");

const buildCSS = (keys) => {
    const colorKeys = {
        primary: keys ? keys.primary || "#0000bb" : "#0000bb",
        secondary: keys ? keys.secondary || "#b700b7" : "#b700b7",
        info: keys ? keys.info || "#00bcb0" : "#00bcb0",
        danger: keys ? keys.danger || "#b20000" : "#b20000",
        success: keys ? keys.success || "#00bb00" : "#00bb00",
    };

    let cssString = ":root {\n";

    const appendCssVar = (colors, key, index, state) => {
        const stateString = state ? `-${state}` : "";
        cssString += `\t--color-${key}${stateString}: ${colors[index]};\n`;
    };

    for (const [key, value] of Object.entries(colorKeys)) {
        const colorSwatch = chroma.scale(["white", value, "black"]).colors(21);
        appendCssVar(colorSwatch, key, 10);
        appendCssVar(colorSwatch, key, 3, "lightest");
        appendCssVar(colorSwatch, key, 5, "lighter");
        appendCssVar(colorSwatch, key, 13, "dark");
    }
    cssString +=
        "\t--color-white: #fff;\n\t--color-gray-light: #f1f1f1;\n\t--color-gray-medium: #d4d4d4;\n\t--color-gray-dark: #6b6b6b;\n\t--color-gray-darker: #3e3e3e;\n}";

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
