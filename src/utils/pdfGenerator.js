import { jsPDF } from 'jspdf';

/**
 * Generates a professional two-column PDF CV using pure jsPDF.
 * Left sidebar: photo, contact, education, certs, languages.
 * Right main: profile summary, skills, experience.
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
    const SIDE_W = 62;          // sidebar width
    const SIDE_PAD = 8;         // sidebar inner padding
    const MAIN_X = SIDE_W + 5; // main column X
    const MAIN_W = PAGE_W - MAIN_X - 10; // main column width
    const SIDE_CONTENT_W = SIDE_W - SIDE_PAD * 2;

    // ── Colors ────────────────────────────────────────────────────
    const SIDEBAR_BG = [28, 40, 65];     // dark navy
    const SIDEBAR_TEXT = [220, 225, 235];
    const SIDEBAR_MUTED = [160, 170, 185];
    const SIDEBAR_ACCENT = [100, 155, 220];
    const MAIN_DARK = [20, 30, 50];
    const MAIN_MID = [80, 90, 110];
    const MAIN_LIGHT = [150, 155, 165];
    const MAIN_TEXT = [40, 45, 55];
    const LINE_COLOR = [200, 205, 215];

    // ── Draw sidebar background ───────────────────────────────────
    doc.setFillColor(...SIDEBAR_BG);
    doc.rect(0, 0, SIDE_W, PAGE_H, 'F');

    // ── Helpers ───────────────────────────────────────────────────
    const setColor = ([r, g, b]) => doc.setTextColor(r, g, b);
    const hlineMain = (yPos) => {
        doc.setDrawColor(...LINE_COLOR);
        doc.setLineWidth(0.25);
        doc.line(MAIN_X, yPos, PAGE_W - 10, yPos);
    };
    const sectionMain = (title, yPos) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        setColor(MAIN_DARK);
        doc.text(title.toUpperCase(), MAIN_X, yPos);
        hlineMain(yPos + 1.8);
        return yPos + 7;
    };
    const sectionSide = (title, yPos) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7.5);
        setColor(SIDEBAR_ACCENT);
        doc.text(title.toUpperCase(), SIDE_PAD, yPos);
        doc.setDrawColor(...SIDEBAR_ACCENT);
        doc.setLineWidth(0.2);
        doc.line(SIDE_PAD, yPos + 1.5, SIDE_W - SIDE_PAD, yPos + 1.5);
        return yPos + 6;
    };
    const wrapSide = (text) => doc.splitTextToSize(text, SIDE_CONTENT_W);
    const wrapMain = (text, w = MAIN_W) => doc.splitTextToSize(text, w);
    const newPage = (needed = 12) => {
        if (yM + needed > PAGE_H - 10) {
            doc.addPage();
            // redraw sidebar on new page
            doc.setFillColor(...SIDEBAR_BG);
            doc.rect(0, 0, SIDE_W, PAGE_H, 'F');
            yM = 15;
        }
    };

    // ── SIDEBAR content ───────────────────────────────────────────
    let yS = 10;

    // Photo
    if (photoDataUrl) {
        const imgW = 36;
        const imgH = 44;
        const imgX = (SIDE_W - imgW) / 2;
        doc.addImage(photoDataUrl, 'PNG', imgX, yS, imgW, imgH);
        yS += imgH + 5;
    } else {
        yS += 10;
    }

    // Name & Role in sidebar header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    setColor(SIDEBAR_TEXT);
    const nameLines = wrapSide(data.name);
    doc.text(nameLines, SIDE_W / 2, yS, { align: 'center' });
    yS += nameLines.length * 5 + 1;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    setColor(SIDEBAR_ACCENT);
    doc.text(data.role, SIDE_W / 2, yS, { align: 'center' });
    yS += 7;

    // Separator
    doc.setDrawColor(...SIDEBAR_ACCENT);
    doc.setLineWidth(0.3);
    doc.line(SIDE_PAD, yS, SIDE_W - SIDE_PAD, yS);
    yS += 6;

    // Contact
    yS = sectionSide('Contacto', yS);
    const contactItems = [
        { label: 'Email', value: data.contact.email },
        { label: 'Tel', value: data.contact.phone },
        { label: 'GitHub', value: `github.com/${data.contact.github}` },
        { label: 'LinkedIn', value: `in/${data.contact.linkedin}` },
        { label: 'Ubicación', value: data.contact.location },
    ];
    contactItems.forEach(c => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(7);
        setColor(SIDEBAR_MUTED);
        doc.text(c.label, SIDE_PAD, yS);
        yS += 3.5;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        setColor(SIDEBAR_TEXT);
        const lines = wrapSide(c.value);
        doc.text(lines, SIDE_PAD, yS);
        yS += lines.length * 3.8 + 1;
    });
    yS += 4;

    // Education
    yS = sectionSide('Formación Académica', yS);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    setColor(SIDEBAR_TEXT);
    const degreeLines = wrapSide(data.education.degree);
    doc.text(degreeLines, SIDE_PAD, yS);
    yS += degreeLines.length * 4;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    setColor(SIDEBAR_MUTED);
    const schoolLines = wrapSide(data.education.school);
    doc.text(schoolLines, SIDE_PAD, yS);
    yS += schoolLines.length * 3.8;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7);
    doc.text(data.education.period, SIDE_PAD, yS);
    yS += 7;

    // Certifications
    yS = sectionSide('Certificaciones', yS);
    data.certifications.forEach(cert => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        setColor(SIDEBAR_TEXT);
        doc.text(cert.title, SIDE_PAD, yS);
        yS += 4;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        setColor(SIDEBAR_MUTED);
        doc.text(cert.provider, SIDE_PAD, yS);
        yS += 6;
    });

    // Languages
    yS = sectionSide('Idiomas', yS);
    data.languages.forEach(lang => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        setColor(SIDEBAR_TEXT);
        doc.text(lang.name, SIDE_PAD, yS);
        yS += 3.8;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        setColor(SIDEBAR_ACCENT);
        doc.text(lang.level, SIDE_PAD, yS);
        yS += 5.5;
    });

    // ── MAIN COLUMN ───────────────────────────────────────────────
    let yM = 15;

    // Profile summary
    yM = sectionMain('Perfil Profesional', yM);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    setColor(MAIN_TEXT);
    const summaryLines = wrapMain(data.summary);
    doc.text(summaryLines, MAIN_X, yM);
    yM += summaryLines.length * 4.5 + 6;

    // Skills
    newPage(25);
    yM = sectionMain('Habilidades y Tecnologías', yM);

    data.skills.forEach((skill, i) => {
        newPage(10);
        // Category name
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        setColor(MAIN_DARK);
        doc.text(skill.category, MAIN_X, yM);
        yM += 4;

        // Tech tags in wrapped text
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        setColor(MAIN_MID);
        const techStr = skill.techs.join('  ·  ');
        const techLines = wrapMain(techStr, MAIN_W - 2);
        doc.text(techLines, MAIN_X + 2, yM);
        yM += techLines.length * 4 + 3;
    });
    yM += 3;

    // Experience
    newPage(20);
    yM = sectionMain('Experiencia Profesional', yM);

    data.experience.forEach(exp => {
        newPage(15);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        setColor(MAIN_DARK);
        doc.text(exp.company, MAIN_X, yM);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        setColor(MAIN_LIGHT);
        const dateW = doc.getTextWidth(exp.date);
        doc.text(exp.date, PAGE_W - 10 - dateW, yM);
        yM += 4.5;

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(9.5);
        setColor(MAIN_MID);
        doc.text(exp.role, MAIN_X, yM);
        yM += 4.5;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        setColor(MAIN_TEXT);
        const descLines = wrapMain(exp.desc);
        doc.text(descLines, MAIN_X, yM);
        yM += descLines.length * 4 + 2;

        exp.bullets.forEach(bullet => {
            newPage(7);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8.5);
            setColor(MAIN_TEXT);
            const bulletLines = wrapMain(`•  ${bullet}`, MAIN_W - 4);
            doc.text(bulletLines, MAIN_X + 2, yM);
            yM += bulletLines.length * 3.8;
        });

        yM += 5;
        hlineMain(yM);
        yM += 5;
    });

    doc.save(filename);
};
