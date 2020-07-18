const fs = require('fs');
const path = require('path');

let inputFilePath = path.join(__dirname, '..', 'src', 'js', 'data.js');
let outputFilePath = path.join(__dirname, '..', 'src', 'js', 'data.json');

try {

  let iconData = fs.readFileSync(inputFilePath, { encoding: 'utf8' });
  iconData = iconData
    .replace(/window.iconsOriginal = /g, '')
    .replace(/;/g, '')
    .replace('\n', '')
    .replace(/name/g, '"name"')
    .replace(/uni/g, '"uni"')
    .replace(/dec/g, '"dec"')
    .replace(/tags/g, '"tags"');

  let iconsArray = JSON.parse(iconData);
  let map = new Map();
  iconsArray.forEach(element => map[element.name] = parseInt(element.dec))

  fs.writeFileSync(outputFilePath, JSON.stringify(map));
}
catch (e) {
  console.log(`Ups, unable to parse data.js: ${e}`);
}