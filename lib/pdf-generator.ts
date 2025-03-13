import { jsPDF } from 'jspdf';

// Generate a standard document PDF with sections
export async function generateDocumentPdf(documentTitle: string, content: Record<string, string>) {
  // Create a new PDF document
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });
  
  // Add title and branding
  doc.setFontSize(24);
  doc.setTextColor(14, 165, 233); // Sky blue color
  doc.text("SocialGenius", 20, 20);
  
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text(documentTitle, 20, 30);
  
  // Add content sections
  let yPosition = 45;
  
  for (const [sectionTitle, sectionContent] of Object.entries(content)) {
    // Add section title
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(sectionTitle, 20, yPosition);
    yPosition += 10;
    
    // Add section content
    doc.setFontSize(12);
    doc.setTextColor(40, 40, 40);
    
    const contentLines = sectionContent.split('\n');
    for (const line of contentLines) {
      doc.text(line, 20, yPosition);
      yPosition += line.trim() === '' ? 5 : 7; // Smaller gap for empty lines
    }
    
    yPosition += 10; // Add space between sections
  }
  
  // Add footer
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text("© " + new Date().getFullYear() + " SocialGenius. All rights reserved.", 20, 280);
  doc.text("CONFIDENTIAL", 180, 280);
  
  // Convert to buffer
  return Buffer.from(doc.output('arraybuffer'));
}

// Generate a slide deck PDF
export async function generateSlideDeckPdf(documentTitle: string, slides: Array<{title: string, content: string}>) {
  // Create a new PDF document
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });
  
  // Create each slide
  slides.forEach((slide, index) => {
    // Add a new page for slides after the first one
    if (index > 0) {
      doc.addPage();
    }
    
    // Add slide number
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text(`Slide ${index + 1}`, 280, 10, { align: 'right' });
    
    // Add SocialGenius branding
    doc.setFontSize(12);
    doc.setTextColor(14, 165, 233); // Sky blue color
    doc.text("SocialGenius", 10, 10);
    
    // Add title
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.text(slide.title, 20, 40);
    
    // Add content with line breaks
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 40);
    
    const contentLines = slide.content.split('\n');
    let yPosition = 60;
    
    contentLines.forEach(line => {
      doc.text(line, 20, yPosition);
      yPosition += line.trim() === '' ? 5 : 10; // Smaller gap for empty lines
    });
    
    // Add footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("CONFIDENTIAL", 280, 200, { align: 'right' });
  });
  
  // Convert to buffer
  return Buffer.from(doc.output('arraybuffer'));
}