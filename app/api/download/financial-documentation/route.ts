import { NextResponse } from 'next/server';
import { generateDocumentPdf } from '@/lib/pdf-generator';

export async function GET() {
  // Generate a real PDF with content
  const pdfBuffer = await generateDocumentPdf("Financial Documentation", {
    "Income Statement": 
      "FY 2023 (in thousands)\n\n" +
      "Revenue\n" +
      "• Subscription Revenue: $650\n" +
      "• Professional Services: $50\n" +
      "• Total Revenue: $700\n\n" +
      "Expenses\n" +
      "• Cost of Revenue: $154\n" +
      "• R&D: $185\n" +
      "• Sales & Marketing: $290\n" +
      "• G&A: $120\n" +
      "• Total Expenses: $749\n\n" +
      "Operating Income: ($49)\n" +
      "Net Income: ($49)",
    
    "Revenue Breakdown": 
      "Revenue by Customer Segment\n\n" +
      "• Small Agencies (1-5 employees): $105k (15%)\n" +
      "• Mid-size Agencies (6-20 employees): $350k (50%)\n" +
      "• Large Agencies (21+ employees): $245k (35%)\n\n" +
      "Revenue by Geography\n\n" +
      "• North America: $560k (80%)\n" +
      "• Europe: $105k (15%)\n" +
      "• Rest of World: $35k (5%)",
    
    "Key Performance Indicators": 
      "Subscription Metrics\n\n" +
      "• Monthly Recurring Revenue (MRR): $60k\n" +
      "• Annual Recurring Revenue (ARR): $650k\n" +
      "• Average Revenue Per User (ARPU): $2.8k\n" +
      "• Customer Acquisition Cost (CAC): $4.2k\n" +
      "• Customer Lifetime Value (LTV): $82k\n" +
      "• LTV:CAC Ratio: 19.5:1\n" +
      "• Gross Margin: 78%\n" +
      "• Net Revenue Retention: 127%\n" +
      "• Churn Rate: 6%",
    
    "Cash Flow Statement": 
      "FY 2023 (in thousands)\n\n" +
      "Cash Flow from Operations\n" +
      "• Net Income: ($49)\n" +
      "• Depreciation & Amortization: $18\n" +
      "• Changes in Working Capital: $12\n" +
      "• Net Cash from Operations: ($19)\n\n" +
      "Cash Flow from Investing\n" +
      "• Capital Expenditures: ($25)\n" +
      "• Net Cash from Investing: ($25)\n\n" +
      "Cash Flow from Financing\n" +
      "• Equity Investment: $500\n" +
      "• Net Cash from Financing: $500\n\n" +
      "Net Change in Cash: $456\n" +
      "Beginning Cash Balance: $120\n" +
      "Ending Cash Balance: $576",
    
    "Balance Sheet": 
      "As of December 31, 2023 (in thousands)\n\n" +
      "Assets\n" +
      "• Cash & Cash Equivalents: $576\n" +
      "• Accounts Receivable: $85\n" +
      "• Prepaid Expenses: $35\n" +
      "• Total Current Assets: $696\n" +
      "• Property & Equipment: $42\n" +
      "• Total Assets: $738\n\n" +
      "Liabilities\n" +
      "• Accounts Payable: $28\n" +
      "• Accrued Expenses: $45\n" +
      "• Deferred Revenue: $140\n" +
      "• Total Current Liabilities: $213\n" +
      "• Total Liabilities: $213\n\n" +
      "Equity\n" +
      "• Paid-in Capital: $750\n" +
      "• Retained Earnings: ($225)\n" +
      "• Total Equity: $525\n\n" +
      "Total Liabilities & Equity: $738",
    
    "Financial Projections": 
      "5-Year Revenue Forecast (in thousands)\n\n" +
      "• Year 1 (2023): $700 (Actual)\n" +
      "• Year 2 (2024): $1,600 (Projected)\n" +
      "• Year 3 (2025): $3,800 (Projected)\n" +
      "• Year 4 (2026): $8,200 (Projected)\n" +
      "• Year 5 (2027): $15,500 (Projected)\n\n" +
      "Profitability Timeline\n\n" +
      "• Break-even expected in Q3 2025\n" +
      "• Projected EBITDA of $1.2M in 2025\n" +
      "• Projected EBITDA of $3.1M in 2026\n" +
      "• Projected EBITDA of $6.2M in 2027"
  });
  
  // Prepare the response with proper headers for PDF download
  const response = new NextResponse(pdfBuffer);
  response.headers.set('Content-Type', 'application/pdf');
  response.headers.set('Content-Disposition', 'attachment; filename="SocialGenius-Financial-Documentation.pdf"');
  
  return response;
}