import MeetingEmailFormat from "@/components/Meetings/Emails/MeetingEmailFormat";
import { resend } from "@/lib/resend";


export async function POST(req: Request) {
    try {
        const { chefName, bookingType, date, time, duration, location, clientEmail, service } = await req.json();
       
        const { data: email, error } = await resend.emails.send(
            {
                to: clientEmail,
                from: "ModernKitchen <no-reply@resend.dev>",
                subject: "Appointment Confirmation - Modern Kitchen",
                react: MeetingEmailFormat({
                    chefName,
                    bookingType,
                    date,
                    time,
                    duration,
                    location,
                    clientEmail,
                    service
                })
            }
        )

        if (error) {
            console.log("Error sending confirmation email: ", error)
        }


        return Response.json(
            { data: email },
            { status: 200 },
        )

    } catch (error) {
        console.error("Error sending email", error)
        throw error;
    }
}