// ==UserScript==
// @name         Codeforces Dark Mode
// @namespace    local.codeforces.darkmode
// @version      1.0.0
// @description  A complete dark theme for Codeforces pages.
// @match        https://codeforces.com/*
// @match        https://codeforces.org/*
// @match        https://m1.codeforces.com/*
// @match        https://m2.codeforces.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const css = `
    :root {
      color-scheme: dark !important;
      --cf-bg: #1f1f1f;
      --cf-surface: #282828;
      --cf-raised: #323232;
      --cf-border: #484848;
      --cf-text: #dedbd4;
      --cf-muted: #b6b3ac;
      --cf-link: #9fc5ff;
      --cf-link-hover: #c6dcff;
      --cf-input: #222222;
      --cf-code: #222222;
    }

    html, body {
      background: var(--cf-bg) !important;
      color: var(--cf-text) !important;
    }
    body, #body, #pageContent, .content, .roundbox, .roundbox.borderTopRound,
    .datatable, .sidebar, .menu, .menuList, .second-level-menu,
    .forum-topic, .blog-entry, .comment, .ttypography, .problem-statement,
    .problemindexholder, .sample-test, .sample-tests, .tab, .userbox,
    .info-box, .profile, .contest, .contest-table, .lang-chooser, .pagination,
    .toggleDiv, .notice, .alert, .cm-content, .CodeMirror, .ace_editor,
    .ace_gutter, .select2-container, .select2-dropdown {
      background-color: var(--cf-surface) !important;
      color: var(--cf-text) !important;
      border-color: var(--cf-border) !important;
    }

    #header, #header div, #footer, .menu, .second-level-menu,
    .roundbox-lt, .roundbox-rt, .roundbox-lb, .roundbox-rb {
      background-color: var(--cf-surface) !important;
      border-color: var(--cf-border) !important;
    }
    .roundbox { border-radius: 5px !important; }

    h1, h2, h3, h4, h5, h6, p, li, label, td, th, .notice,
    .problem-statement, .ttypography, .entrant, .userbox,
    .contest-name, .header, .caption, .info, .tag-box {
      color: var(--cf-text) !important;
    }
    .gray, .minor, .time, .smaller,
    .contest-state-phase, .contest-state-regular, .lastSubmission {
      color: var(--cf-muted) !important;
    }
    a { color: var(--cf-link) !important; }
    a:hover { color: var(--cf-link-hover) !important; }

    table, thead, tbody, tr, th, td { border-color: var(--cf-border) !important; }
    th, thead td, .datatable thead tr {
      background: var(--cf-raised) !important;
      color: var(--cf-text) !important;
    }
    tr:nth-child(even), .datatable tr:nth-child(even),
    .highlighted-row, .userlist tr:nth-child(even) {
      background-color: #2b2b2b !important;
    }
    tr:nth-child(odd), .datatable tr:nth-child(odd),
    .userlist tr:nth-child(odd) {
      background-color: #252525 !important;
    }
    /* Codeforces often sets striped colors directly on individual cells. */
    table tr:nth-child(even) > td, .datatable tr:nth-child(even) > td,
    .userlist tr:nth-child(even) > td {
      background-color: #2b2b2b !important;
      color: var(--cf-text) !important;
    }
    table tr:nth-child(odd) > td, .datatable tr:nth-child(odd) > td,
    .userlist tr:nth-child(odd) > td {
      background-color: #252525 !important;
      color: var(--cf-text) !important;
    }
    table tr:hover > td, .datatable tr:hover > td { background-color: #383838 !important; }
    table th, .datatable th, thead td {
      background-color: #343434 !important;
      color: var(--cf-text) !important;
    }
    /* Override Codeforces' black inline text inside dark standings tables. */
    table td, table td *, .datatable td, .datatable td * {
      color: var(--cf-text) !important;
    }
    table td a:not([class*="user-"]), .datatable td a:not([class*="user-"]) {
      color: var(--cf-link) !important;
    }
    .user-black, .user-4000, .legendary-user-first-letter {
      color: var(--cf-text) !important;
      -webkit-text-fill-color: var(--cf-text) !important;
    }
    .user-legendary { text-shadow: none !important; }
    .user-gray { color: #b9c0c9 !important; }
    .user-green { color: #73d3a3 !important; }
    .user-cyan { color: #62d6d0 !important; }
    .user-blue { color: #8db7ff !important; }
    .user-violet { color: #c3a0ff !important; }
    .user-orange { color: #ffb36b !important; }
    .user-red { color: #ff7777 !important; }

    input, textarea, select, button, .submit, .button, .custom-select,
    .select2-selection {
      background-color: var(--cf-input) !important;
      color: var(--cf-text) !important;
      border: 1px solid var(--cf-border) !important;
    }
    input::placeholder, textarea::placeholder { color: #a7a7a7 !important; }
    button:hover, .submit:hover, .button:hover { background-color: #3a3a3a !important; }
    input[type="checkbox"], input[type="radio"] { accent-color: #7aa7f7; }

    pre, code, .prettyprint, .source, .program-source, .sample-test pre,
    .sample-test .input, .sample-test .output, .ace_gutter,
    .CodeMirror-gutters, .CodeMirror-linenumber {
      background-color: var(--cf-code) !important;
      color: var(--cf-text) !important;
      border-color: var(--cf-border) !important;
    }
    .ace-monokai, .ace-monokai .ace_gutter { background: var(--cf-code) !important; }

    hr, .hr, .separator { border-color: var(--cf-border) !important; }
    img:not([src*="flag"]):not([src*="icon"]):not([src*="avatar"]),
    video, canvas { background-color: transparent !important; }
    /* Blend white pixels in the Codeforces header logo into its dark header. */
    #header img:not([src*="flag"]):not([src*="icon"]):not([src*="avatar"]) {
      filter: invert(1) hue-rotate(180deg) !important;
      mix-blend-mode: screen !important;
    }
    ::selection { background: #42658c !important; color: white !important; }

    /* Keep rank colors, verdict colors, flags, and avatars recognizable. */
    .user-red, .user-orange, .user-violet, .user-blue, .user-cyan,
    .user-green, .user-gray, .verdict-accepted, .verdict-rejected,
    .verdict-compilation { background-color: transparent !important; }
  `;

  const install = () => {
    if (document.getElementById('cf-dark-mode-style')) return;
    const style = document.createElement('style');
    style.id = 'cf-dark-mode-style';
    style.textContent = css;
    (document.head || document.documentElement).appendChild(style);
  };

  install();
  new MutationObserver(install).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
