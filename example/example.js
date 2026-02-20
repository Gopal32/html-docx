/* eslint-disable no-console */
import fs from 'fs';
import HTMLtoDOCX from '../src/index.js';

const filePath = './example.docx';

const headerHTMLString = `<p style="text-align:left; font-size:10pt;">
  <span>Advanced DOCX Header</span>
</p>`;

const footerHTMLString = `<p style="text-align:left; font-size:10pt;">
  <span>Advanced DOCX Footer</span>
</p>`;
const htmlString = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Advanced HTML for DOCX Conversion</title>
  </head>
  <body style="font-family: Times New Roman, serif; font-size: 12pt; color: #222222;">
    <h1 style="text-align: center; color: #1a237e;">Advanced HTML Coverage</h1>
    <p style="text-align: center; margin-top: 0;">
      A single HTML document showcasing the common content and styles supported by the converter.
    </p>

    <h2 style="color: #0d47a1;">Text Styling</h2>
    <p>
      This paragraph includes <strong>bold</strong>, <i>italic</i>,
      <u>underline</u>, <s>strikethrough</s>,
      <span style="color: #d32f2f;">colored text</span>,
      <span style="background-color: #ffecb3;">highlighted text</span>,
      <span style="font-size: 16pt;">larger text</span>,
      and <span style="font-family: 'Courier New', monospace;">monospace font</span>.
    </p>

    <h2 style="color: #0d47a1;">Paragraph Alignment and Indentation</h2>
    <p style="text-align: left;">Left aligned paragraph.</p>
    <p style="text-align: center;">Center aligned paragraph.</p>
    <p style="text-align: right;">Right aligned paragraph.</p>
    <p style="margin-left: 40px;">Left indented paragraph.</p>
    <p style="margin-right: 40px;">Right indented paragraph.</p>
    <p style="margin-left: 40px; margin-right: 40px;">Left and right indented paragraph.</p>

    <h2 style="color: #0d47a1;">Blockquote</h2>
    <blockquote style="border-left: 4px solid #90a4ae; padding-left: 12px; color: #455a64;">
      Blockquote text with a subtle left border and muted color.
    </blockquote>

    <h2 style="color: #0d47a1;">Lists</h2>
    <p>Unordered list (circle):</p>
    <ul style="list-style-type: circle;">
      <li>First unordered item</li>
      <li>Second unordered item
        <ul style="list-style-type: square;">
          <li>Nested unordered item A</li>
          <li>Nested unordered item B</li>
        </ul>
      </li>
    </ul>

    <p>Ordered list (decimal):</p>
    <ol style="list-style-type: decimal;">
      <li>First ordered item</li>
      <li>Second ordered item</li>
    </ol>

    <p>Ordered list (lower-alpha) starting at 3:</p>
    <ol style="list-style-type: lower-alpha;" data-start="3">
      <li>Third item</li>
      <li>Fourth item</li>
    </ol>

    <h2 style="color: #0d47a1;">Images</h2>
    <p>Inline base64 image:</p>
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
      alt="Red dot"
    />

    <h2 style="color: #0d47a1;">Table</h2>
    <table style="width: 800px; table-layout: fixed; border-collapse: collapse;">
      <tr>
        <th style="width: 200px; border: 1px solid #999999; background-color: #e3f2fd; padding: 6px;">Country</th>
        <th style="width: 200px; border: 1px solid #999999; background-color: #e3f2fd; padding: 6px;">Capital</th>
        <th style="width: 400px;border: 1px solid #999999; background-color: #e3f2fd; padding: 6px;">Notes</th>
      </tr>
      <tr>
        <td style="border: 1px solid #999999; padding: 6px;">India</td>
        <td style="border: 1px solid #999999; padding: 6px;">New Delhi</td>
        <td style="border: 1px solid #999999; padding: 6px;">Large population</td>
      </tr>
      <tr>
        <td style="border: 1px solid #999999; padding: 6px;">USA</td>
        <td style="border: 1px solid #999999; padding: 6px;">Washington DC</td>
        <td style="border: 1px solid #999999; padding: 6px;">
          <ol style="list-style-type: decimal;">
            <li>Federal capital</li>
            <li>District of Columbia</li>
          </ol>
        </td>
      </tr>
      <tr>
        <td style="border: 1px solid #999999; padding: 6px;">Bolivia</td>
        <td style="border: 1px solid #999999; padding: 6px;">Sucre / La Paz</td>
        <td style="border: 1px solid #999999; padding: 6px;">Two capitals</td>
      </tr>
    </table>

    <div class="page-break" style="page-break-after: always;"></div>

    <h2 style="color: #0d47a1;">Second Page</h2>
    <p>
      Content after a page break should start on a new page.
      This paragraph verifies that section separation works as expected.
    </p>
  </body>
</html>
`;

(async () => {
  const fileBuffer = await HTMLtoDOCX(htmlString, headerHTMLString, {
    table: { row: { cantSplit: true } },
    header: true,
    footer: true,
    pageNumber: true,
  }, footerHTMLString);

  fs.writeFile(filePath, fileBuffer, (error) => {
    if (error) {
      console.log('Docx file creation failed');
      return;
    }
    console.log('Docx file created successfully');
  });
})();
