"use server"

import { auth } from "@clerk/nextjs/server";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";

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

export async function getUserMeetings(userId: string) {
    try {
        const meetings = await prisma.meeting.findMany({
            where: { clientId: userId },
            include:
                { chef: { select: { name: true, profileImage: true, speciality: true } } }
            ,
            orderBy: [{ date: "asc" }, { time: "asc" }]
        })

        return meetings;
    } catch (error) {
        throw new Error("Error getting user meetings");
    }
}

export async function getMeetingStats(userId: string) {
    try {

        const [totalMeetings, completedMeetings] = await Promise.all([
            prisma.meeting.count({ where: { clientId: userId } }),
            prisma.meeting.count({ where: { clientId: userId, status: 'COMPLETED' } })
        ])

        return { totalMeetings, completedMeetings };
    } catch (error) {
        throw new Error("Error getting meeting stats");
    }
}

export async function getBookedMeetingTime(chefId: string, date: string) {
    try {
        const bookedMeetings = await prisma.meeting.findMany({
            where: {
                chefId,
                date: new Date(date),
                status: {
                    in: ["CONFIRMED", "COMPLETED"]
                }
            },
            select: { time: true }
        })

        return bookedMeetings.map((meeting) => meeting.time)

    } catch (error: Error | any) {
        throw new Error("Error while getting booked meeting time", error)
    }
}


export async function getMeetingByChefId(chefId: string) {
    try {
        const meetings = await prisma.meeting.findMany({
            where: { chefId: chefId }
        })
        return meetings;

    } catch (error) {
        console.error("Error while getting chef by id:", error)
        throw error;
    }
}

type statusUpdationInput = {
    meetingId: string,
    statusToUpdateTo: string
}

export async function changeMeetingStatus(input: statusUpdationInput) {
    try {
        const updatedMeeting = await prisma.meeting.update({
            where: { id: input.meetingId },
            data: {
                status: input.statusToUpdateTo
            }
        })

        return updatedMeeting;
    } catch (error) {
        console.log("Error changing state:", error)
        throw error
    }
}