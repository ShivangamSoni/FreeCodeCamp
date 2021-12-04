import { marked, Renderer } from "marked";
import { sanitize } from "dompurify";
import Prism from "prismjs";

marked.setOptions({
  gfm: true,
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },
});

const renderer = new Renderer();
renderer.link = (href, title, text) => {
  return `<a href=${href} title=${title} target="_blank">${text}</a>`;
};

const getHTML = (markdown) => {
  return sanitize(marked(markdown, { renderer }));
};

export default getHTML;
