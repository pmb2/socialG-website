import { NextResponse } from 'next/server';
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

export async function POST(request) {
  try {
    const formData = await request.json();

    const awsRegion = process.env.AWS_REGION || "us-east-1";
    const awsAccessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

    if (!awsAccessKeyId || !awsSecretAccessKey) {
      throw new Error("AWS credentials (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY) are not set.");
    }

    const client = new LambdaClient({
      region: awsRegion,
      credentials: {
        accessKeyId: awsAccessKeyId,
        secretAccessKey: awsSecretAccessKey,
      },
    });

    const invokePayload = Buffer.from(JSON.stringify(formData), "utf8");

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