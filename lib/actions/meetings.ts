"use server"

import { prisma } from "../prisma";

export async function getMeetings() {
    try {
        const meetings = await prisma.meeting.findMany({
            include: {
                client: {
                    select: { FirstName: true, LastName: true, email: true, }
                },
                chef: { select: { name: true, email: true, profileImage: true } }
            },
            orderBy: { createdAt: "desc" } 
        })

        return meetings;
    } catch (error : any) {
        throw new Error("Failed to get meetings", error);
    }
    //to be added in admin page.
}