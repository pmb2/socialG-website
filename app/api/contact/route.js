import { NextResponse } from 'next/server';
import { Amplify } from 'aws-amplify';
import {invoke} from 'aws-amplify/functions';
import awsconfig from '../../../../aws-exports';

Amplify.configure(awsconfig);

export async function POST(request) {
  try {
    const formData = await request.json();

    const result = await invoke({
      functionName: 'contactFormMailer',
      payload: JSON.stringify(formData),
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error invoking Lambda function:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}