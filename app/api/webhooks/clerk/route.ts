// 
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { Webhook } from "svix";


export async function GET() {
    return new Response("Web Hook is Working perfectly", { status: 200 });
}

export async function POST(req: Request) {
  const body = await req.text();
  const header = await headers();

  const svix_id = header.get("svix-id");
  const svix_timestamp = header.get("svix-timestamp");
  const svix_signature = header.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.log("Missing headers");
    return new Response("Missing svix headers", { status: 400 });
  }

  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

  let event : any;

  try {
    event = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error verifying:", err);
    return new Response("Webhook verification failed", { status: 400 });
  }

  console.log("Event verified:", event.type);

  const { id, email_addresses, first_name, last_name, phone_numbers } = event.data;

  const email = email_addresses?.[0]?.email_address ?? null;

  // SAVE IN DB
  if (event.type === "user.created") {
    await prisma.client.create({
      data: {
        clerkId: id,
        email,
        FirstName: first_name,
        LastName: last_name,
        phone: phone_numbers?.[0]?.phone_number,
      },
    });
  }

  if (event.type === "user.deleted") {
    await prisma.client.delete({ where: { clerkId: id, email  } });
  }

  return new Response("OK", { status: 200 }); // ❗ MUST RETURN 200
}