"use client"
import { getMeetings, getMeetingStats, getUserMeetings } from "@/lib/actions/meetings";
import { useQuery } from "@tanstack/react-query";


export function useGetMeetings() {
    const result = useQuery({
        queryKey: ["getMeetings"],
        queryFn: getMeetings,
    })
    return result;
}

export function useGetMeetingStats() {
  const result = useQuery({
    queryKey: ["meetingStats"],
    queryFn: getMeetingStats, 
  })

  return result;
}

export function useGetUserMeeting() {
  const result = useQuery({
    queryKey: ["userMeetings"],
    queryFn: getUserMeetings, 
  })

  return result;
}