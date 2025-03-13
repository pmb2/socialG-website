import { NextResponse } from 'next/server';
import { generateSlideDeckPdf } from '@/lib/pdf-generator';

export async function GET() {
  // Generate a slide deck PDF with content
  const slides = [
    {
      title: "SocialGenius",
      content: "AI-Powered GBP Automation for Agencies"
    },
    {
      title: "The Problem",
      content: "Agencies struggle to manage Google Business Profiles at scale\n\n" +
        "• Manual updates are time-consuming and error-prone\n" +
        "• Client expectations for quick updates are challenging to meet\n" +
        "• Maintaining consistency across hundreds of locations is difficult"
    },
    {
      title: "Our Solution",
      content: "SocialGenius: AI-Powered GBP Automation\n\n" +
        "• Automate updates across thousands of profiles\n" +
        "• Intelligent review management and response\n" +
        "• Real-time analytics and reporting\n" +
        "• Seamless integration with existing workflows"
    },
    {
      title: "Market Opportunity",
      content: "A growing $4.2B market with high demand\n\n" +
        "• 2,500+ marketing agencies in our target segment\n" +
        "• 200,000+ potential client locations to manage\n" +
        "• 94% of customers searching Google Maps weekly\n" +
        "• 70% of agencies currently using manual processes"
    },
    {
      title: "Traction & Metrics",
      content: "Our growth demonstrates product-market fit\n\n" +
        "• $700k ARR with 127% YoY growth\n" +
        "• 94% customer retention rate\n" +
        "• 25+ agency clients managing 5,000+ locations\n" +
        "• 3.2M automated updates performed monthly"
    },
    {
      title: "Business Model",
      content: "Scalable SaaS with predictable revenue\n\n" +
        "• Subscription model based on location volume\n" +
        "• Average contract value: $2,800/month\n" +
        "• 78% gross margin\n" +
        "• Customer acquisition cost: $4,200\n" +
        "• Lifetime value: $82,000"
    },
    {
      title: "Our Team",
      content: "Industry experts with deep domain experience\n\n" +
        "• Leadership team with 40+ years combined experience\n" +
        "• Previously built and sold MarTech platforms\n" +
        "• Engineers from Google, Amazon, and Meta\n" +
        "• Advisors from leading marketing agencies"
    },
    {
      title: "Investment Opportunity",
      content: "Seeking $2.5M to accelerate growth\n\n" +
        "• Scale sales and marketing team\n" +
        "• Enhance AI capabilities and automation features\n" +
        "• Expand integration ecosystem\n" +
        "• Target international markets\n\n" +
        "Join us in transforming how agencies manage digital presence!"
    },
    {
      title: "Contact Us",
      content: "Let's discuss how we can work together\n\n" +
        "Email: investors@socialgenius.ai\n" +
        "Phone: (800) 555-1234\n" +
        "Website: www.socialgenius.ai\n\n" +
        "© " + new Date().getFullYear() + " SocialGenius. All rights reserved."
    }
  ];
  
  const pdfBuffer = await generateSlideDeckPdf("Pitch Deck", slides);
  
  // Prepare the response with appropriate headers for PDF download
  const response = new NextResponse(pdfBuffer);
  response.headers.set('Content-Type', 'application/pdf');
  response.headers.set('Content-Disposition', 'attachment; filename="SocialGenius-Pitch-Deck.pdf"');
  
  // Add cache control headers
  response.headers.set('Cache-Control', 'no-store, max-age=0');
  
  return response;
}