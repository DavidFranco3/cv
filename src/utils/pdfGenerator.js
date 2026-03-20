import { jsPDF } from 'jspdf';

/**
 * Generates a professional two-column PDF CV using pure jsPDF.
 * Content is spread to fill the full A4 page.
 */
export const generatePdf = async (data, filename = 'CV_Jose_David_Ayala_Franco.pdf') => {
    const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });

    // ── Load photo ────────────────────────────────────────────────
    let photoDataUrl = null;
    try {
        // const response = await fetch('/fotografia.png'); // ← foto real
        const response = await fetch('/avatar_caricature.png'); // ← avatar caricatura
        const blob = await response.blob();
        photoDataUrl = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    } catch (e) {
        console.warn('No se pudo cargar la foto:', e);
    }

    // ── Layout constants ──────────────────────────────────────────
    const PAGE_W = 210;
    const PAGE_H = 297;
    const SIDE_W = 63;
    const SIDE_PAD = 8;
    const MAIN_X = SIDE_W + 7;
    const MAIN_W = PAGE_W - MAIN_X - 9;
    const SIDE_CONTENT_W = SIDE_W - SIDE_PAD * 2;

    // ── Colors ────────────────────────────────────────────────────
    const SIDEBAR_BG    = [28,  40,  65];
    const SIDEBAR_TEXT  = [220, 225, 235];
    const SIDEBAR_MUTED = [155, 165, 180];
    const SIDEBAR_ACCENT= [100, 155, 220];
    const MAIN_DARK     = [20,  30,  50];
    const MAIN_MID      = [80,  90,  110];
    const MAIN_LIGHT    = [150, 155, 165];
    const MAIN_TEXT     = [40,  45,  55];
    const LINE_COLOR    = [200, 205, 215];

    // Sidebar background
    doc.setFillColor(...SIDEBAR_BG);
    doc.rect(0, 0, SIDE_W, PAGE_H, 'F');

    // ── Helpers ───────────────────────────────────────────────────
    const setColor = ([r, g, b]) => doc.setTextColor(r, g, b);

    const hlineMain = (yPos) => {
        doc.setDrawColor(...LINE_COLOR);
        doc.setLineWidth(0.25);
        doc.line(MAIN_X, yPos, PAGE_W - 9, yPos);
    };

    const sectionMain = (title, yPos) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        setColor(MAIN_DARK);
        doc.text(title.toUpperCase(), MAIN_X, yPos);
        hlineMain(yPos + 2);
        return yPos + 8;
    };

    const sectionSide = (title, yPos) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        setColor(SIDEBAR_ACCENT);
        doc.text(title.toUpperCase(), SIDE_PAD, yPos);
        doc.setDrawColor(...SIDEBAR_ACCENT);
        doc.setLineWidth(0.2);
        doc.line(SIDE_PAD, yPos + 1.5, SIDE_W - SIDE_PAD, yPos + 1.5);
        return yPos + 7;
    };

    const wrapS = (text)            => doc.splitTextToSize(text, SIDE_CONTENT_W);
    const wrapM = (text, w = MAIN_W) => doc.splitTextToSize(text, w);

    // ══════════════════════════════════════════════════════════════
    // SIDEBAR
    // ══════════════════════════════════════════════════════════════
    let yS = 10;

    // Photo
    if (photoDataUrl) {
        const imgW = 40;
        const imgH = 48;
        const imgX = (SIDE_W - imgW) / 2;
        doc.addImage(photoDataUrl, 'PNG', imgX, yS, imgW, imgH);
        yS += imgH + 5;
    } else {
        yS += 10;
    }

    // Name & Role
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    setColor(SIDEBAR_TEXT);
    const nameLines = wrapS(data.name);
    doc.text(nameLines, SIDE_W / 2, yS, { align: 'center' });
    yS += nameLines.length * 5.5 + 1.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    setColor(SIDEBAR_ACCENT);
    doc.text(data.role, SIDE_W / 2, yS, { align: 'center' });
    yS += 7;

    // Separator
    doc.setDrawColor(...SIDEBAR_ACCENT);
    doc.setLineWidth(0.35);
    doc.line(SIDE_PAD, yS, SIDE_W - SIDE_PAD, yS);
    yS += 7;

    // ── Contact ───────────────────────────────────────────────────
    yS = sectionSide('Contacto', yS);
    const contactItems = [
        { label: 'Email',     value: data.contact.email },
        { label: 'Tel',       value: data.contact.phone },
        { label: 'GitHub',    value: `github.com/${data.contact.github}` },
        { label: 'LinkedIn',  value: `in/${decodeURIComponent(data.contact.linkedin)}` },
        { label: 'Ubicación', value: data.contact.location },
    ];
    contactItems.forEach(c => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        setColor(SIDEBAR_MUTED);
        doc.text(c.label, SIDE_PAD, yS);
        yS += 3.8;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        setColor(SIDEBAR_TEXT);
        const lines = wrapS(c.value);
        doc.text(lines, SIDE_PAD, yS);
        yS += lines.length * 4.2 + 2;
    });
    yS += 4;

    // ── Education ─────────────────────────────────────────────────
    yS = sectionSide('Formación Académica', yS);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    setColor(SIDEBAR_TEXT);
    const degLines = wrapS(data.education.degree);
    doc.text(degLines, SIDE_PAD, yS);
    yS += degLines.length * 5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    setColor(SIDEBAR_MUTED);
    const schoolLines = wrapS(data.education.school);
    doc.text(schoolLines, SIDE_PAD, yS);
    yS += schoolLines.length * 4.2;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.text(data.education.period, SIDE_PAD, yS);
    yS += 8;

    // ── Certifications ────────────────────────────────────────────
    yS = sectionSide('Certificaciones', yS);
    data.certifications.forEach(cert => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        setColor(SIDEBAR_TEXT);
        doc.text(cert.title, SIDE_PAD, yS);
        yS += 4.5;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        setColor(SIDEBAR_MUTED);
        doc.text(cert.provider, SIDE_PAD, yS);
        yS += 7;
    });

    // ── Languages ─────────────────────────────────────────────────
    yS = sectionSide('Idiomas', yS);
    data.languages.forEach(lang => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        setColor(SIDEBAR_TEXT);
        doc.text(lang.name, SIDE_PAD, yS);
        yS += 4.5;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        setColor(SIDEBAR_ACCENT);
        doc.text(lang.level, SIDE_PAD, yS);
        yS += 7;
    });

    // ══════════════════════════════════════════════════════════════
    // MAIN COLUMN
    // ══════════════════════════════════════════════════════════════
    let yM = 13;

    // Profile summary
    yM = sectionMain('Perfil Profesional', yM);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    setColor(MAIN_TEXT);
    const summaryLines = wrapM(data.summary);
    doc.text(summaryLines, MAIN_X, yM);
    yM += summaryLines.length * 5 + 8;

    // Skills
    yM = sectionMain('Habilidades y Tecnologías', yM);
    data.skills.forEach(skill => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        setColor(MAIN_DARK);
        const catLabel = `${skill.category}: `;
        doc.text(catLabel, MAIN_X, yM);
        const labelW = doc.getTextWidth(catLabel);
        doc.setFont('helvetica', 'normal');
        setColor(MAIN_MID);
        const techStr = skill.techs.join(' · ');
        const techLines = wrapM(techStr, MAIN_W - labelW);
        doc.text(techLines[0], MAIN_X + labelW, yM);
        if (techLines.length > 1) {
            for (let j = 1; j < techLines.length; j++) {
                yM += 4.8;
                doc.text(techLines[j], MAIN_X + 3, yM);
            }
        }
        yM += 6;
    });
    yM += 3;

    // Experience
    yM = sectionMain('Experiencia Profesional', yM);

    // Calculate remaining space and distribute between experiences
    const remainingSpace = PAGE_H - 12 - yM;
    const expCount = data.experience.length;
    // approximate total bullet lines
    const totalBullets = data.experience.reduce((a, e) => a + e.bullets.length, 0);
    const baseExpHeight = expCount * 22 + totalBullets * 4.5;
    const extraPerBullet = Math.max(0, (remainingSpace - baseExpHeight) / (totalBullets || 1));
    const bulletSpacing = Math.min(5.5, 4.5 + extraPerBullet);

    data.experience.forEach((exp, idx) => {
        // Company + date
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        setColor(MAIN_DARK);
        doc.text(exp.company, MAIN_X, yM);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        setColor(MAIN_LIGHT);
        const dW = doc.getTextWidth(exp.date);
        doc.text(exp.date, PAGE_W - 9 - dW, yM);
        yM += 6;

        // Role
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(10.5);
        setColor(MAIN_MID);
        doc.text(exp.role, MAIN_X, yM);
        yM += 5.5;

        // Description
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        setColor(MAIN_TEXT);
        const descLines = wrapM(exp.desc);
        doc.text(descLines, MAIN_X, yM);
        yM += descLines.length * 5 + 2;

        // Bullets
        exp.bullets.forEach(bullet => {
            doc.setFontSize(9);
            const bLines = wrapM(`•  ${bullet}`, MAIN_W - 4);
            doc.text(bLines, MAIN_X + 2, yM);
            yM += bLines.length * bulletSpacing;
        });

        yM += 4;
        if (idx < data.experience.length - 1) {
            hlineMain(yM);
            yM += 6;
        }
    });

    doc.save(filename);
};
