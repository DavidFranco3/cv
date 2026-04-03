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
        doc.setFontSize(12);
        setColor(BLACK);
        doc.text(title.toUpperCase(), MARGIN_X, yPos);
        hline(yPos + 1.0); // Slightly more space
        return yPos + 5.0; // Slightly more space
    };

    const drawIcon = (type, x, y) => {
        if (iconsData[type]) {
            doc.addImage(iconsData[type], 'PNG', x, y - 3.2, 3.5, 3.5);
            return 4;
        }
        return 0;
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
    let y = 12; // A bit more top space

    // Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    setColor(BLACK);
    doc.text(data.name.toUpperCase(), PAGE_W / 2, y, { align: 'center' });
    y += 10;

    // Contact Information (Centered row - Compact)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    setColor(DARK_GRAY);
    
    const contactInfo = [
        data.contact.location,
        data.contact.phone,
        data.contact.email
    ].join('  •  ');
    doc.text(contactInfo, PAGE_W / 2, y, { align: 'center' });
    y += 5;

    // Links (Centered row - Icons + Text)
    const links = [
        { type: 'linkedin', value: 'LinkedIn', link: `https://linkedin.com/in/${data.contact.linkedin}` },
        { type: 'github', value: 'GitHub', link: `https://github.com/${data.contact.github}` },
        { type: 'npm', value: 'NPM', link: `https://www.npmjs.com/~${data.contact.npm}` }
    ];

    let currentXLinks = PAGE_W / 2 - 38; 
    links.forEach((l) => {
        drawIcon(l.type, currentXLinks, y);
        doc.text(l.value, currentXLinks + 4.5, y);
        doc.link(currentXLinks, y - 3, 20, 4, { url: l.link });
        currentXLinks += 26;
    });

    y += 10;

    // ══════════════════════════════════════════════════════════════
    // PROFESSIONAL SUMMARY
    // ══════════════════════════════════════════════════════════════
    y = sectionTitle(pdfLabels.professionalProfile, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11); // Reverted from 11.5
    setColor(DARK_GRAY);
    const summaryLines = wrapM(data.summary);
    doc.text(summaryLines, MARGIN_X, y);
    y += summaryLines.length * 4.5 + 5; // Reverted leading
    
    // Save current Y for skills
    const skillsY = y;

    // ══════════════════════════════════════════════════════════════
    // TECHNICAL SKILLS (Balanced 3-Column Layout) - MOVED UP
    // ══════════════════════════════════════════════════════════════
    const getCatH = (t) => 4.5 + (t.length * 3.8) + 3; // Even more compact

    const filteredSkills = data.skills.filter(s => 
        !s.category.toLowerCase().includes('sistemas operativos') &&
        !s.category.toLowerCase().includes('operating systems')
    );

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
    if (y + sectionH > PAGE_H - 5) { doc.addPage(); y = 10; }
    y = sectionTitle(pdfLabels.techStack, y);
    const gridStartY = y;
    const colWidth = (CONTENT_W / 3) - 6;

    const renderBlock = (skill, x, currentY) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.2); // Reverted from 10.8
        setColor(BLACK);
        doc.text(skill.category.toUpperCase(), x, currentY);
        currentY += 4.2;
        doc.setFont('helvetica', 'normal');
        setColor(DARK_GRAY);
        doc.setFontSize(9.5); // Reverted from 10
        skill.techs.forEach(tech => {
            doc.text(`• ${tech}`, x, currentY);
            currentY += 3.8;
        });
        return currentY + 2;
    };

    // Render Columns & Track actual max Y
    let maxY = gridStartY;
    cols.forEach((skillList, i) => {
        let cy = gridStartY;
        const xOffset = MARGIN_X + (i * (colWidth + 9));
        skillList.forEach(s => { cy = renderBlock(s, xOffset, cy); });
        if (cy > maxY) maxY = cy;
    });

    y = maxY + 3.5; // "Poquito no tanto" (a bit more space)

    // ══════════════════════════════════════════════════════════════
    // EXPERIENCE
    // ══════════════════════════════════════════════════════════════
    y = sectionTitle(pdfLabels.experience, y);

    data.experience.forEach((exp, idx) => {
        if (y > PAGE_H - 15) { doc.addPage(); y = 10; }

        // Company & Date Header
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11.2); // Reverted from 11.8
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

        // Role
        doc.setFont('helvetica', 'bold italic');
        doc.setFontSize(10.5); // Reverted from 11
        setColor(DARK_GRAY);
        doc.text(exp.role, MARGIN_X, y);
        y += 4.5;

        // Description
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10); // Reverted from 10.5
        setColor(DARK_GRAY);
        const descLines = wrapM(exp.desc);
        doc.text(descLines, MARGIN_X, y);
        y += descLines.length * 4.2 + 0.8;

        // Bullets
        exp.bullets.forEach(bullet => {
            if (y > PAGE_H - 10) { doc.addPage(); y = 10; }
            const bLines = wrapM(`•  ${bullet}`, CONTENT_W - 5);
            doc.text(bLines, MARGIN_X + 2, y);
            y += bLines.length * 4.0; // Reverted leading
        });

        y += 5.5; // Back to standard spacing
    });

    // ══════════════════════════════════════════════════════════════
    // EDUCATION (Moved to Bottom)
    // ══════════════════════════════════════════════════════════════
    if (y > PAGE_H - 22) { doc.addPage(); y = 15; }
    y = sectionTitle(pdfLabels.education, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11.5); // Reverted from 12
    setColor(BLACK);
    doc.text(data.education.school.toUpperCase(), MARGIN_X, y);

    setColor(MID_GRAY);
    doc.setFont('helvetica', 'italic');
    const eduDateW = doc.getTextWidth(data.education.period);
    doc.text(data.education.period, PAGE_W - MARGIN_X - eduDateW, y);
    y += 4.8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11); // Reverted from 11.5
    setColor(DARK_GRAY);
    doc.text(data.education.degree, MARGIN_X, y);
    y += 8;

    doc.save(filename);
};



