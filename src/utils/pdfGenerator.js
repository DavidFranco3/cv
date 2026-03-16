import html2pdf from 'html2pdf.js';

/**
 * Utility to generate a PDF from an HTML string using html2pdf.js
 */
export const generatePdf = async (htmlString, filename = 'CV_Jose_David_Ayala_Franco.pdf') => {
    // Create a hidden iframe to render the standalone HTML
    // This ensures the PDF has its own scope for styles and doesn't conflict with the App's CSS
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'position:fixed;left:-9999px;top:-9999px;width:210mm;height:297mm;border:none;';
    document.body.appendChild(iframe);

    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(htmlString);
    doc.close();

    // Force light mode and white background on iframe to prevent transparency/dark inheritance
    doc.documentElement.style.colorScheme = 'light';
    doc.body.style.backgroundColor = '#ffffff';
    doc.body.style.color = '#1a1a1a';

    // Wait for resources (fonts, images) to load
    // 800ms is usually enough for Google Fonts and external images
    return new Promise((resolve) => {
        setTimeout(() => {
            const opt = {
                margin: 0,
                filename: filename,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 3, // Higher scale for better retina/print quality
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: '#ffffff',
                    logging: false,
                    letterRendering: true,
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait',
                    compress: true
                },
            };

            html2pdf()
                .set(opt)
                .from(doc.body)
                .save()
                .then(() => {
                    document.body.removeChild(iframe);
                    resolve();
                });
        }, 1000);
    });
};
