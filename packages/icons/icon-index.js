const fs = require("fs");
const path = require("path");

const dirname = path.join(__dirname, "./src/svgJSON");
const icons = fs
  .readdirSync(dirname)
  .filter(filename => /\.js$/.test(filename))
  .map(filename => path.basename(filename, ".js"));

const template = icons => {
  let iconsToExport = icons.map(
    //name => `export { default as ${name} } from './components/${name}'`
    name => `export { default as ${name} } from './${name}'`,
  );

  //iconsToExport.push(`export * from './icons-fe/iconSet'\n`);
  //iconsToExport.push(`export * from './icons-bx/iconSet'\n`);
  //iconsToExport.push(`export * from './icons-mdi/iconSet'\n`);

  //iconsToExport.push(`\nexport { Icon, InlineIcon } from '@iconify/react'\n`);
  iconsToExport.push(`export { default as BlendIcon } from './BlendIcon'\n`);
  //iconsToExport.unshift("\n");
  return iconsToExport.join("\n");
};

const content = template(icons);
const filename = path.join(__dirname, "./src/index.js");
fs.writeFileSync(filename, content);
//fs.writeFileSync(filename, content, { flag: "a+" });

/*

const svgFolders = fs.readdirSync(dirname).filter(filename => (fs.lstatSync(path.join(dirname, filename)).isDirectory()))
console.log(svgFolders);
let icons = [];

for (let i = 0; i < svgFolders.length; i++) {
    const svgIcons = findInDir('./assets/material-design-icons/' + svgFolders[i] + '/svg/production', /\_24px.svg$/);

    console.log(svgFolders[i], svgIcons.length)
    icons = icons.concat(svgIcons);
}

let iconsToExport = [];

// weird... there are duplicates..
let uniqueNames = [];
icons.forEach(name => {
    //ic_important_devices_24px.svg',
    //let componentName=path.basename(name, '.svg')

    let componentName = path.basename(name, '.svg').substr(3);
    if (uniqueNames.indexOf(componentName) === -1) {
        uniqueNames.push(componentName);
        componentName = 'Tro' + pascalCase(componentName.slice(0, -5));
        //console.log(name,componentName);
        let lines = [];
        lines.push(`import { ReactComponent as ${componentName} } from '../${name}'`);
        lines.push(`export default ${componentName};`);

        const filename = path.join(__dirname, './src/', componentName + '.js');
        console.log(filename);
        fs.writeFileSync(filename, lines.join('\n'));
        iconsToExport.push(`export { default as ${componentName} } from './${componentName}'; // ${name}`);
    }

});

iconsToExport.push(`export { default as Icon } from './Icon'\n`)
fs.writeFileSync(path.join(__dirname, './src/index.js'), iconsToExport.join('\n'));
*/
