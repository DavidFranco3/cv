import { jsPDF } from 'jspdf';
import fs from 'fs';
import { translations } from './src/utils/translations.js';

const cvData = translations.en.cv;
const letter = cvData.coverLetter;
const contact = cvData.contact;

const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });

const PAGE_W = 210;
const MARGIN_L = 25;
const MARGIN_R = 25;
const CONTENT_W = PAGE_W - MARGIN_L - MARGIN_R;

const BLACK = [0, 0, 0];
const DARK_GRAY = [40, 40, 40];

const setColor = ([r, g, b]) => doc.setTextColor(r, g, b);
const wrap = (text, w = CONTENT_W) => doc.splitTextToSize(text, w);

let y = 25;

// Header / Sender Info
doc.setFont('helvetica', 'bold');
doc.setFontSize(16);
setColor(BLACK);
doc.text(cvData.name.toUpperCase(), MARGIN_L, y);
y += 6;

doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
setColor(DARK_GRAY);
doc.text(`${contact.location} | Tel: ${contact.phone} | ${contact.email}`, MARGIN_L, y);
y += 5;
doc.text(`GitHub: github.com/${contact.github} | LinkedIn: linkedin.com/in/${contact.linkedin}`, MARGIN_L, y);
y += 8;

// Divider line
doc.setDrawColor(200, 200, 200);
doc.setLineWidth(0.4);
doc.line(MARGIN_L, y, PAGE_W - MARGIN_R, y);
y += 10;

// Date
const today = new Date();
const dateStr = today.toLocaleDateString('en-US', {
  year: 'numeric', month: 'long', day: 'numeric'
});
doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
setColor(DARK_GRAY);
doc.text(`Date: ${dateStr}`, MARGIN_L, y);
y += 10;

// Recipient
doc.setFont('helvetica', 'bold');
doc.setFontSize(10.5);
setColor(BLACK);
doc.text(letter.recipient, MARGIN_L, y);
y += 10;

// Subject Line
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
setColor(BLACK);
doc.text(letter.subject, MARGIN_L, y);
y += 10;

// Body
doc.setFont('helvetica', 'normal');
doc.setFontSize(10.5);
setColor(DARK_GRAY);

const paragraphs = [
  letter.body1,
  letter.body2,
  letter.body3,
  letter.body4
];

for (const p of paragraphs) {
  if (y > 260) { doc.addPage(); y = 25; }
  const lines = wrap(p);
  doc.text(lines, MARGIN_L, y);
  y += lines.length * 4.8 + 4;
}

y += 4;

// Closing
doc.setFont('helvetica', 'normal');
doc.setFontSize(10.5);
setColor(DARK_GRAY);
doc.text(letter.closing, MARGIN_L, y);
y += 8;

doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
setColor(BLACK);
doc.text(cvData.name, MARGIN_L, y);
y += 5;
doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
setColor(DARK_GRAY);
doc.text(cvData.role, MARGIN_L, y);

const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
const outputPath = '/home/david/development/cv/Cover_Letter_David_Franco_EN.pdf';
fs.writeFileSync(outputPath, pdfBuffer);
console.log('PDF generated successfully at:', outputPath);
