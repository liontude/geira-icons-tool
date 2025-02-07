const fs = require('fs');
const path = require('path');

let inputFilePath = path.join(__dirname, '..', 'src', 'js', 'data.js');
let outputFilePath = path.join(__dirname, '..', 'src', 'js', 'flutter.txt');

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
  let ficons = '';

  // static const IconData abjadArabic = const _MdiIconData(0xf1328);

  iconsArray.forEach(element => ficons += `static const IconData ${element.name} = _GIconData(0x${element.uni});\n`)

  fs.writeFileSync(outputFilePath, ficons.replace(',', ''));
}
catch (e) {
  console.log(`Ups, unable to parse data.js: ${e}`);
}