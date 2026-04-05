import { jsPDF } from 'jspdf';

/**
 * Generates a professional single-column PDF CV in Harvard (HBS) format.
 * Optimized for ATS compatibility and clarity.
 */
export const generatePdf = async (data, filename = 'CV_Jose_David_Ayala_Franco.pdf') => {
    const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });

    // ── Generate Icons ───────────────────────────────────────────
    const iconPaths = {
        location: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />',
        phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />',
        email: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />',
        github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />',
        linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />',
        npm: '<path d="M0 0h24v24H0z" stroke="none"/><path d="M1 8h22v7H11v2H7v-2H1V8zm3 5h2V9H4v4zm3 0h2V9H7v4zm3-2h2V9h-2v2zm3 2h2V9h-2v4zm3 0h2V9h-2v4zm3 0h2V9h-2v4z" fill="#333" stroke="none"/>'
    };

    const iconsData = {};
    for (const [key, pathInfo] of Object.entries(iconPaths)) {
        try {
            iconsData[key] = await new Promise((resolve) => {
                const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${pathInfo}</svg>`;
                const img = new Image();
                img.src = `data:image/svg+xml;base64,${btoa(svg)}`;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = 64; canvas.height = 64;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    resolve(canvas.toDataURL('image/png'));
                };
            });
        } catch (e) { console.warn('Error generating icon:', key, e); }
    }

    // ── Layout constants ──────────────────────────────────────────
    const PAGE_W = 210;
    const PAGE_H = 297;
    const MARGIN_X = 20;
    const CONTENT_W = PAGE_W - (MARGIN_X * 2);

    // ── Colors (Professional Monochrome) ──────────────────────────
    const BLACK = [0, 0, 0];
    const DARK_GRAY = [40, 40, 40];
    const MID_GRAY = [80, 80, 80];
    const LIGHT_GRAY = [120, 120, 120];
    const BORDER_GRAY = [200, 200, 200];

    // ── Helpers ───────────────────────────────────────────────────
    const setColor = ([r, g, b]) => doc.setTextColor(r, g, b);

    const hline = (yPos) => {
        doc.setDrawColor(...BORDER_GRAY);
        doc.setLineWidth(0.3);
        doc.line(MARGIN_X, yPos, PAGE_W - MARGIN_X, yPos);
    };

    const sectionTitle = (title, yPos) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13);
        setColor(BLACK);
        doc.text(title.toUpperCase(), MARGIN_X, yPos);
        hline(yPos + 1.0); // Slightly more space
        return yPos + 6.0; // Slightly more space
    };


    const wrapM = (text, w = CONTENT_W) => doc.splitTextToSize(text, w);

    // ── Labels & Data ─────────────────────────────────────────────
    const pdfLabels = data.pdfLabels || {
        professionalProfile: 'Perfil Profesional',
        education: 'Formación',
        softSkills: 'Habilidades',
        languages: 'Idiomas',
        experience: 'Experiencia Profesional',
        techStack: 'Conocimientos Técnicos',
        present: 'Presente'
    };

    // ══════════════════════════════════════════════════════════════
    // HEADER (Centered)
    // ══════════════════════════════════════════════════════════════
    let y = 14; // A bit more top space

    // Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24); // Increased from 22
    setColor(BLACK);
    doc.text(data.name.toUpperCase(), PAGE_W / 2, y, { align: 'center' });
    y += 11;

    // Contact Information (Centered row - Compact)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10); // Increased from 9
    setColor(DARK_GRAY);

    const contactInfo = [
        data.contact.location,
        data.contact.phone,
        data.contact.email
    ].join('  •  ');
    doc.text(contactInfo, PAGE_W / 2, y, { align: 'center' });
    y += 5.5;

    const links = [
        { label: 'Github', name: data.contact.github, url: `https://github.com/${data.contact.github}` },
        { label: 'Linkedin', name: 'David Franco', url: `https://www.linkedin.com/in/${data.contact.linkedin}/` },
        { label: 'NPM', name: data.contact.npm, url: `https://www.npmjs.com/~${data.contact.npm}` }
    ];

    doc.setFontSize(10); // Increased from 9
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

    y += 12;

    // ══════════════════════════════════════════════════════════════
    // PROFESSIONAL SUMMARY
    // ══════════════════════════════════════════════════════════════
    y = sectionTitle(pdfLabels.professionalProfile, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11.5); // Unified to 11.5
    setColor(DARK_GRAY);
    const summaryLines = wrapM(data.summary);
    doc.text(summaryLines, MARGIN_X, y);
    y += summaryLines.length * 4.8 + 6; // Adjusted leading


    // ══════════════════════════════════════════════════════════════
    // TECHNICAL SKILLS (Balanced 3-Column Layout) - MOVED UP
    // ══════════════════════════════════════════════════════════════
    const getCatH = (t) => 5 + (t.length * 4.0) + 3; // Adjusted for font size

    const filteredSkills = data.skills;

    const cols = [[], [], []];
    const heights = [0, 0, 0];

    filteredSkills.forEach(skill => {
        const h = getCatH(skill.techs);
        const shortestIdx = heights.indexOf(Math.min(...heights));
        cols[shortestIdx].push(skill);
        heights[shortestIdx] += h;
    });

    const langItems = (data.languages || []).map(l => `${l.name} (${l.level})`);
    const langH = getCatH(langItems);
    const shortestIdx = heights.indexOf(Math.min(...heights));
    cols[shortestIdx].push({ category: pdfLabels.languages, techs: langItems });
    heights[shortestIdx] += langH;

    const sectionH = Math.max(...heights) + 8;

    // Check for page break (very lenient)
    if (y + sectionH > PAGE_H - 10) { doc.addPage(); y = 15; }
    y = sectionTitle(pdfLabels.techStack, y);
    const gridStartY = y;
    const colWidth = (CONTENT_W / 3) - 6;

    const renderBlock = (skill, x, currentY) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11); // Increased from 10.2
        setColor(BLACK);
        doc.text(skill.category.toUpperCase(), x, currentY);
        currentY += 4.5;
        doc.setFont('helvetica', 'normal');
        setColor(DARK_GRAY);
        doc.setFontSize(10.5); // Increased from 9.5
        skill.techs.forEach(tech => {
            doc.text(`• ${tech}`, x, currentY);
            currentY += 4.0;
        });
        return currentY + 2.5;
    };

    // Render Columns & Track actual max Y
    let maxY = gridStartY;
    cols.forEach((skillList, i) => {
        let cy = gridStartY;
        const xOffset = MARGIN_X + (i * (colWidth + 9));
        skillList.forEach(s => { cy = renderBlock(s, xOffset, cy); });
        if (cy > maxY) maxY = cy;
    });

    y = maxY + 4.5; // (adjusted)

    // ══════════════════════════════════════════════════════════════
    // EXPERIENCE
    // ══════════════════════════════════════════════════════════════
    y = sectionTitle(pdfLabels.experience, y);

    data.experience.forEach((exp) => {
        if (y > PAGE_H - 20) { doc.addPage(); y = 15; }

        // Company & Date Header
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12.5); // Increased from 11.2
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
        y += 5.2;

        // Role
        doc.setFont('helvetica', 'bold italic');
        doc.setFontSize(11.5); // Increased from 10.5
        setColor(DARK_GRAY);
        doc.text(exp.role, MARGIN_X, y);
        y += 4.8;

        // Description
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10.5); // Unified
        setColor(DARK_GRAY);
        const descLines = wrapM(exp.desc);
        doc.text(descLines, MARGIN_X, y);
        y += descLines.length * 4.5 + 1.2;

        // Bullets
        exp.bullets.forEach(bullet => {
            if (y > PAGE_H - 12) { doc.addPage(); y = 15; }
            const bLines = wrapM(`•  ${bullet}`, CONTENT_W - 5);
            doc.text(bLines, MARGIN_X + 2, y);
            y += bLines.length * 4.2; 
        });

        y += 6.5; 
    });

    // ══════════════════════════════════════════════════════════════
    // EDUCATION (Moved to Bottom)
    // ══════════════════════════════════════════════════════════════
    if (y > PAGE_H - 30) { doc.addPage(); y = 20; }
    y = sectionTitle(pdfLabels.education, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12.5); // Increased from 11.5
    setColor(BLACK);
    doc.text(data.education.school.toUpperCase(), MARGIN_X, y);

    setColor(MID_GRAY);
    doc.setFont('helvetica', 'italic');
    const eduDateW = doc.getTextWidth(data.education.period);
    doc.text(data.education.period, PAGE_W - MARGIN_X - eduDateW, y);
    y += 5.2;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11.5); // Increased from 11
    setColor(DARK_GRAY);
    doc.text(data.education.degree, MARGIN_X, y);
    y += 5.5;

    // Education Description
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10.5); // Consistently 10.5
    setColor(MID_GRAY);
    const eduDescLines = wrapM(data.education.desc);
    doc.text(eduDescLines, MARGIN_X, y);
    y += eduDescLines.length * 4.5 + 10;

    doc.save(filename);
};
