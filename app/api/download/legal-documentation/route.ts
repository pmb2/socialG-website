import { NextResponse } from 'next/server';
import { generateDocumentPdf } from '@/lib/pdf-generator';

export async function GET() {
  // Generate a real PDF with content
  const pdfBuffer = await generateDocumentPdf("Legal Documentation", {
    "Non-Disclosure Agreement": 
      "This Non-Disclosure Agreement (\"Agreement\") is made and effective as of the date of\n" +
      "electronic signature or delivery (\"Effective Date\") by and between SocialGenius, Inc.\n" +
      "(\"Company\") and the recipient identified during the investment process (\"Recipient\").\n\n" +
      "1. PURPOSE\n" +
      "The parties wish to explore a potential business relationship, during which the Company\n" +
      "may disclose confidential information to the Recipient.\n\n" +
      "2. CONFIDENTIAL INFORMATION\n" +
      "\"Confidential Information\" refers to any information disclosed by Company to Recipient,\n" +
      "either directly or indirectly, in writing, orally or by any other means, including but\n" +
      "not limited to business plans, financial data, customer lists, and proprietary technology.",
    
    "Terms & Conditions": 
      "SOCIALGENIUS SERVICE TERMS AND CONDITIONS\n\n" +
      "These Terms and Conditions (\"Terms\") govern the use of SocialGenius's platform and\n" +
      "services (the \"Service\"). By accessing or using the Service, you agree to be bound\n" +
      "by these Terms.\n\n" +
      "1. SUBSCRIPTION TERMS\n" +
      "Subscriptions are billed monthly or annually based on the selected plan. Fees are\n" +
      "non-refundable except as required by law. SocialGenius may change subscription\n" +
      "fees upon 30 days' notice.\n\n" +
      "2. API USAGE AND LIMITATIONS\n" +
      "The Service connects to Google My Business API and is subject to Google's usage\n" +
      "limitations and terms of service. SocialGenius is not responsible for changes to\n" +
      "third-party APIs that may affect functionality.",
    
    "Privacy Policy": 
      "PRIVACY POLICY\n\n" +
      "SocialGenius, Inc. (\"we\", \"our\", or \"us\") is committed to protecting your privacy.\n" +
      "This Privacy Policy explains how we collect, use, and safeguard your information when\n" +
      "you use our platform and services.\n\n" +
      "1. INFORMATION WE COLLECT\n" +
      "We collect information you provide directly, such as account information, payment\n" +
      "details, and content you upload to our platform. We also automatically collect certain\n" +
      "information about your device and usage of our services.\n\n" +
      "2. HOW WE USE YOUR INFORMATION\n" +
      "We use collected information to provide and improve our services, process transactions,\n" +
      "communicate with you, and comply with legal obligations.",
    
    "Service Level Agreement": 
      "SERVICE LEVEL AGREEMENT (SLA)\n\n" +
      "This Service Level Agreement (\"SLA\") is part of the subscription agreement between\n" +
      "SocialGenius, Inc. (\"SocialGenius\") and the customer (\"Customer\").\n\n" +
      "1. SERVICE AVAILABILITY\n" +
      "SocialGenius guarantees 99.9% uptime of the platform, excluding scheduled maintenance.\n" +
      "Scheduled maintenance will be performed during non-business hours and announced at\n" +
      "least 48 hours in advance.\n\n" +
      "2. SUPPORT RESPONSE TIMES\n" +
      "Critical issues: Response within 1 hour, 24/7\n" +
      "High priority issues: Response within 4 business hours\n" +
      "Medium priority issues: Response within 8 business hours\n" +
      "Low priority issues: Response within 24 business hours",
    
    "Investment Terms": 
      "INVESTMENT TERMS SUMMARY\n\n" +
      "This document summarizes the key terms for potential investment in SocialGenius, Inc.\n" +
      "This is not a legally binding document and is provided for discussion purposes only.\n\n" +
      "1. FINANCING OVERVIEW\n" +
      "SocialGenius is seeking $2.5M in Series A financing to accelerate growth and product\n" +
      "development.\n\n" +
      "2. VALUATION\n" +
      "Pre-money valuation: $10M\n" +
      "Post-money valuation: $12.5M\n\n" +
      "3. INVESTOR RIGHTS\n" +
      "Pro-rata rights for future rounds\n" +
      "Information rights (quarterly financial statements)\n" +
      "Board observer seat for lead investor ($1M+ investment)",
    
    "Legal Contact Information": 
      "For legal inquiries, please contact:\n\n" +
      "Legal Department\n" +
      "SocialGenius, Inc.\n" +
      "123 Tech Boulevard, Suite 400\n" +
      "San Francisco, CA 94105\n" +
      "legal@socialgenius.ai\n" +
      "(800) 555-1234\n\n" +
      "Our legal counsel:\n\n" +
      "Smith & Johnson LLP\n" +
      "555 Market Street\n" +
      "San Francisco, CA 94105\n" +
      "contact@smithjohnson.com\n" +
      "(415) 555-6789"
  });
  
  // Prepare the response with proper headers for PDF download
  const response = new NextResponse(pdfBuffer);
  response.headers.set('Content-Type', 'application/pdf');
  response.headers.set('Content-Disposition', 'attachment; filename="SocialGenius-Legal-Documentation.pdf"');
  
  return response;
}