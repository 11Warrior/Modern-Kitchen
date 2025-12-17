"use client"
import { addChefs, getChefs, updateChef } from "@/lib/actions/chefs";
import { Gender } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetChefs() {
    const chefs = useQuery({
        queryKey: ["getChefs"],
        queryFn: getChefs
    })
    return chefs;
}

export function useAddChefs() {
    const queryClient = useQueryClient();

    const chef = useMutation({
        mutationFn: addChefs,
        onSuccess: () => {
            console.log("Chef created");
            queryClient.invalidateQueries({ queryKey: ["getChefs"] });
        },
        onError: () => console.log("Error creating chef")
    })

    return chef;
}


export function useUpdateChefs() {
    const queryClient = useQueryClient();

    const updatedChef = useMutation({
        mutationFn: updateChef,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getChefs'] })
            console.log("Sucessfully updated chef in the DB");
        },
        onError: () => (console.log("Error updating chef"))
    })

    return updatedChef;
}