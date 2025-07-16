# Configuring the Contact Form to Send Emails with AWS Amplify and Amazon SES

This guide provides a step-by-step process for configuring the contact form on your website to send email notifications using a serverless Lambda function created with AWS Amplify and Amazon Simple Email Service (SES).

## Prerequisites

Before you begin, ensure you have the following:

*   An active AWS account.
*   The AWS Amplify CLI installed and configured on your local machine.
*   Node.js and npm installed.
*   Your website project is initialized with Amplify.

## Step 1: Create a New Lambda Function

First, you will create a new Lambda function to handle the email sending logic.

1.  **Open your terminal** and navigate to the root directory of your project.
2.  **Run the following command** to start the process of adding a new Lambda function:

    ```bash
    amplify add function
    ```

3.  **Follow the interactive prompts** to configure the function:
    *   **Select which capability you want to add**: Choose `Lambda function (serverless function)`.
    *   **Provide a friendly name for your resource to be used as a label for this category in the project**: Enter `contactFormMailer`.
    *   **Provide the AWS Lambda function name**: Press Enter to use the default name (`contactFormMailer`).
    *   **Choose the function runtime that you want to use**: Select `NodeJS`.
    *   **Choose the function template that you want to use**: Select `Hello World`.
    *   **Do you want to access other resources in this project from your Lambda function?**: Answer `No`.
    *   **Do you want to invoke this function on a recurring schedule?**: Answer `No`.
    *   **Do you want to configure Lambda layers for this function?**: Answer `No`.
    *   **Do you want to edit the local lambda function now?**: Answer `No`.

Amplify will create a new directory for your Lambda function at `amplify/backend/function/contactFormMailer`.

## Step 2: Install `nodemailer`

Next, you need to install the `nodemailer` package, which will be used to send emails.

1.  **Navigate to the function's source directory**:

    ```bash
    cd amplify/backend/function/contactFormMailer/src
    ```

2.  **Install `nodemailer`**:

    ```bash
    npm install nodemailer
    ```

## Step 3: Configure Amazon SES

Now, you will configure Amazon SES to send emails.

1.  **Verify an email address in SES**:
    *   Open the [Amazon SES console](https://console.aws.amazon.com/ses/).
    *   In the navigation pane, choose **Verified Identities**.
    *   Choose **Create Identity**.
    *   Select **Email address** and enter the email address you want to use to send emails (e.g., `noreply@social-genius.com`).
    *   Click **Create Identity**.
    *   Amazon SES will send a verification email to the address you entered. Click the verification link in the email.

2.  **Create SMTP credentials**:
    *   In the SES console, choose **SMTP Settings** from the navigation pane.
    *   Click **Create SMTP Credentials**.
    *   This will create a new IAM user with the necessary permissions to send emails through SES.
    *   Copy the **SMTP Username** and **SMTP Password**. You will need these in the next step.

## Step 4: Set Environment Variables

You need to set the email credentials as environment variables for your Lambda function.

1.  **Open the Amplify console**:

    ```bash
    amplify console
    ```

2.  **Navigate to your project** and then to the **Functions** section.
3.  **Select the `contactFormMailer` function**.
4.  **Go to the "Environment variables" tab** and add the following variables:
    *   `EMAIL_USER`: The SMTP Username you copied from the SES console.
    *   `EMAIL_PASS`: The SMTP Password you copied from the SES console.
    *   `RECIPIENT_EMAIL`: `sales@social-genius.com`

## Step 5: Update the Lambda Function Code

Now, you will update the Lambda function's code to send emails using `nodemailer` and the environment variables you just set.

1.  **Open the `index.js` file** located at `amplify/backend/function/contactFormMailer/src/index.js`.
2.  **Replace the existing code with the following**:

    ```javascript
    const nodemailer = require('nodemailer');

    exports.handler = async (event) => {
      const { name, email, company, phone, locations, message } = JSON.parse(event.body);

      const transporter = nodemailer.createTransport({
        host: 'email-smtp.us-east-1.amazonaws.com', // Or your SES region's endpoint
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.RECIPIENT_EMAIL,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Locations:</strong> ${locations || 'Not specified'}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
        return {
          statusCode: 200,
          body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
        };
      } catch (error) {
        console.error('Error sending email:', error);
        return {
          statusCode: 500,
          body: JSON.stringify({ success: false, error: error.message }),
        };
      }
    };
    ```

## Step 6: Update the API Route

Next, you will update the `/api/contact` route to invoke the new Lambda function.

1.  **Open the `route.js` file** located at `app/api/contact/route.js`.
2.  **Replace the existing code with the following**:

    ```javascript
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
    ```

## Step 7: Deploy Your Changes

Finally, deploy your changes to Amplify.

1.  **Run the following command** to push your changes to the cloud:

    ```bash
    amplify push
    ```

2.  **Confirm the changes** by answering `Yes` to the prompts.

Amplify will now provision the new Lambda function and update your API. Once the deployment is complete, your contact form will be configured to send email notifications to `sales@social-genius.com` using your new serverless function.
