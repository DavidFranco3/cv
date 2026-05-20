import { jsPDF } from 'jspdf';

export const generateCoverLetter = async (data, filename = 'Cover_Letter_David_Franco.pdf') => {
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });

  const PAGE_W = 210;
  const MARGIN_L = 25;
  const MARGIN_R = 25;
  const CONTENT_W = PAGE_W - MARGIN_L - MARGIN_R;

  const BLACK = [0, 0, 0];
  const DARK_GRAY = [40, 40, 40];
  const MID_GRAY = [80, 80, 80];

  const setColor = ([r, g, b]) => doc.setTextColor(r, g, b);

  const wrap = (text, w = CONTENT_W) => doc.splitTextToSize(text, w);

  const contact = data.contact;
  const letter = data.coverLetter;

  let y = 30;

  // Sender info
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  setColor(BLACK);
  doc.text(data.name.toUpperCase(), MARGIN_L, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  setColor(DARK_GRAY);
  doc.text(contact.location, MARGIN_L, y);
  y += 5;
  doc.text(`Tel: ${contact.phone}`, MARGIN_L, y);
  y += 5;
  doc.text(`Email: ${contact.email}`, MARGIN_L, y);
  y += 5;
  doc.text(`GitHub: github.com/${contact.github}`, MARGIN_L, y);
  y += 5;
  doc.text(`LinkedIn: linkedin.com/in/${contact.linkedin}`, MARGIN_L, y);
  y += 12;

  // Date
  const today = new Date();
  const dateStr = today.toLocaleDateString('es-MX', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  setColor(DARK_GRAY);
  doc.text(dateStr, MARGIN_L, y);
  y += 12;

  // Recipient
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  setColor(BLACK);
  doc.text(letter.recipient, MARGIN_L, y);
  y += 10;

  // Subject
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  setColor(BLACK);
  doc.text(letter.subject, MARGIN_L, y);
  y += 10;

  // Body
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  setColor(DARK_GRAY);

  const paragraphs = [letter.body1, letter.body2, letter.body3, letter.body4];
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
  doc.text(data.name, MARGIN_L, y);

  doc.save(filename);
};
