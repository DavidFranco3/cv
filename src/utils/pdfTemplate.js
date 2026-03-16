/**
 * Ultra-Clean Monochrome CV Template for PDF Generation
 * Absolute white paper, pure black/gray text, no colored backgrounds.
 */

export const buildPdfHtml = (data) => {
  const { name, title, contact, objective, skills, experience, education, certifications, languages, interests, avatarUrl } = data;

  // Helper to generate skill tags - ultra clean grays
  const skillsHtml = (arr) =>
    arr.map(s => `<span style="display:inline-block; background:#ffffff; color:#000000; border:1px solid #1a1a1a; padding:2px 7px; border-radius:2px; font-size:8pt; margin:1.5px; font-weight:500;">${s}</span>`).join('');

  // Experience items - optimized for white background
  const experienceContent = experience.map(exp => `
    <div style="margin-bottom:14px; border-left:2px solid #000000; padding-left:14px;">
      <table style="width:100%; border-collapse:collapse; margin-bottom:3px;">
        <tr>
          <td style="vertical-align:top;">
            <div style="font-weight:800; font-size:11pt; color:#000000; text-transform:uppercase; letter-spacing:0.5px;">${exp.role}</div>
            <div style="font-weight:600; font-size:9.5pt; color:#333333; font-style:italic;">${exp.company}</div>
          </td>
          <td style="text-align:right; vertical-align:top; width:100px;">
            <div style="font-size:8pt; font-weight:800; border:1.5px solid #000000; color:#000000; padding:2px 8px; border-radius:0px; white-space:nowrap; text-transform:uppercase;">${exp.duration}</div>
          </td>
        </tr>
      </table>
      <div style="font-size:9.5pt; line-height:1.5; color:#1a1a1a; text-align:justify;">
        ${Array.isArray(exp.description) ? `
          <ul style="margin: 0; padding-left: 18px; margin-top: 5px;">
            ${exp.description.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join('')}
          </ul>
        ` : exp.description}
      </div>
    </div>
  `).join('');

  // Sidebar Items
  const sidebarItemHtml = (title, sub, meta) => `
    <div style="margin-bottom:12px;">
      <div style="font-weight:800; font-size:9.5pt; color:#000000; line-height:1.2;">${title}</div>
      <div style="font-size:9pt; color:#333333; margin-top:2px;">${sub}</div>
      ${meta ? `<div style="font-size:8pt; color:#555555; font-style:italic;">${meta}</div>` : ''}
    </div>
  `;

  const educationContent = education.map(edu => sidebarItemHtml(edu.institution, edu.degree, edu.duration)).join('');
  const certContent = certifications.map(cert => sidebarItemHtml(cert.title, cert.provider)).join('');

  const langContent = languages.map(l => `
    <div style="display:flex; justify-content:space-between; border-bottom:1.5px solid #000000; padding:4px 0; font-size:9pt;">
      <span style="font-weight:700; color:#000000;">${l.name}</span>
      <span style="color:#000000; font-weight:500;">${l.level}</span>
    </div>
  `).join('');

  const interestContent = interests.map(i => `<span style="display:inline-block; border:1px solid #000000; color:#000000; padding:2px 8px; font-size:8pt; margin:2px; font-weight:500;">${i}</span>`).join('');

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
      <style>
        * { margin:0; padding:0; box-sizing:border-box; -webkit-print-color-adjust: exact !important; font-family: 'Inter', sans-serif; }
        body { background-color: #ffffff !important; color: #000000 !important; line-height: 1.4; }
        
        .page { width: 210mm; min-height: 297mm; background: #ffffff !important; position: relative; }
        
        .sidebar { background-color: #ffffff !important; border-right: 2px solid #000000; width: 72mm; padding: 30px 20px; }
        .main { padding: 35px 35px; width: 138mm; }
        
        .section-title { 
          font-size: 11pt; 
          font-weight: 900; 
          text-transform: uppercase; 
          letter-spacing: 2px; 
          color: #000000; 
          border-bottom: 3px solid #000000; 
          padding-bottom: 4px; 
          margin-bottom: 15px; 
        }
        
        .sidebar-title { 
          font-size: 10pt; 
          font-weight: 900; 
          text-transform: uppercase; 
          letter-spacing: 1.5px;
          color: #000000; 
          border-bottom: 2px solid #000000; 
          padding-bottom: 3px; 
          margin-bottom: 12px; 
        }
        
        .icon { font-size: 11pt; width: 20px; display: inline-block; vertical-align: middle; }
        a { color: #000000 !important; text-decoration: none; font-weight: 600; }
      </style>
    </head>
    <body style="background:#ffffff;">
      <div class="page">
        <table style="width:100%; border-collapse:collapse; table-layout:fixed;">
          <tr>
            <!-- SIDEBAR -->
            <td class="sidebar" style="vertical-align:top;">
              <div style="text-align:center; margin-bottom:25px;">
                <img src="${avatarUrl}" style="width:110px; height:110px; border-radius:50%; border:3px solid #000000; object-fit:cover; filter: grayscale(100%);" crossorigin="anonymous"/>
              </div>

              <div style="margin-bottom:30px; border-bottom:2px solid #000000; padding-bottom:15px;">
                <div style="font-size:9pt; color:#000000; margin-bottom:8px; font-weight:500;"><span class="icon">📍</span> ${contact.location}</div>
                <div style="font-size:9pt; color:#000000; margin-bottom:8px; font-weight:500;"><span class="icon">✉️</span> <a href="mailto:${contact.email}">${contact.email}</a></div>
                <div style="font-size:9pt; color:#000000; margin-bottom:8px; font-weight:500;"><span class="icon">📱</span> ${contact.phone}</div>
                <div style="font-size:9pt; color:#000000; margin-bottom:8px; font-weight:500;"><span class="icon">🔗</span> ${contact.linkedin}</div>
                <div style="font-size:9pt; color:#000000; margin-bottom:8px; font-weight:500;"><span class="icon">🐙</span> ${contact.github}</div>
              </div>

              <div style="margin-bottom:25px;">
                <h3 class="sidebar-title">Formación</h3>
                ${educationContent}
              </div>

              <div style="margin-bottom:25px;">
                <h3 class="sidebar-title">Certificaciones</h3>
                ${certContent}
              </div>

              <div style="margin-bottom:25px;">
                <h3 class="sidebar-title">Idiomas</h3>
                ${langContent}
              </div>

              <div>
                <h3 class="sidebar-title">Intereses</h3>
                <div style="margin-top:8px;">${interestContent}</div>
              </div>
            </td>

            <!-- MAIN CONTENT -->
            <td class="main" style="vertical-align:top;">
              <div style="margin-bottom:30px; border-bottom:6px solid #000000; padding-bottom:12px;">
                <h1 style="font-size:32pt; font-weight:900; color:#000000; line-height:1; letter-spacing:-1.5px;">${name}</h1>
                <p style="font-size:14pt; font-weight:600; color:#333333; text-transform:uppercase; letter-spacing:4px; margin-top:8px;">${title}</p>
              </div>

              <div style="margin-bottom:25px;">
                <h2 class="section-title">Perfil Profesional</h2>
                <p style="font-size:10pt; line-height:1.6; color:#000000; text-align:justify;">${objective}</p>
              </div>

              <div style="margin-bottom:25px;">
                <h2 class="section-title">Experiencia Profesional</h2>
                ${experienceContent}
              </div>

              <div>
                <h2 class="section-title">Skills Técnicos</h2>
                <table style="width:100%; border-collapse:collapse;">
                  <tr>
                    <td style="width:50%; vertical-align:top; padding-right:15px;">
                      <h4 style="font-size:9pt; font-weight:900; color:#000000; text-transform:uppercase; margin-bottom:8px; border-left:4px solid #000000; padding-left:8px;">Backend</h4>
                      <div style="margin-top:6px;">${skillsHtml(skills.backend)}</div>
                    </td>
                    <td style="width:50%; vertical-align:top;">
                      <h4 style="font-size:9pt; font-weight:900; color:#000000; text-transform:uppercase; margin-bottom:8px; border-left:4px solid #000000; padding-left:8px;">Frontend</h4>
                      <div style="margin-top:6px;">${skillsHtml(skills.frontend)}</div>
                    </td>
                  </tr>
                  <tr><td style="height:20px;" colspan="2"></td></tr>
                  <tr>
                    <td style="width:50%; vertical-align:top; padding-right:15px;">
                      <h4 style="font-size:9pt; font-weight:900; color:#000000; text-transform:uppercase; margin-bottom:8px; border-left:4px solid #000000; padding-left:8px;">Mobile</h4>
                      <div style="margin-top:6px;">${skillsHtml(skills.mobile)}</div>
                    </td>
                    <td style="width:50%; vertical-align:top;">
                      <h4 style="font-size:9pt; font-weight:900; color:#000000; text-transform:uppercase; margin-bottom:8px; border-left:4px solid #000000; padding-left:8px;">Databases & Tools</h4>
                      <div style="margin-top:6px;">${skillsHtml([...skills.databases, ...skills.tools])}</div>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </body>
    </html>
  `;
};
