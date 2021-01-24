// ==UserScript==
// @name         Refined Google Search
// @description  Improve design and UX of Google Search
// @version      1.0.0
// @author       Karl Horky
// @namespace    https://www.karlhorky.com/
// @match        https://www.google.com/search*
// @grant        none
// ==/UserScript==

const styleEl = document.createElement("style");
document.body.appendChild(styleEl);

[
  // Reduce excessive whitespace around search input to allow
  // for more results on the screen at once
  `.srp #searchform { top: 4px !important; }`,
  `.dodTBe { height: 38px; }`,

  // Make result title text size smaller to improve readability and
  // allow for more results on screen at once
  `#res h3, #botstuff h3 { font-size: 18px; }`,
].forEach((rule) => styleEl.sheet.insertRule(rule));
