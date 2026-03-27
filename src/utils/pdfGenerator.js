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
        const response = await fetch('/fotografia.png'); // ← foto real
        const blob = await response.blob();
        photoDataUrl = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    } catch (e) {
        console.warn('No se pudo cargar la foto:', e);
    }

    // ── Generate Icons ───────────────────────────────────────────
    const iconPaths = {
        location: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />',
        phone:    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />',
        email:    '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />',
        github:   '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />',
        linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />'
    };

    const iconsData = {};
    for (const [key, pathInfo] of Object.entries(iconPaths)) {
        try {
            iconsData[key] = await new Promise((resolve) => {
                const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${pathInfo}</svg>`;
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

    const hlineMain = (yPos, width = MAIN_W, x = MAIN_X) => {
        doc.setDrawColor(...LINE_COLOR);
        doc.setLineWidth(0.25);
        doc.line(x, yPos, x + width, yPos);
    };

    const sectionMain = (title, yPos, width = MAIN_W, x = MAIN_X) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(13); 
        setColor(MAIN_DARK);
        doc.text(title.toUpperCase(), x, yPos);
        hlineMain(yPos + 2.5, width, x);
        return yPos + 8;
    };

    const drawIcon = (type, x, y) => {
        if (iconsData[type]) {
            doc.addImage(iconsData[type], 'PNG', x, y - 3, 3.5, 3.5);
            return;
        }
        // Fallback to simple shapes if image load fails
        doc.setDrawColor(...MAIN_MID);
        doc.setLineWidth(0.3);
        if (type === 'location') {
            doc.circle(x + 1.5, y - 2, 1, 'S');
            doc.line(x + 1.5, y - 1, x + 1.5, y);
        } else if (type === 'phone') {
            doc.setLineWidth(0.5);
            doc.line(x + 0.5, y, x + 2.5, y - 2.5);
        } else if (type === 'email') {
            doc.rect(x, y - 2.8, 3.8, 2.8, 'S');
            doc.line(x, y - 2.8, x + 1.9, y - 1.4);
            doc.line(x + 1.9, y - 1.4, x + 3.8, y - 2.8);
        } else if (type === 'link' || type === 'github' || type === 'linkedin') {
            doc.circle(x + 1.8, y - 1.5, 1.2, 'S');
            doc.line(x + 0.5, y - 0.2, x + 3.1, y - 2.8);
        }
    };

    const sectionSide = (title, yPos) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        setColor(SIDEBAR_ACCENT);
        doc.text(title.toUpperCase(), SIDE_PAD, yPos);
        doc.setDrawColor(...SIDEBAR_ACCENT);
        doc.setLineWidth(0.2);
        doc.line(SIDE_PAD, yPos + 2, SIDE_W - SIDE_PAD, yPos + 2);
        return yPos + 6;
    };

    const wrapS = (text)            => doc.splitTextToSize(text, SIDE_CONTENT_W);
    const wrapM = (text, w = MAIN_W) => doc.splitTextToSize(text, w);

    // ══════════════════════════════════════════════════════════════
    // SIDEBAR
    // ══════════════════════════════════════════════════════════════
    const pdfLabels = data.pdfLabels || {
        professionalProfile: 'Perfil Profesional',
        education: 'Formación',
        softSkills: 'Soft Skills & IA',
        languages: 'Idiomas',
        os: 'Sistemas Operativos',
        experience: 'Experiencia Profesional',
        techStack: 'Stack Tecnológico',
        present: 'Presente'
    };

    // ── DATA TRANSFORMATIONS FOR PDF OPTIMIZATION (HR-friendly) ────
    const pdfData = {
        ...data,
        // Use summary from data
        summary: data.summary,
        // Slice experience bullets to max 5 for PDF to save space
        experience: data.experience.map(exp => ({
            ...exp,
            bullets: exp.bullets.slice(0, 5),
            // Replace "Presente" with localized version if needed
            date: exp.date.replace("Presente", pdfLabels.present).replace("Present", pdfLabels.present)
        })),
        // Map Web Categories to PDF Proficiency Levels
        skills: data.skills.filter(s => s.category !== "Sistemas Operativos" && s.category !== "Operating Systems").map(s => {
            let level = s.category || "Skill";
            if (level.includes("Backend")) level = "Backend";
            if (level.includes("Frontend")) level = "Frontend";
            if (level.includes("Móvil") || level.includes("Mobile")) level = "Móvil";
            if (level.includes("DevOps")) level = "DevOps / Datos";
            return { level, techs: s.techs };
        })
    };

    // ══════════════════════════════════════════════════════════════
    // SIDEBAR RENDERING
    // ══════════════════════════════════════════════════════════════
    
    // ── Sidebar Background ────────────────────────────────────────
    doc.setFillColor(...SIDEBAR_BG);
    doc.rect(0, 0, SIDE_W, PAGE_H, 'F');

    // ── Profile Photo / Placeholder ────────────────────────────────
    let yS = 12;
    if (photoDataUrl) {
        const imgW = 36;
        const imgH = 42;
        const imgX = (SIDE_W - imgW) / 2;
        doc.addImage(photoDataUrl, 'PNG', imgX, yS, imgW, imgH);
        yS += imgH + 6;
    } else {
        doc.setDrawColor(255, 255, 255);
        doc.setLineWidth(0.5);
        doc.circle(SIDE_W / 2, 25, 12, 'S');
        yS = 45;
    }

    yS += 0.5;

    // ── Profile Summary (Now in Sidebar) ──────────────────────────
    yS = sectionSide(pdfLabels.professionalProfile, yS);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10.5);
    setColor(SIDEBAR_TEXT);
    const summaryLinesS = wrapS(pdfData.summary);
    doc.text(summaryLinesS, SIDE_PAD, yS);
    yS += summaryLinesS.length * 4.2 + 3;

    // ── Education (Now in Sidebar) ───────────────────────────────
    yS = sectionSide(pdfLabels.education, yS);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    setColor(SIDEBAR_TEXT);
    const degLinesS = wrapS(pdfData.education.degree);
    doc.text(degLinesS, SIDE_PAD, yS);
    yS += degLinesS.length * 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10.5);
    setColor(SIDEBAR_ACCENT);
    const schoolLinesS = wrapS(pdfData.education.school);
    doc.text(schoolLinesS, SIDE_PAD, yS);
    yS += schoolLinesS.length * 4.5;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    setColor(SIDEBAR_MUTED);
    doc.text(pdfData.education.period, SIDE_PAD, yS);
    yS += 7;

    // ── Soft Skills ───────────────────────────────────────────────
    const softSkill = pdfData.skills.find(s => s.level.includes("Soft"));
    if (softSkill) {
        yS = sectionSide(pdfLabels.softSkills, yS);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        setColor(SIDEBAR_TEXT);
        softSkill.techs.forEach(skill => {
            const skillLines = wrapS(`• ${skill}`);
            doc.text(skillLines, SIDE_PAD, yS);
            yS += skillLines.length * 5;
        });
        yS += 2;
    }

    // ── Languages (Sidebar - Side by Side) ───────────────────────
    yS = sectionSide(pdfLabels.languages, yS);
    
    let xL = SIDE_PAD;
    pdfData.languages.forEach((lang, i) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        setColor(SIDEBAR_TEXT);
        doc.text(lang.name, xL, yS);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        setColor(SIDEBAR_ACCENT);
        doc.text(lang.level, xL, yS + 4.5);
        
        xL += 22; // Move to next column
    });
    yS += 12;

    // ── Operating Systems (Sidebar - Side by Side) ────────────────
    const osSkill = data.skills.find(s => s.category === "Sistemas Operativos" || s.category === "Operating Systems");
    if (osSkill) {
        yS = sectionSide(pdfLabels.os, yS);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        setColor(SIDEBAR_TEXT);
        
        let xOS = SIDE_PAD;
        osSkill.techs.forEach((os, i) => {
            doc.text(os, xOS, yS);
            xOS += (i === 1) ? 14 : 17; // Adjust column width for Win, Linux, Mac
        });
        yS += 6;
    }

    // ══════════════════════════════════════════════════════════════
    // MAIN COLUMN (White Section)
    // ══════════════════════════════════════════════════════════════
    let yM = 16;
    
    // --- Header: Name & Role (Left) ---
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    setColor(MAIN_DARK);
    doc.text("JOSÉ DAVID", MAIN_X, yM + 2);
    doc.text("AYALA FRANCO", MAIN_X, yM + 11);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12.5);
    setColor(MAIN_MID);
    doc.text(pdfData.role.toUpperCase(), MAIN_X, yM + 19);

    // --- Header: Contact Info (Right) ---
    const contactX = MAIN_X + 72;
    let yC = yM + 2;
    const headerContacts = [
        { type: 'location', value: pdfData.contact.location },
        { type: 'phone',    value: pdfData.contact.phone },
        { type: 'email',    value: pdfData.contact.email, link: `mailto:${pdfData.contact.email}` },
        { type: 'github',   value: "github.com/DavidFranco3", link: `https://github.com/DavidFranco3` },
        { type: 'linkedin', value: "in/David-Ayala-Franco", link: "https://linkedin.com/in/jos%C3%A9-david-ayala-franco-247701220" }
    ];

    headerContacts.forEach(c => {
        drawIcon(c.type, contactX, yC);
        setColor(MAIN_TEXT);
        doc.setFontSize(9);
        
        if (c.link) {
            const textW = doc.getTextWidth(c.value);
            doc.link(contactX + 6, yC - 3, textW, 4, { url: c.link });
        }

        const wrappedVal = doc.splitTextToSize(c.value, 50);
        doc.text(wrappedVal, contactX + 6, yC);
        yC += wrappedVal.length * 5 + 1.5;
    });

    yM = Math.max(yM + 25, yC + 2);
    hlineMain(yM);
    yM += 6;


    // ── Experience ────────────────────────────────────────────────
    yM = sectionMain(pdfLabels.experience, yM);
    const bulletSpacing = 4.8;

    pdfData.experience.forEach((exp, idx) => {
        if (yM > PAGE_H - 40) { doc.addPage(); yM = 20; doc.setFillColor(...SIDEBAR_BG); doc.rect(0, 0, SIDE_W, PAGE_H, 'F'); }
        
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        setColor(MAIN_DARK);
        doc.text(exp.company, MAIN_X, yM);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11.5);
        setColor(MAIN_LIGHT);
        const dW = doc.getTextWidth(exp.date);
        doc.text(exp.date, PAGE_W - 9 - dW, yM);
        yM += 5.5;

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(13);
        setColor(MAIN_MID);
        doc.text(exp.role, MAIN_X, yM);
        yM += 5.5;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        setColor(MAIN_TEXT);
        const descLines = wrapM(exp.desc);
        doc.text(descLines, MAIN_X, yM);
        yM += descLines.length * 4.2 + 1;

        exp.bullets.forEach(bullet => {
            doc.setFontSize(10.5);
            const bLines = wrapM(`•  ${bullet}`, MAIN_W - 4);
            doc.text(bLines, MAIN_X + 2, yM);
            yM += bLines.length * 4.2;
        });

        yM += 2;
        if (idx < pdfData.experience.length - 1) {
            yM += 2; // Extra space before line
            hlineMain(yM);
            yM += 6; // More space after line to avoid overlap with next title
        }
    });

    // ── Tech Stack (Relocated to bottom and reformatted as lists) ─
    if (yM > PAGE_H - 50) { doc.addPage(); yM = 20; doc.setFillColor(...SIDEBAR_BG); doc.rect(0, 0, SIDE_W, PAGE_H, 'F'); }
    yM += 2;
    yM = sectionMain(pdfLabels.techStack, yM);
    
    const techSkills = pdfData.skills.filter(s => !s.level.includes("Soft"));
    const colW = (MAIN_W / 2) - 4;

    for (let i = 0; i < techSkills.length; i += 2) {
        if (yM > PAGE_H - 40) { doc.addPage(); yM = 20; doc.setFillColor(...SIDEBAR_BG); doc.rect(0, 0, SIDE_W, PAGE_H, 'F'); }
        let yStart = yM;
        let y1 = yStart;
        let y2 = yStart;

        // Category 1
        const s1 = techSkills[i];
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        setColor(SIDEBAR_BG);
        doc.text(s1.level.toUpperCase(), MAIN_X, y1);
        y1 += 5;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        setColor(MAIN_TEXT);
        s1.techs.forEach(t => {
            doc.text(`• ${t}`, MAIN_X + 2, y1);
            y1 += 4.2;
        });

        // Category 2
        if (techSkills[i+1]) {
            const s2 = techSkills[i+1];
            const x2 = MAIN_X + colW + 8;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
            setColor(SIDEBAR_BG);
            doc.text(s2.level.toUpperCase(), x2, y2);
            y2 += 5;
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
            setColor(MAIN_TEXT);
            s2.techs.forEach(t => {
                doc.text(`• ${t}`, x2 + 2, y2);
                y2 += 4.2;
            });
        }
        yM = Math.max(y1, y2) + 6;
    }

    doc.save(filename);
};
