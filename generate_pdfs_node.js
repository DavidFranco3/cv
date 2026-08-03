import { jsPDF } from 'jspdf';
import fs from 'fs';
import { translations } from './src/utils/translations.js';

function createCvPdf(data, outputPath) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  const PAGE_W = 210;
  const PAGE_H = 297;
  const MARGIN_X = 15;
  const CONTENT_W = PAGE_W - (MARGIN_X * 2);

  const BLACK = [0, 0, 0];
  const DARK_GRAY = [40, 40, 40];
  const MID_GRAY = [80, 80, 80];
  const LIGHT_GRAY = [120, 120, 120];
  const BORDER_GRAY = [200, 200, 200];

  const setColor = ([r, g, b]) => doc.setTextColor(r, g, b);

  const hline = (yPos) => {
    doc.setDrawColor(...BORDER_GRAY);
    doc.setLineWidth(0.3);
    doc.line(MARGIN_X, yPos, PAGE_W - MARGIN_X, yPos);
  };

  const sectionTitle = (title, yPos) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    setColor(BLACK);
    doc.text(title.toUpperCase(), MARGIN_X, yPos);
    hline(yPos + 0.8);
    return yPos + 4.8;
  };

  const wrapM = (text, w = CONTENT_W) => doc.splitTextToSize(text, w);

  const pdfLabels = data.pdfLabels || {
    professionalProfile: 'Perfil Profesional',
    education: 'Formación Académica',
    languages: 'Idiomas',
    experience: 'Experiencia Profesional',
    techStack: 'Competencias Técnicas',
    present: 'Presente'
  };

  let y = 14;

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  setColor(BLACK);
  doc.text(data.name.toUpperCase(), PAGE_W / 2, y, { align: 'center' });
  y += 7.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  setColor(DARK_GRAY);

  const contactInfo = [
    data.contact.location,
    data.contact.phone,
    data.contact.email
  ].join('  •  ');
  doc.text(contactInfo, PAGE_W / 2, y, { align: 'center' });
  y += 5.0;

  const links = [
    { label: 'Github', name: data.contact.github, url: `https://github.com/${data.contact.github}` },
    { label: 'Linkedin', name: 'David Franco', url: `https://www.linkedin.com/in/${data.contact.linkedin}/` },
    { label: 'NPM', name: data.contact.npm, url: `https://www.npmjs.com/~${data.contact.npm}` }
  ];

  doc.setFontSize(10);
  const bullet = '   •   ';
  const linkItems = links.map(l => `${l.label}: ${l.name}`);
  const totalW = doc.getTextWidth(linkItems.join(bullet));

  let currentX = (PAGE_W / 2) - (totalW / 2);
  links.forEach((l, i) => {
    const itemText = `${l.label}: ${l.name}`;
    const itemW = doc.getTextWidth(itemText);
    doc.text(itemText, currentX, y);
    doc.link(currentX, y - 3, itemW, 4, { url: l.url });
    currentX += itemW;
    if (i < links.length - 1) {
      doc.text(bullet, currentX, y);
      currentX += doc.getTextWidth(bullet);
    }
  });

  y += 9.0;

  // Summary
  y = sectionTitle(pdfLabels.professionalProfile, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  setColor(DARK_GRAY);
  const summaryLines = wrapM(data.summary);
  doc.text(summaryLines, MARGIN_X, y);
  y += summaryLines.length * 4.5 + 5.0;

  // Skills
  y = sectionTitle(pdfLabels.techStack, y);

  const allSkillCategories = [
    ...data.skills,
    {
      category: pdfLabels.languages,
      techs: (data.languages || []).map(l => `${l.name}: ${l.level}`)
    }
  ];

  allSkillCategories.forEach((skill) => {
    const labelText = `•  ${skill.category}: `;
    const fullText = `${labelText}${skill.techs.join('  •  ')}`;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.8);
    const lines = wrapM(fullText, CONTENT_W - 2);

    lines.forEach((line, lineIdx) => {
      if (lineIdx === 0 && line.startsWith(labelText)) {
        doc.setFont('helvetica', 'bold');
        setColor(BLACK);
        doc.text(labelText, MARGIN_X, y);
        const labelW = doc.getTextWidth(labelText);

        doc.setFont('helvetica', 'normal');
        setColor(DARK_GRAY);
        doc.text(line.substring(labelText.length), MARGIN_X + labelW, y);
      } else {
        doc.setFont('helvetica', 'normal');
        setColor(DARK_GRAY);
        doc.text(line, MARGIN_X + 4, y);
      }
      y += 4.4;
    });
    y += 1.2;
  });

  y += 3.5;

  // Experience
  y = sectionTitle(pdfLabels.experience, y);

  data.experience.forEach((exp) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11.5);
    setColor(BLACK);
    doc.text(exp.company.toUpperCase(), MARGIN_X, y);

    setColor(MID_GRAY);
    doc.setFont('helvetica', 'italic');
    const dateStr = exp.date
      .replace(/presente/gi, pdfLabels.present)
      .replace(/present/gi, pdfLabels.present)
      .replace(/actualidad/gi, pdfLabels.present);

    const dateW = doc.getTextWidth(dateStr);
    doc.text(dateStr, PAGE_W - MARGIN_X - dateW, y);
    y += 4.8;

    doc.setFont('helvetica', 'bolditalic');
    doc.setFontSize(10.5);
    setColor(DARK_GRAY);
    doc.text(exp.role, MARGIN_X, y);
    y += 4.4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.8);
    setColor(DARK_GRAY);
    const descLines = wrapM(exp.desc);
    doc.text(descLines, MARGIN_X, y);
    y += descLines.length * 4.4 + 2.0;

    exp.bullets.forEach(bullet => {
      const bLines = wrapM(`•  ${bullet}`, CONTENT_W - 5);
      doc.text(bLines, MARGIN_X + 2, y);
      y += bLines.length * 4.3;
    });

    y += 4.5;
  });

  // Projects
  if (data.projects && data.projects.length > 0) {
    if (y > PAGE_H - 25) { doc.addPage(); y = 15; }
    y = sectionTitle(pdfLabels.projects || 'PROYECTOS DESTACADOS', y);
    data.projects.forEach(project => {
      if (y > PAGE_H - 20) { doc.addPage(); y = 15; }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      setColor(BLACK);
      doc.text(project.name.toUpperCase(), MARGIN_X, y);

      const techStr = `[${project.techs.join(', ')}]`;
      const techW = doc.getTextWidth(techStr);
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(9);
      setColor(MID_GRAY);
      doc.text(techStr, PAGE_W - MARGIN_X - techW, y);
      y += 4.8;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.8);
      setColor(DARK_GRAY);
      const descText = `${project.desc} Logro: ${project.achievement}`;
      const descLines = wrapM(descText, CONTENT_W);
      doc.text(descLines, MARGIN_X, y);
      y += descLines.length * 4.4 + 3.5;
    });
    y += 2.0;
  }

  // Open Source & Contributions
  if (data.openSource) {
    if (y > PAGE_H - 25) { doc.addPage(); y = 15; }
    y = sectionTitle(pdfLabels.openSource || 'OPEN SOURCE & CONTRIBUCIONES', y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.8);
    setColor(DARK_GRAY);
    const osLines = wrapM(data.openSource.summary, CONTENT_W);
    doc.text(osLines, MARGIN_X, y);
    y += osLines.length * 4.4 + 4.0;
  }

  // Education
  if (y > PAGE_H - 45) { doc.addPage(); y = 15; }
  y = sectionTitle(pdfLabels.education, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11.5);
  setColor(BLACK);
  doc.text(data.education.school.toUpperCase(), MARGIN_X, y);

  setColor(MID_GRAY);
  doc.setFont('helvetica', 'italic');
  const eduDateW = doc.getTextWidth(data.education.period);
  doc.text(data.education.period, PAGE_W - MARGIN_X - eduDateW, y);
  y += 4.8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  setColor(DARK_GRAY);
  doc.text(data.education.degree, MARGIN_X, y);
  y += 4.5;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  setColor(MID_GRAY);
  const eduDescLines = wrapM(data.education.desc);
  doc.text(eduDescLines, MARGIN_X, y);
  y += eduDescLines.length * 4.3;

  const totalPages = doc.internal.getNumberOfPages();
  if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      setColor(LIGHT_GRAY);
      const pageText = `${i} / ${totalPages}`;
      const pageTextW = doc.getTextWidth(pageText);
      doc.text(pageText, PAGE_W - MARGIN_X - pageTextW, PAGE_H - 8);
    }
  }

  console.log(`Final y position for ${outputPath}: ${y} mm (pages: ${totalPages})`);

  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(outputPath, pdfBuffer);
  console.log('CV PDF generated successfully:', outputPath);
}

function createCoverLetterPdf(data, lang, outputPath) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  const PAGE_W = 210;
  const MARGIN_L = 22;
  const MARGIN_R = 22;
  const CONTENT_W = PAGE_W - MARGIN_L - MARGIN_R;

  const BLACK = [0, 0, 0];
  const DARK_GRAY = [40, 40, 40];

  const setColor = ([r, g, b]) => doc.setTextColor(r, g, b);
  const wrap = (text, w = CONTENT_W) => doc.splitTextToSize(text, w);

  const contact = data.contact;
  const letter = data.coverLetter;

  let y = 22;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  setColor(BLACK);
  doc.text(data.name.toUpperCase(), MARGIN_L, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  setColor(DARK_GRAY);
  doc.text(`${contact.location} | Tel: ${contact.phone} | ${contact.email}`, MARGIN_L, y);
  y += 4.8;
  doc.text(`GitHub: github.com/${contact.github} | LinkedIn: linkedin.com/in/${contact.linkedin}`, MARGIN_L, y);
  y += 7;

  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.4);
  doc.line(MARGIN_L, y, PAGE_W - MARGIN_R, y);
  y += 8;

  const today = new Date();
  const dateStr = today.toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  setColor(DARK_GRAY);
  doc.text(`${lang === 'es' ? 'Fecha' : 'Date'}: ${dateStr}`, MARGIN_L, y);
  y += 8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  setColor(BLACK);
  doc.text(letter.recipient, MARGIN_L, y);
  y += 8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  setColor(BLACK);
  doc.text(letter.subject, MARGIN_L, y);
  y += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  setColor(DARK_GRAY);

  const paragraphs = [letter.body1, letter.body2, letter.body3, letter.body4];
  for (const p of paragraphs) {
    if (y > 265) { doc.addPage(); y = 22; }
    const lines = wrap(p);
    doc.text(lines, MARGIN_L, y);
    y += lines.length * 4.5 + 3.5;
  }

  y += 3;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  setColor(DARK_GRAY);
  doc.text(letter.closing, MARGIN_L, y);
  y += 7;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  setColor(BLACK);
  doc.text(data.name, MARGIN_L, y);
  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  setColor(DARK_GRAY);
  doc.text(data.role, MARGIN_L, y);

  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(outputPath, pdfBuffer);
  console.log('Cover Letter PDF generated successfully:', outputPath);
}

// Generate ES & EN PDFs
createCvPdf(translations.es.cv, '/home/david/development/cv/CV_David_Franco_ES.pdf');
createCvPdf(translations.en.cv, '/home/david/development/cv/CV_David_Franco_EN.pdf');
createCoverLetterPdf(translations.es.cv, 'es', '/home/david/development/cv/Carta_Presentacion_David_Franco_ES.pdf');
createCoverLetterPdf(translations.en.cv, 'en', '/home/david/development/cv/Cover_Letter_David_Franco_EN.pdf');
