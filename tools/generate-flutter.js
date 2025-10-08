const fs = require('fs');
const path = require('path');

let inputFilePath = path.join(__dirname, '..', 'src', 'js', 'data.js');
let outputFilePath = path.join(__dirname, '..', 'src', 'js', 'flutter.txt');

// Función para convertir a camelCase y manejar números
function toCamelCase(str) {
  return str
    .replace(/_([a-z])/g, (match, p1) => p1.toUpperCase()) // Convierte _a en A
    .replace(/_(\d+)/g, (match, p1) => p1);               // Elimina _ antes de números
}

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

  iconsArray.forEach(element => {
    const camelCaseName = toCamelCase(element.name);
    ficons += `  static const IconData ${camelCaseName} = _GIconData(0x${element.uni});\n`;
  });

  fs.writeFileSync(outputFilePath, ficons);
} catch (e) {
  console.log(`Ups, unable to parse data.js: ${e}`);
}
