import { NextResponse } from 'next/server';
import { generateDocumentPdf } from '@/lib/pdf-generator';

export async function GET() {
  // Generate a real PDF with content
  const pdfBuffer = await generateDocumentPdf("Executive Summary", {
    "Company Overview": 
      "SocialGenius provides AI-powered GBP Automation for Agencies, enabling\n" +
      "seamless management of Google Business Profiles at scale.",
    
    "Key Metrics": 
      "• Market Size: $4.2B\n" +
      "• Annual Revenue: $700k\n" +
      "• Growth Rate: 127% YoY\n" +
      "• Customer Retention: 94%\n" +
      "• Agency Clients: 25+\n" +
      "• Locations Managed: 5,000+",
    
    "Investment Opportunity": 
      "We're seeking strategic partners to help us scale our platform and reach\n" +
      "more agency clients worldwide. Our technology gives agencies the power\n" +
      "to manage thousands of business profiles with minimal human intervention.\n\n" +
      "Seeking $2.5M in investment to accelerate growth and expand market reach.",
    
    "Competitive Advantage": 
      "• Proprietary AI algorithms for content generation and optimization\n" +
      "• Seamless integration with existing agency workflows\n" +
      "• Automated review management and response system\n" +
      "• Real-time analytics dashboard with actionable insights",
    
    "Contact Information": 
      "Email: investors@socialgenius.ai\n" +
      "Phone: (800) 555-1234\n" +
      "Website: www.socialgenius.ai"
  });
  
  // Prepare the response with proper headers for PDF download
  const response = new NextResponse(pdfBuffer);
  response.headers.set('Content-Type', 'application/pdf');
  response.headers.set('Content-Disposition', 'attachment; filename="SocialGenius-Executive-Summary.pdf"');
  
  return response;
}