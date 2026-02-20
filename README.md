advanced-advanced-html-to-docx
============

advanced-html-to-docx converts HTML content to a DOCX file. It runs in Node.js and produces a buffer/blob that you can write to disk.

## Installation

Install from local source or your preferred distribution method.

## Usage

```js
const fileBuffer = await HTMLtoDOCX(htmlString, headerHTMLString, documentOptions, footerHTMLString);
```

Examples are under `example/`.

## Header, Footer, Page Number

- Enable with `header: true` and/or `footer: true` in `documentOptions`.
- `headerHTMLString` and `footerHTMLString` should be simple HTML. Use a top-level `<p>` for reliable rendering.
- Page numbers are appended to the first footer paragraph when `pageNumber: true` is set.

## Supported HTML (Common)

- Headings: `h1` to `h6`
- Text: `p`, `span`, `strong`, `b`, `i`, `u`, `s`, `del`, `strike`, `sub`, `sup`
- Lists: `ol`, `ul`, `li`
- Tables: `table`, `thead`, `tbody`, `tr`, `td`, `th`, `colgroup`, `col`
- Images: `img` (base64 data URLs are supported; external URLs require network access)
- Blockquote: `blockquote`
- Page break: `<div class="page-break" style="page-break-after: always;"></div>`

## Lists

`list-style-type` on `<ol>` is supported:

```
<ol style="list-style-type:lower-alpha;">
  <li>List item</li>
</ol>
```

Supported ordered list styles:
- upper-alpha
- lower-alpha
- upper-roman
- lower-roman
- lower-alpha-bracket-end
- decimal-bracket-end
- decimal-bracket
- decimal (default)

To start at a specific value, set `data-start="n"`. Example: `<ol data-start="3">` starts at `c.` for lower-alpha.

## Tables

Table widths are based on `width` in pixels, cm, or inches. Column widths can be set on `<col>` or on cells:

```
<table style="width: 600px; table-layout: fixed;">
  <tr>
    <td style="width: 200px;">Col 1</td>
    <td style="width: 200px;">Col 2</td>
    <td style="width: 200px;">Col 3</td>
  </tr>
</table>
```

## Images

Use base64 data URLs for reliable output:

```
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==" />
```

External image URLs depend on network access and may be blocked in some environments.

## Document Options

- `orientation`: `portrait` or `landscape`
- `pageSize`: `{ width, height }` (TWIP or px/cm/in)
- `margins`: `{ top, right, bottom, left, header, footer, gutter }`
- `headerType`: `default`, `first`, `even`
- `footerType`: `default`, `first`, `even`
- `header`: boolean
- `footer`: boolean
- `pageNumber`: boolean (only if footer is enabled)
- `font`, `fontSize`, `complexScriptFontSize`
- `table.row.cantSplit`: boolean
- `skipFirstHeaderFooter`: boolean
- `lineNumber`, `lineNumberOptions`
- `numbering.defaultOrderedListStyleType`
- `decodeUnicode`: boolean
- `lang`: language code

## Returns

`Promise<Buffer|Blob>`

## Notes

- Font family mapping varies across word processors.
- For browser usage, a blob polyfill may be required.

## License

MIT

