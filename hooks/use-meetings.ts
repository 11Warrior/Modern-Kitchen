"use client"
import { getMeetings } from "@/lib/actions/meetings";
import { useQuery } from "@tanstack/react-query";


export function useGetMeetings() {
    const result = useQuery({
        queryKey: ["getMeetings"],
        queryFn: getMeetings
    })
    return result;
}