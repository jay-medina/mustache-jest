import template from './testTemplate.html';

export function renderToDiv(div: HTMLDivElement, data: object) {
  const htmlCompiled = template(data);

  div.innerHTML = htmlCompiled;
}
