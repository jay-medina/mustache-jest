import { renderToDiv } from './testFile';

describe('renderToDiv', () => {
  let divElement: HTMLDivElement;

  beforeEach(() => {
    divElement = document.createElement('div');
    renderToDiv(divElement, { name: 'josie', shouldShow: true });
  });

  it('contains the content from the compiled template', () => {
    expect(divElement.innerHTML).toMatchSnapshot();
  })
});
