import { jsPDF } from 'jspdf';
import fs from 'fs';

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
doc.text('JOSÉ DAVID AYALA FRANCO', MARGIN_L, y);
y += 6;

doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
setColor(DARK_GRAY);
doc.text('Parácuaro, Michoacán, México | (+52) 453-152-7363 | josedavidayalafranco3@gmail.com', MARGIN_L, y);
y += 5;
doc.text('GitHub: github.com/DavidFranco3 | LinkedIn: linkedin.com/in/david-franco-247701220', MARGIN_L, y);
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
doc.text('To: Hiring Manager / Selection Team', MARGIN_L, y);
y += 5;
doc.setFont('helvetica', 'normal');
doc.text('Re: Application for Full Stack Developer / Software Engineer', MARGIN_L, y);
y += 10;

// Subject Line
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
setColor(BLACK);
doc.text('SUBJECT: Cover Letter — Full Stack / Backend Developer Position', MARGIN_L, y);
y += 10;

// Body
doc.setFont('helvetica', 'normal');
doc.setFontSize(10.5);
setColor(DARK_GRAY);

const paragraphs = [
  "Dear Hiring Manager,",
  "I am writing to express my enthusiastic interest in joining your organization as a Full Stack Developer / Software Engineer. With 4 years of experience specializing in backend architecture, scalable web systems, and database optimization, I am eager to bring my technical expertise and problem-solving skills to your team.",
  "Throughout my career at Isotech, I have engineered robust systems using Node.js, Express, React, Laravel, and SQL/NoSQL databases. My core accomplishments include redesigning a monolithic API into microservices (reducing response times by 85% from 800ms to 120ms), optimizing complex MySQL/PostgreSQL queries (cutting report generation times from 45s to 3s), and developing geolocation platforms that improved logistical efficiency by 25%.",
  "In addition to enterprise solutions, I am an active open-source creator and maintainer with packages published on NPM (such as fluent-rest-client and react-apextable-pro). I am deeply committed to writing clean, maintainable code, implementing rigorous automated testing (Jest, Postman), and mentoring junior developers to accelerate team productivity.",
  "My strong foundation in computer engineering and software design principles allows me to master new technologies quickly and deliver immediate value. I welcome the opportunity to discuss how my experience and passion for engineering excellence align with your goals.",
  "Thank you for your time and consideration."
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
doc.text('Sincerely,', MARGIN_L, y);
y += 8;

doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
setColor(BLACK);
doc.text('José David Ayala Franco', MARGIN_L, y);
y += 5;
doc.setFont('helvetica', 'normal');
doc.setFontSize(10);
setColor(DARK_GRAY);
doc.text('Software Developer / Computer Engineer', MARGIN_L, y);

const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
const outputPath = '/home/david/development/cv/Cover_Letter_David_Franco_EN.pdf';
fs.writeFileSync(outputPath, pdfBuffer);
console.log('PDF generated successfully at:', outputPath);
