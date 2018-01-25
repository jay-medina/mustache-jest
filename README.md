## Mustache Transformer for Jest. 

Simple module to compile mustache html templates for Jest testing.

Transformer uses hogan.js: https://github.com/twitter/hogan.js/

### Jest configuration: 

In order to properly configure transformer, the following needs to occur:

#### Jest configuration

Under transform object, and a mapper to the transformer. Below is an example of mapping `html` files.

```JSON
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.html?$": "<rootDir>/transformer/mustacheTransformer.js"
  }
```

#### Within JS/TS file, the file can be imported as ES6 or commonjs module:

ES6 Module:
```TypeScript
 import testFileTemplate from './test.html';

 function renderHtml(data: Data) {
   return testFileTemplate(data);
 }
```
CommonJS:
```JavaScript
  const testFileTemplate = require('./test.html');

  function renderHtml(data) {
   return testFileTemplate(data);
 }
```

#### To use:

Invoke template as a function. The `render` function from the compiled template is returned and can be invoked directly. 

Example:

test.html 
```html
  <div>
    <p>Hello {{name}}!</p>
    {{#shouldShow}}
    <div>Welcome!</div>
    {{/shouldShow}}
    {{^shouldShow}}
    <div>GoodBye!!</div>
    {{/shouldShow}}
  </div>
```

test.js
```JavaScript
  console.log(testFileTemplate({ name: 'Josie', shouldShow: true }));
```

output:
```html
  <div>
    <p>Hello Josie</p>
    <div>Welcome!</div>
  </div>
```
