import template from './testTemplate.html';

describe('renderToDiv', () => {
  describe('when shouldShow is true', () => {
    it('contains the content from the compiled template', () => {
      expect(template({ name: 'josie', shouldShow: true })).toMatchSnapshot();
    });
  });

  describe('when shouldShow is false', () => {
    it('contains the content from the compiled template', () => {
      expect(template({ name: 'josie', shouldShow: false })).toMatchSnapshot();
    });
  });
});
