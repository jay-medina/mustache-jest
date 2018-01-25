const renderToDiv = require('./testFile');

describe('renderToDiv', () => {
  let divElement;

  beforeEach(() => {
    divElement = document.createElement('div');
    renderToDiv(divElement, { name: 'josie', shouldShow: true });
  });

  it('contains the content from the compiled template', () => {
    expect(divElement.innerHTML).toMatchSnapshot();
  });
});
