/**
 * Mustache Transformer for Jest. Uses hogan.js for transformation
 * https://github.com/twitter/hogan.js/
 *
 * In order to properly configure transformer, the following needs to occur:
 *
 * Within jest configuration:
 *  Under transform object:
 *    "transform": {
 *      "^.+\\.html?$": "mustache-jest"
 *    }
 *
 * Within JS/TS file, the file can be imported as ES6 or commonjs module:
 *   ES6 Module:
 *
 *   import testFileTemplate from './test.html';
 *
 *   CommonJS:
 *
 *   const testFileTemplate = require('./test.html');
 *
 * To use:
 *
 * Invoke template as a function:
 *
 * testFileTemplate({ name: 'Josie' });
 *
 *
 *
 * @param {string} src - file source mustache template
 * @param {string} filename - file name
 * @param {object} config - jest configuration
 * @param {object} options - jest configuration options
 * @returns {string} - module that jest will process
 */
function process(src, filename, config, options) {
  const hoganImport = 'var hogan = require("hogan.js");';
  const srcStringified = JSON.stringify(src);
  const hoganCompile =
    'var compiledTemplate = hogan.compile(' + srcStringified + ');';
  const compiledRenderFunction =
    'compiledTemplate.render.bind(compiledTemplate);';
  const returnStatement = 'module.exports = ' + compiledRenderFunction;

  return hoganImport + hoganCompile + returnStatement;
}

module.exports = {
  process
};
