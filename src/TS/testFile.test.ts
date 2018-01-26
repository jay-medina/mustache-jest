import { renderToDiv } from './testFile';

describe('renderToDiv', () => {
  let divElement: HTMLDivElement;

  describe('when shouldShow is true', () => {
    beforeEach(() => {
      divElement = document.createElement('div');
      renderToDiv(divElement, { name: 'josie', shouldShow: true });
    });

    it('contains the content from the compiled template', () => {
      expect(divElement.innerHTML).toMatchSnapshot();
    });
  });

  describe('when shouldShow is false', () => {
    beforeEach(() => {
      divElement = document.createElement('div');
      renderToDiv(divElement, { name: 'josie', shouldShow: false });
    });

    it('contains the content from the compiled template', () => {
      expect(divElement.innerHTML).toMatchSnapshot();
    });
  });
});
