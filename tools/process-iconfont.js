const fs   = require('fs');
const path = require('path');

let inputFilePath  = path.join(__dirname, '..', 'fixtures', 'icon-data');
let outputFilePath = path.join(__dirname, '..', 'src', 'js', 'data.js');

let iconData = fs
  .readFileSync(inputFilePath, {
    encoding: 'utf8'
  })
  .replace(/\sunderscore\sone/g, '_1 ')
  .replace(/\sunderscore\stwo/g, '_2 ')
  .replace(/\sunderscore\sthree/g, '_3 ')
  .replace(/\sunderscore\sfour/g, '_4 ')
  .replace(/\sunderscore\sfive/g, '_5 ')
  .replace(/\sunderscore\ssix/g, '_6 ')
  .replace(/\sunderscore\sseven/g, '_7 ')
  .replace(/\sunderscore\seight/g, '_8 ')
  .replace(/\sunderscore\snine/g, '_9 ')
  .replace(/\sunderscore\sten/g, '_10 ')
  .replace(/\sunderscore\s/g, '_')
  .replace(/sub\s/g, '')
  .replace(/\sby\suni/g, '|')
  .replace(/;/g, '|')
  .replace(/\s#tags\s/g, '')
  .split('\n');

let processed = iconData
  .filter((line) => line.trim().length > 0 && line.trim()[0] !== '#')
  .map((line) => {

    let splittedLine = line
      .replace(/\s/g, '')
      .replace(/,/g, ', ')
      .split('|');

    return {
      name: splittedLine[0],
      uni : splittedLine[1],
      tags: splittedLine[2]
    };
  });

let result = 'window.iconsOriginal = ' + JSON
  .stringify(processed, null, 2)
  .replace(/\"name\"/g, 'name')
  .replace(/\"uni\"/g, 'uni')
  .replace(/\"tags\"/g, 'tags')
  + ';';

fs.writeFileSync(outputFilePath, result);
