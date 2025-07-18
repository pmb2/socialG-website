import { NextResponse } from 'next/server';
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

export async function POST(request) {
  try {
    const formData = await request.json();

    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
    const region = process.env.AWS_REGION || "us-east-2";

    // For debugging: log if the env vars are loaded.
    console.log("AWS_REGION:", region);
    console.log("AWS_ACCESS_KEY_ID loaded:", !!accessKeyId);
    console.log("AWS_SECRET_ACCESS_KEY loaded:", !!secretAccessKey);

    if (!accessKeyId || !secretAccessKey) {
      throw new Error("AWS credentials are not set in environment variables. Please check your .env.local file and restart the server.");
    }

    const client = new LambdaClient({
      region: region,
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
      },
    });

    const invokePayload = Buffer.from(
      JSON.stringify({
        body: JSON.stringify(formData),
      }),
      "utf8"
    );

    const command = new InvokeCommand({
      FunctionName: 'contactFormMailer',
      InvocationType: "RequestResponse",
      Payload: invokePayload,
    });

    const { Payload } = await client.send(command);

    const result = Payload ? JSON.parse(Buffer.from(Payload).toString("utf8")) : null;

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error invoking Lambda function:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}