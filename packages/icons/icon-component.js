const fs = require('fs')
const path = require('path')
const svgson = require('svgson')

const prefix = 'Mat';


function pascalCase(s) {
    //return s.match(/[a-z]+/gi)
    return s.match(/[a-zA-Z0-9]+/gi)
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
        })
        .join('')
}

function findInDir(dir, filter, fileList = []) {
    if (fs.existsSync(dir)) {

        const files = fs.readdirSync(dir);

        files.forEach((file) => {
            const filePath = path.join(dir, file);
            const fileStat = fs.lstatSync(filePath);

            if (fileStat.isDirectory()) {
                findInDir(filePath, filter, fileList);
            }
            else if (filter.test(filePath)) {
                fileList.push(filePath);
            }
        });
    }
    return fileList;
}


function svgComponents(svgFile, svgComponent) {

    const componentBase = ["import React from 'react';", "import IconBase from './IconBase';"];


    const svg = fs.readFileSync(svgFile).toString();
    const svgJSON = svgson.parseSync(svg);
    fs.writeFileSync(path.join(__dirname, './src/svgJSON/' + svgComponent + '.js'), 'export default ' + JSON.stringify(svgJSON) + '\n');

    let lines = [];
    lines = lines.concat(componentBase);
    lines.push(`const ${svgComponent} =(props)=>{`);
    lines.push(`return <IconBase {...props} viewBox="0 0 24 24">`);
    svgPath(svgJSON).forEach(d => {
        if (typeof d!=='undefined') {
        lines.push(`<path d="${d}"/>`);
        }
    })
    lines.push(`</IconBase>`);
    lines.push(`};`);
    lines.push(`export default ${svgComponent};`);
    fs.writeFileSync(path.join(__dirname, './components/' + svgComponent + '.js'), lines.join('\n'));
    console.log('New component ', svgComponent);
}
const svgPath = (svg) => {
    let paths = [];

    svg.children.forEach(d => {
        paths.push(d.attributes.d);
    })
    // paths.push("M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z");

    return paths;
}
const dirname = path.join(__dirname, './assets/material-design-icons');
const svgFolders = fs.readdirSync(dirname).filter(filename => (fs.lstatSync(path.join(dirname, filename)).isDirectory()))
console.log(svgFolders);
let icons = [];

for (let i = 0; i < svgFolders.length; i++) {
    /*eslint no-useless-escape: "off"*/
    const svgIcons = findInDir('./assets/material-design-icons/' + svgFolders[i] + '/svg/production', /\_24px.svg$/);

    console.log(svgFolders[i], svgIcons.length)
    icons = icons.concat(svgIcons);
}


// weird... there are duplicates..
let uniqueNames = [];
icons.forEach(name => {
    //ic_important_devices_24px.svg',
    //let componentName=path.basename(name, '.svg')

    let componentName = path.basename(name, '.svg').substr(3);
    if (uniqueNames.indexOf(componentName) === -1) {
        uniqueNames.push(componentName);
        const svgComponent = prefix + pascalCase(componentName.slice(0, -5));
        svgComponents(name, svgComponent);
    }
});

const customDirName = path.join(__dirname, './assets/custom');
let customIcons = findInDir(customDirName, /.svg$/);

console.log(customIcons, customIcons.length)
customIcons.forEach(name => {
    //ic_important_devices_24px.svg',
    //let componentName=path.basename(name, '.svg')

    let componentName = path.basename(name, '.svg');
    if (uniqueNames.indexOf(componentName) === -1) {
        uniqueNames.push(componentName);
        const svgComponent = pascalCase(componentName);
        //console.log(componentName);
        svgComponents(name, svgComponent);
    }
});



/*
const componentBase=["import React from 'react';","import IconBase from './IconBase';"];
icons.forEach(name => {
    //ic_important_devices_24px.svg',
    //let componentName=path.basename(name, '.svg')

    let componentName = path.basename(name, '.svg').substr(3);
    if (uniqueNames.indexOf(componentName) === -1) {
        uniqueNames.push(componentName);
        componentName = prefix + pascalCase(componentName.slice(0, -5));

        const svg=fs.readFileSync(name).toString();
        const svgJSON=svgson.parseSync(svg);
        fs.writeFileSync(path.join(__dirname, './src/svgJSON/'+componentName+'.js'), 'export default '+JSON.stringify(svgJSON)+'\n');

        let lines=[];
        lines=lines.concat(componentBase);
        lines.push(`const ${componentName} =(props)=>{`);
        lines.push(`return <IconBase {...props} viewBox="0 0 24 24">`);
        svgPath(svgJSON).forEach(d=>{
            lines.push(`<path d="${d}"/>`);
        })
        lines.push(`</IconBase>`);
        lines.push(`};`);
        lines.push(`export default ${componentName};`);
        fs.writeFileSync(path.join(__dirname, './components/'+componentName+'.js'), lines.join('\n'));
    }

});
*/
/*
import React from 'react';
import IconBase from './IconBase'

const Test = () => {
    return <IconBase viewBox="0 0 24 24">
        <path
            d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z"/>
    </IconBase>
};

export default Test;
*/


//const svgIcons = findInDir('./assets/material-design-icons/' + svgFolders[i] + '/svg/production', /\_24px.svg$/);
//ic_important_devices_24px.svg',

//const svgFile='./assets/material-design-icons/action/svg/production/ic_3d_rotation_24px.svg';

//const svg=fs.readFileSync(svgFile).toString();
//svgson.parseSync(input[, options])
//console.log(svg);
//const svgJSON=svgson.parseSync(svg);
//const lines=['const svg='+JSON.stringify(svgJSON),'module.exports = svg;'];
//fs.writeFileSync(path.join(__dirname, './src/svgJSON/index.js'), lines.join('\n'));
//fs.writeFileSync(path.join(__dirname, './src/svgJSON/index.js'), 'export default '+JSON.stringify(svgJSON)+'\n');

//console.log(svgJSON);
//console.log(svgJSON.children[0]);
/*
export default {
    title: 'Icons',
};

export { default as Ac } from './Ac'

const env = {
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(','),
        useNextVariants: true
    }
}
module.exports = env;*/
