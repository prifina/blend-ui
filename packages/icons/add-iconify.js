const fs = require("fs");
const path = require("path");

function camelCase(s) {
  //return s.match(/[a-z]+/gi)
  const pascalCase = s
    .match(/[a-zA-Z0-9]+/gi)
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    })
    .join("");

  return (
    (pascalCase.charAt(0).match(/[0-9]+/g) ? "_" : "") +
    pascalCase.charAt(0).toLowerCase() +
    pascalCase.substr(1)
  );
}
// primary iconset....
let dirname = path.join(__dirname, "../../node_modules/@iconify/icons-fe");
let icons = fs
  .readdirSync(dirname)
  .filter(filename => /\.js$/.test(filename))
  .map(filename => path.basename(filename, ".js"));

//console.log(icons);

//console.log(camelCase('plus-circle'));

let uniqueNames = [];
let iconNames = [];
icons.forEach(name => {
  let componentName = camelCase(name) + "Icon";
  if (uniqueNames.indexOf(componentName) === -1) {
    uniqueNames.push(componentName);
    iconNames.push(name);
  }
});
//console.log(iconNames);

const template = iconNames => {
  const iconsToExport = iconNames.map(
    name =>
      `export { default as ${
        camelCase(name) + "Icon"
      } } from '@iconify/icons-fe/${name}'`,
  );

  //iconsToExport.push(`\nexport { Icon,InlineIcon } from '@iconify/react'\n`)
  //iconsToExport.push(`export { default as BlendIcon } from './Icon'\n`)

  return iconsToExport.join("\n");
};

const content = template(iconNames);
const filename = path.join(__dirname, "./src/icons-fe/iconSet.js");

fs.writeFileSync(filename, content);

// box iconset....
dirname = path.join(__dirname, "../../node_modules/@iconify/icons-bx");
icons = fs
  .readdirSync(dirname)
  .filter(filename => /\.js$/.test(filename))
  .map(filename => path.basename(filename, ".js"));

//console.log(icons);

//console.log(camelCase('plus-circle'));

uniqueNames = [];
iconNames = [];
icons.forEach(name => {
  let componentName = camelCase(name) + "Icon";
  if (uniqueNames.indexOf(componentName) === -1) {
    uniqueNames.push(componentName);
    iconNames.push(name);
  }
});
//console.log(iconNames);

const templateBx = iconNames => {
  const iconsToExport = iconNames.map(
    name =>
      `export { default as ${
        camelCase(name) + "Icon"
      } } from '@iconify/icons-bx/${name}'`,
  );

  //iconsToExport.push(`\nexport { Icon,InlineIcon } from '@iconify/react'\n`)
  //iconsToExport.push(`export { default as BlendIcon } from './Icon'\n`)

  return iconsToExport.join("\n");
};

const contentBx = templateBx(iconNames);
const filenameBx = path.join(__dirname, "./src/icons-bx/iconSet.js");

fs.writeFileSync(filenameBx, contentBx);

// material--ui iconset....
dirname = path.join(__dirname, "../../node_modules/@iconify/icons-mdi");
icons = fs
  .readdirSync(dirname)
  .filter(filename => /\.js$/.test(filename))
  .map(filename => path.basename(filename, ".js"));

//console.log(icons);

//console.log(camelCase('plus-circle'));

uniqueNames = [];
iconNames = [];
icons.forEach(name => {
  let componentName = camelCase(name) + "Icon";
  if (uniqueNames.indexOf(componentName) === -1) {
    uniqueNames.push(componentName);
    iconNames.push(name);
  }
});
//console.log(iconNames);

const templateMdi = iconNames => {
  const iconsToExport = iconNames.map(
    name =>
      `export { default as ${
        camelCase(name) + "Icon"
      } } from '@iconify/icons-mdi/${name}'`,
  );

  //iconsToExport.push(`\nexport { Icon,InlineIcon } from '@iconify/react'\n`)
  //iconsToExport.push(`export { default as BlendIcon } from './Icon'\n`)

  return iconsToExport.join("\n");
};

const contentMdi = templateMdi(iconNames);
const filenameMdi = path.join(__dirname, "./src/icons-mdi/iconSet.js");

fs.writeFileSync(filenameMdi, contentMdi);
