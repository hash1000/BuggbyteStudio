import { NextResponse } from "next/server";
import { Resend } from "resend";
import { BuggByteEmail } from "../../../components/email/buggbyte-email";
import { ClientEmail } from "../../../components/email/client-email";

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: any, res: any) {
  try {
    const { name, email, service, message } = await req.json();
    const { data, error } = await resend.emails.send({
      from: `${process.env.COMPANY_EMAIL}`,
      to: `${process.env.MEMBER_EMAIL}`,
      subject: "BuggByte Studios",
      react: BuggByteEmail({
        name,
        email,
        service,
        message,
      }) as React.ReactElement,
    });

    if (data) {
      try {
        const { data, error } = await resend.emails.send({
          from: `${process.env.COMPANY_EMAIL}`,
          to: `${email}`,
          subject: "BuggByte Studios",
          react: ClientEmail({ name }) as React.ReactElement,
        });

        if (data) {
          return NextResponse.json("Both Email sent successfully");
        } else {
          console.error("Client Error sending email:", error);
          return NextResponse.json(
            { error: " Client Error sending email" },
            { status: 400 }
          );
        }
      } catch (error) {
        console.error(" Client Error handling form submission:", error);
        return NextResponse.json(
          { error: "Error handling form submission" },
          { status: 500 }
        );
      }
    } else {
      console.error("Buggbyte Error sending email:", error);
      return NextResponse.json(
        { error: "Error sending email" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Buggbyte Error handling form submission:", error);
    return NextResponse.json(
      { error: "Error handling form submission" },
      { status: 500 }
    );
  }
}
