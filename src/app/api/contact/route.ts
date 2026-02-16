import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Numele, emailul și mesajul sunt obligatorii." },
        { status: 400 }
      );
    }

    // TODO: Integrate with Resend or SendGrid for email delivery
    // For now, log the contact form submission
    console.log("Contact form submission:", { name, email, phone, subject, message });

    return NextResponse.json({ success: true, message: "Mesaj trimis cu succes." });
  } catch {
    return NextResponse.json(
      { error: "Eroare internă. Vă rugăm încercați din nou." },
      { status: 500 }
    );
  }
}
