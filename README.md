# Codeforces Dark Mode

A lightweight userscript that applies a dark theme to Codeforces pages using custom CSS. It runs at document start and covers common areas such as contest tables, problem statements, forms, code samples, and the site header.

## Features

- Dark page backgrounds, panels, tables, inputs, and code areas.
- Readable links and text with contrast adjusted for dark surfaces.
- Preserves Codeforces user rank and verdict colors, as well as flags and avatars.
- Supports `codeforces.com`, `codeforces.org`, `m1.codeforces.com`, and `m2.codeforces.com`.
- No external libraries or network requests are used by the script.

## Requirements

- Safari on macOS or iOS with a Safari-compatible userscript manager that supports userscripts.
- The userscript manager extension must be enabled and permitted to run on Codeforces.

The manager's interface and capabilities vary by product and Safari version. Consult its own instructions if the import or permission controls differ from the steps below.

## Install in Safari

1. Install a Safari-compatible userscript manager from a source you trust, then enable its Safari extension in Safari's **Settings → Extensions**. On iPhone or iPad, enable it under **Settings → Apps → Safari → Extensions** (the exact labels can vary by OS version).
2. Download [`Codeforces-Dark-Mode.user.js`](userscripts/Codeforces-Dark-Mode.user.js) from this repository. On GitHub, open the file and choose **Raw**, then save the page as a `.user.js` file if your browser does not download it directly.
3. Open the downloaded file or use the manager's **Add/Import** control. If prompted, allow the manager to install the script.
4. In Safari's extension settings, allow the userscript manager to access `codeforces.com` and, if you use them, `codeforces.org` and its `m1`/`m2` subdomains.
5. Open or reload a Codeforces page. The dark styling should be applied automatically.

To update, install the latest `.user.js` from this repository through the manager. To disable or remove the theme, turn off or delete **Codeforces Dark Mode** in the manager.

## Files

- `userscripts/Codeforces-Dark-Mode.user.js` — installable userscript.
- `LICENSE` — MIT License.

## Compatibility and limitations

The theme uses CSS selectors for Codeforces' current page structure. Some newly added pages or elements may retain their original styling until the script is updated. It changes page appearance only; it does not change Codeforces settings or submit data.

## License

Released under the MIT License. See [`LICENSE`](LICENSE).
