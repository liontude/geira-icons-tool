# Geira Icon Font

If you like these icons and need one that isn't included, please create an issue on GitHub and we'll add it for you shortly.

## Demo

You can see the icons via the live demo at https://icons.geira.com.

## Installation

```
npm install --save @geira/iconfont 
```

## Usage

### CSS

Add the following tag inside the html `<head>` tag:

```html
<link href="node_components/@geira/iconfont/dist/geira-icons.min.css" rel="stylesheet">
```

### SCSS

Import the provided SCSS file in your main SCSS file, ex: `styles.scss`:

```scss
@import '~@geira/iconfont/dist/geira-icons.scss';
```

## Development

1. Clone repository.

2. Make some updates to the files at `/src`.

3. Depending on your flow you will want
 
    a) compile by executing:

       npm run build
       
    b) or start the dev server:
     
       npm run start

## Publish

1. Make the necessary updates to the source files.

2. Bump the `package.json` version property, ex: from `0.0.1` to `0.0.2`.

3. Commit changes.

4. Add the above new version tag to the commit, ex: `0.0.2`.

5. Push changes to git repository.

6. Publish the new version to npm by executing in a console:

       npm publish

## License

The MIT License (MIT)

Copyright (c) Leo Roderick<br>
Copyright (c) Diosney Sarmiento<br>
Copyright (c) Jose Mojena<br>
Copyright (c) Liontude, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
