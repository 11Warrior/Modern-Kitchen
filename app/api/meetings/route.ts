"use server"
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

// export const runtime = "nodejs"

export async function GET() {
    return new Response("/api/meetings working fine");
}

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        // console.log(userId);
        if (!userId) {
            return new Response("Unauthorized", { status: 401 });
        }
        const user = await prisma.client.findUnique({ where: { clerkId: userId } })

        // console.log(user);

        if (!user) return new Response("No User found to add meetings", { status: 404 })

        const body = await req.json();
        // console.log(body)

        const { chefId, date, notes, time, duration } = body;

        const meeting = await prisma.meeting.create({
            data: {
                clientId: user.id,
                chefId: chefId,
                date: new Date(date),
                notes: notes,
                duration,
                time: time
            },
            include: {
                client: { select: { clerkId: true, FirstName: true, LastName: true, email: true } },
                chef: { select: { id: true, name: true, email: true, profileImage: true } }
            }
        })


        return Response.json(
            {
                sucess: true,
                data: meeting,
                message: "Sucessfully added meeting"
            },
            { status: 200 }
        );
    } catch (error: Error | any) {
        console.error(error)
        throw new Error("Error while addding meeting in api/meetings");
    }
}