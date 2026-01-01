//for getting chefs and adding chefs functionalities
"use server"

import { Gender } from "@prisma/client";
import { prisma } from "../prisma";
import { generateProfile } from "../utils";
import { revalidatePath } from "next/cache";
import { MeetingTypeWithCount } from "@/components/Admin/ChefManagementPanel";

type chefInputType = {
    name: string,
    email: string,
    phone: string,
    gender: Gender,
    speciality: string,
    isActive: boolean,
}

export async function getChefs(): Promise<MeetingTypeWithCount[]> {
    try {
        const chefs = await prisma.chef.findMany({
            include: {
                _count: { select: { meetings: true } }
            },
            orderBy: { createdAt: "desc" }
        })

        return chefs.map((chef) => ({
            ...chef,
            meetingCount: chef._count.meetings
        }))

    } catch (error: any) {
        throw new Error("Failed to get Chefs", error);
    }
}

export async function getChefById(chefId: string) {
    try {
        const chef = await prisma.chef.findUnique({
            where: {id: chefId}
        })
        return chef;
    } catch (error : Error | any) {
        throw new Error("Error getting chef by id", error)
    }
}

export async function getAvailableChefs(){
    try {
        const chefs = await prisma.chef.findMany({
            where: {isActive: true},
            include: {
                _count: { select: {meetings: true}}
            },
            orderBy: {createdAt: "desc"}
        })

        return chefs.map((chef) => ({
            ...chef,
            meetingCount: chef._count.meetings
        }))
    } catch (error:Error | any) {
        throw new Error("Failed to get available chefs\n", error)
    }
}

export async function addChefs(input: chefInputType) {
    try {
        if (!input) return Error("Cannot create doctor from empty input");
        const addedChef = await prisma.chef.create({
            data: {
                ...input,
                profileImage: generateProfile(input.name, input.gender),

            }
        })
        //new chef making process
        revalidatePath('/admin/dashboard');
        return addedChef;
    } catch (error: any) {
        console.log("Prisma error ", error?.message);
        throw error;
    }
}

export async function updateChef(input: chefInputType) {
    try {
        if (!input) return Error("Cannot update Chef");
        const { email, ...updatedData } = input;
        const updatedChef = await prisma.chef.update({
            where: { email },
            data: {
                ...updatedData,
                profileImage: generateProfile(input.name, input.gender)
            }
        }).catch(() => (console.log("Cannot find the chef to for updation.")))

        revalidatePath('/admin/dashboard');
        return updatedChef;
    } catch (error: any) {
        console.log("Error in updating chef", error);
        throw error;
    }
}

