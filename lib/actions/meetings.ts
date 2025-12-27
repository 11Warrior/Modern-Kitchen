"use server"

import { auth } from "@clerk/nextjs/server";
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
    } catch (error: any) {
        throw new Error("Failed to get meetings", error);
    }
    //to be added in admin page.
}

export async function getUserMeetings() {
    try {
        const { userId } = await auth();

        const meetings = await prisma.meeting.findMany({
            where: { clientId: userId },
            include:
                { chef: true, client: true }
            ,

            orderBy: [{ date: "asc" }, { time: "asc" }]
        })

        return meetings;
    } catch (error) {
        throw new Error("Error getting user meetings");
    }
}

export async function getMeetingStats() {
    try {
        const { userId } = await auth();

        const [totalMeetings, completedMeetings] = await Promise.all([
            prisma.meeting.count({ where: { clientId: userId } }),
            prisma.meeting.count({ where: { clientId: userId, status: 'COMPLETED' } })
        ])

        return { totalMeetings, completedMeetings };
    } catch (error) {
        throw new Error("Error getting meeting stats");
    }
}