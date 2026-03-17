import html2pdf from 'html2pdf.js';

/**
 * Utility to generate a PDF from an actual DOM element.
 * This approach ensures that the PDF looks exactly as the live app does.
 */
export const generatePdf = async (element, filename = 'CV_Jose_David_Ayala_Franco.pdf') => {
    if (!element) {
        console.error('No element provided for PDF generation');
        return;
    }

    // Add a temporary class to the element for PDF-specific CSS overrides
    element.classList.add('pdf-mode');

    const opt = {
        margin: [5, 5, 5, 5], // Small margins to avoid edge cutting
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 3, // High scale for crisp text
            useCORS: true,
            letterRendering: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait',
            compress: true
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
        const worker = html2pdf().set(opt).from(element).toPdf().get('pdf');

        await worker.then((pdf) => {
            const totalPages = pdf.internal.getNumberOfPages();
            for (let i = 1; i <= totalPages; i++) {
                pdf.setPage(i);
                pdf.setFontSize(10);
                pdf.setTextColor(150);
                pdf.text(
                    `Página ${i} de ${totalPages}`,
                    pdf.internal.pageSize.getWidth() - 30,
                    pdf.internal.pageSize.getHeight() - 10
                );
            }
        }).save();
    } catch (error) {
        console.error('PDF Generation failed:', error);
    } finally {
        // Clean up classes
        element.classList.remove('pdf-mode');
    }
};
