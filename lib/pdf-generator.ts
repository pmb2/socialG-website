import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

// Define colors
const colors = {
  primary: [14, 165, 233], // Sky blue
  pink: [255, 22, 129],    // #FF1681
  purple: [201, 57, 214],  // #C939D6
  indigo: [123, 93, 255],  // #7B5DFF
  blue: [0, 128, 255],     // #0080FF
  orange: [255, 167, 38],  // #FFA726
  text: {
    dark: [40, 40, 40],
    medium: [100, 100, 100],
    light: [150, 150, 150]
  }
};

// Generate a standard document PDF with sections
export async function generateDocumentPdf(documentTitle: string, content: Record<string, string>) {
  // Create a new PDF document
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  }) as any; // Type as any to use jspdf-autotable

  // Add colorful header
  const gradient = doc.setFillColor('#FFA726')
    .rect(0, 0, doc.internal.pageSize.getWidth(), 15, 'F')
    .setFillColor('#FF1681')
    .rect(doc.internal.pageSize.getWidth()/5, 0, doc.internal.pageSize.getWidth()/5, 15, 'F')
    .setFillColor('#C939D6')
    .rect(2*doc.internal.pageSize.getWidth()/5, 0, doc.internal.pageSize.getWidth()/5, 15, 'F')
    .setFillColor('#7B5DFF')
    .rect(3*doc.internal.pageSize.getWidth()/5, 0, doc.internal.pageSize.getWidth()/5, 15, 'F')
    .setFillColor('#0080FF')
    .rect(4*doc.internal.pageSize.getWidth()/5, 0, doc.internal.pageSize.getWidth()/5, 15, 'F');
  
  // Add title and branding
  doc.setFontSize(28);
  doc.setTextColor(...colors.primary);
  doc.text("SocialGenius", 20, 30);
  
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0);
  doc.text(documentTitle, 20, 40);

  // Add separator line
  doc.setDrawColor(...colors.primary);
  doc.setLineWidth(0.5);
  doc.line(20, 45, 190, 45);
  
  // Add content sections
  let yPosition = 55;
  let sectionIndex = 0;
  const colorSequence = [colors.pink, colors.purple, colors.indigo, colors.blue, colors.orange];
  
  for (const [sectionTitle, sectionContent] of Object.entries(content)) {
    // Check if we need to add a new page
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 30;
    }
    
    // Add section title with colored box
    const currentColor = colorSequence[sectionIndex % colorSequence.length];
    doc.setFillColor(...currentColor);
    doc.rect(15, yPosition-5, 5, 5, 'F');
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(sectionTitle, 25, yPosition);
    yPosition += 10;
    
    // Add section content
    doc.setFontSize(12);
    doc.setTextColor(...colors.text.dark);
    
    const contentLines = sectionContent.split('\n');
    for (const line of contentLines) {
      // Check if we need to add a new page
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 30;
      }
      
      doc.text(line, 25, yPosition);
      yPosition += line.trim() === '' ? 5 : 7; // Smaller gap for empty lines
    }
    
    yPosition += 15; // Add more space between sections
    sectionIndex++;
  }
  
  // Add footer on all pages
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    
    // Add colored footer
    doc.setFillColor('#FFA726')
      .rect(0, doc.internal.pageSize.getHeight()-7, doc.internal.pageSize.getWidth()/5, 7, 'F')
      .setFillColor('#FF1681')
      .rect(doc.internal.pageSize.getWidth()/5, doc.internal.pageSize.getHeight()-7, doc.internal.pageSize.getWidth()/5, 7, 'F')
      .setFillColor('#C939D6')
      .rect(2*doc.internal.pageSize.getWidth()/5, doc.internal.pageSize.getHeight()-7, doc.internal.pageSize.getWidth()/5, 7, 'F')
      .setFillColor('#7B5DFF')
      .rect(3*doc.internal.pageSize.getWidth()/5, doc.internal.pageSize.getHeight()-7, doc.internal.pageSize.getWidth()/5, 7, 'F')
      .setFillColor('#0080FF')
      .rect(4*doc.internal.pageSize.getWidth()/5, doc.internal.pageSize.getHeight()-7, doc.internal.pageSize.getWidth()/5, 7, 'F');
    
    // Add copyright and page number
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("© " + new Date().getFullYear() + " SocialGenius. All rights reserved.", 20, doc.internal.pageSize.getHeight() - 10);
    doc.text("CONFIDENTIAL", 180, doc.internal.pageSize.getHeight() - 10);
    doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });
  }
  
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
  }) as any; // Type as any to use jspdf-autotable
  
  // Create each slide
  slides.forEach((slide, index) => {
    // Add a new page for slides after the first one
    if (index > 0) {
      doc.addPage();
    }
    
    // Add colorful header
    const width = doc.internal.pageSize.getWidth();
    const headerHeight = 12;
    
    doc.setFillColor('#FFA726')
      .rect(0, 0, width/5, headerHeight, 'F')
      .setFillColor('#FF1681')
      .rect(width/5, 0, width/5, headerHeight, 'F')
      .setFillColor('#C939D6')
      .rect(2*width/5, 0, width/5, headerHeight, 'F')
      .setFillColor('#7B5DFF')
      .rect(3*width/5, 0, width/5, headerHeight, 'F')
      .setFillColor('#0080FF')
      .rect(4*width/5, 0, width/5, headerHeight, 'F');
    
    // Add slide number
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(`Slide ${index + 1} of ${slides.length}`, width - 20, 20, { align: 'right' });
    
    // Add SocialGenius branding
    doc.setFontSize(16);
    doc.setTextColor(...colors.primary);
    doc.text("SocialGenius", 20, 20);
    
    // Add title
    doc.setFontSize(28);
    doc.setTextColor(0, 0, 0);
    doc.text(slide.title, 20, 40);
    
    // Add separator line
    const colorIndex = index % 5;
    let lineColor;
    
    switch (colorIndex) {
      case 0: lineColor = colors.pink; break;
      case 1: lineColor = colors.purple; break;
      case 2: lineColor = colors.indigo; break;
      case 3: lineColor = colors.blue; break;
      case 4: lineColor = colors.orange; break;
    }
    
    doc.setDrawColor(...lineColor);
    doc.setLineWidth(1);
    doc.line(20, 45, 280, 45);
    
    // Add content with line breaks
    doc.setFontSize(14);
    doc.setTextColor(...colors.text.dark);
    
    const contentLines = slide.content.split('\n');
    let yPosition = 60;
    
    contentLines.forEach(line => {
      // Check if line starts with bullet
      if (line.trim().startsWith('•')) {
        // Indent and style bullet points
        const textWithoutBullet = line.trim().substring(1).trim();
        doc.setTextColor(...lineColor);
        doc.text('•', 25, yPosition);
        doc.setTextColor(...colors.text.dark);
        doc.text(textWithoutBullet, 30, yPosition);
      } else {
        doc.text(line, 20, yPosition);
      }
      
      yPosition += line.trim() === '' ? 5 : 10; // Smaller gap for empty lines
    });
    
    // Add colorful footer
    const footerHeight = 7;
    const height = doc.internal.pageSize.getHeight();
    
    doc.setFillColor('#FFA726')
      .rect(0, height-footerHeight, width/5, footerHeight, 'F')
      .setFillColor('#FF1681')
      .rect(width/5, height-footerHeight, width/5, footerHeight, 'F')
      .setFillColor('#C939D6')
      .rect(2*width/5, height-footerHeight, width/5, footerHeight, 'F')
      .setFillColor('#7B5DFF')
      .rect(3*width/5, height-footerHeight, width/5, footerHeight, 'F')
      .setFillColor('#0080FF')
      .rect(4*width/5, height-footerHeight, width/5, footerHeight, 'F');
      
    // Add footer text
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("CONFIDENTIAL | © " + new Date().getFullYear() + " SocialGenius", width/2, height - 10, { align: 'center' });
  });
  
  // Convert to buffer
  return Buffer.from(doc.output('arraybuffer'));
}