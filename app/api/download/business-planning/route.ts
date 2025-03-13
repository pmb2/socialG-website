import { NextResponse } from 'next/server';
import { generateDocumentPdf } from '@/lib/pdf-generator';

export async function GET() {
  // Generate a real PDF with content
  const pdfBuffer = await generateDocumentPdf("Business Planning", {
    "Executive Summary": 
      "SocialGenius provides AI-powered GBP Automation for Agencies, enabling seamless\n" +
      "management of Google Business Profiles at scale. Our platform helps marketing\n" +
      "agencies automate updates, manage reviews, and generate analytics for their clients.",
    
    "Company Description": 
      "Founded in 2020, SocialGenius has developed proprietary AI technology that\n" +
      "revolutionizes how marketing agencies manage their clients' online presence.\n" +
      "Our platform integrates with Google Business Profiles and provides a comprehensive\n" +
      "suite of tools for automation, content generation, and analytics.",
    
    "Market Analysis": 
      "The global digital marketing software market is projected to reach $4.2 billion by 2026,\n" +
      "growing at a CAGR of 13.5%. Our target market consists of 2,500+ marketing agencies\n" +
      "managing business profiles for multiple clients, with a total addressable market of\n" +
      "approximately 200,000 business locations in North America alone.",
    
    "Organization & Management": 
      "SocialGenius is led by a team of experienced entrepreneurs and technology experts:\n\n" +
      "• CEO: Former founder of MarTech platform acquired in 2018\n" +
      "• CTO: 15+ years experience in AI and machine learning\n" +
      "• CMO: Previously led marketing for a Fortune 500 tech company\n" +
      "• VP of Sales: Built and scaled sales teams at two successful SaaS startups",
    
    "Service Line": 
      "Our platform offers the following key features:\n\n" +
      "• Automated profile updates across thousands of locations\n" +
      "• AI-powered review management and response generation\n" +
      "• Content creation and optimization for maximum visibility\n" +
      "• Real-time analytics and custom reporting\n" +
      "• White-label solutions for agency branding",
    
    "Marketing & Sales Strategy": 
      "Our go-to-market strategy focuses on direct sales to mid-sized marketing agencies:\n\n" +
      "• Inbound marketing through industry publications and content marketing\n" +
      "• Outbound sales targeting agencies managing 50+ business locations\n" +
      "• Strategic partnerships with complementary MarTech platforms\n" +
      "• Customer referral program with incentives for existing clients",
    
    "Financial Projections": 
      "Based on current growth and market penetration:\n\n" +
      "• Year 1: $700k revenue (achieved)\n" +
      "• Year 2: $1.6M revenue (projected)\n" +
      "• Year 3: $3.8M revenue (projected)\n" +
      "• Year 4: $8.2M revenue (projected)\n" +
      "• Year 5: $15.5M revenue (projected)\n\n" +
      "Profitability expected by Q3 of Year 3 with 78% gross margins.",
    
    "Funding Request": 
      "SocialGenius is seeking $2.5M in Series A funding to accelerate growth:\n\n" +
      "• $1.2M for sales and marketing expansion\n" +
      "• $800k for product development and AI enhancements\n" +
      "• $300k for operations and infrastructure scaling\n" +
      "• $200k for working capital"
  });
  
  // Prepare the response with proper headers for PDF download
  const response = new NextResponse(pdfBuffer);
  response.headers.set('Content-Type', 'application/pdf');
  response.headers.set('Content-Disposition', 'attachment; filename="SocialGenius-Business-Planning.pdf"');
  
  return response;
}