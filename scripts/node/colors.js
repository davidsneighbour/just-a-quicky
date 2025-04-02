import { styleText } from "node:util";

// https://nodejs.org/api/util.html#modifiers
// requires node >= 20.13.0 (for array of modifiers)

// modifiers: reset, bold, italic, underline, strikethrough, hidden,
//            dim, overlined, blink, inverse, doubleunderline and framed
// foreground: black, red, green, yellow, blue, magenta, cyan, white, gray,
//              redBright, greenBright, yellowBright, blueBright, magentaBright,
//              cyanBright and whiteBright
// background: bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan,
//              bgWhite, bgGray, bgRedBright, bgGreenBright, bgYellowBright,
//              bgBlueBright, bgMagentaBright, bgCyanBright, bgWhiteBright
//
// util.styleText(['underline', 'italic'], 'Hi'). Super handy!

const exampleRed = styleText("red", "I am red!");
const exampleBlue = styleText("blue", "I am blue!");
const exampleBlueBold = styleText("bold", exampleBlue);

console.log(exampleRed);
console.log(exampleBlue);
console.log(exampleBlueBold);
