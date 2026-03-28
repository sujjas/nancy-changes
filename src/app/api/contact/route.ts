import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { firstName, lastName, email, organisation, enquiryType, eventDate, budget, message } = body;

  try {
    await resend.emails.send({
      from: 'Website Enquiry <onboarding@resend.dev>',
      to: 'info@nancykacungira.com',
      replyTo: email,
      subject: `New Enquiry: ${enquiryType || 'General'} — ${firstName} ${lastName}`,
      html: `
        <h2>New enquiry from nancykacungira.com</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td><strong>Name</strong></td><td>${firstName} ${lastName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Organisation</strong></td><td>${organisation || '—'}</td></tr>
          <tr><td><strong>Enquiry type</strong></td><td>${enquiryType || '—'}</td></tr>
          <tr><td><strong>Event date</strong></td><td>${eventDate || '—'}</td></tr>
          <tr><td><strong>Budget</strong></td><td>${budget || '—'}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message || '—'}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
  }
}
