"use client"

import { getAvailableChefs } from "@/lib/actions/chefs";
import { changeMeetingStatus, getBookedMeetingTime, getMeetingByChefId, getMeetings, getMeetingStats, getUserMeetings } from "@/lib/actions/meetings";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetMeetings() {
  const result = useQuery({
    queryKey: ["getMeetings"],
    queryFn: getMeetings,

  })
  return result;
}

export function useGetAvailableChefs() {

  const result = useQuery({
    queryKey: ["availableChefs"],
    queryFn: getAvailableChefs,
    refetchOnMount: "always"
  })

  return result;
}

export function useGetMeetingStats(id: string) {
  const result = useQuery({
    queryKey: ["meetingStats", id],
    queryFn: () => getMeetingStats(id),
    enabled: !!id
  })

  return result;
}

export function useGetUserMeeting(id: string) {
  const result = useQuery({
    queryKey: ["userMeetings", id],
    queryFn: () => getUserMeetings(id),
    // refetchOnReconnect: false
    refetchOnMount: "always",
    staleTime: 30_000,
    // placeholderData: keepPreviousData,
    enabled: !!id

  })

  return result;
}

export function useGetMeetingByChefId(chefId: string) {
  const result = useQuery({
    queryKey: ["getMeetingById"],
    queryFn: () => getMeetingByChefId(chefId)
  })

  return result;
}

export function useGetBookedMeetingTime(chefId: string, date: string) {
  const result = useQuery({
    queryKey: ["bookedMeetingTime"],
    queryFn: () => getBookedMeetingTime(chefId, date),
    enabled: !!chefId && !!date
  })

  return result;
}

export type MeetingInput = {
  chefId: string,
  date: string,
  notes?: string,
  duration: number,
  time: string,
}

export function useAddMeeting() {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationKey: ['addMeeting'],
    mutationFn: async (input: MeetingInput) => {
      try {
        const res = await fetch('/api/meetings',
          {
            method: 'POST',
            body: JSON.stringify(input),
            headers: { 'content-type': 'application/json' }
          }
        )

        const addedMeeting = await res.json();
        return addedMeeting;

      } catch (error: Error | any) {
        throw new Error("Error calling api/meetings for adding meeting", error?.messsage);
      }
    },
    onSuccess: () => {
      console.log("Sucessfully created meeting");
      queryClient.invalidateQueries({ queryKey: ["availableChefs"] })
      queryClient.invalidateQueries({ queryKey: ["bookedMeetingTime"] })
      queryClient.invalidateQueries({ queryKey: ["userMeetings"] })
      queryClient.invalidateQueries({ queryKey: ["meetingStats"] })
    },
    onError: (error) => {
      console.log("Error while calling meeting backend api", error?.message);
    }
  })

  return result;
}

export function useChangeStatus() {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: changeMeetingStatus,
    onSuccess: () => {
      console.log("Status Changed")
      queryClient.invalidateQueries({ queryKey: ["userMeetings"] })
      // queryClient.refetchQueries({ queryKey: ["userMeetings"] })
    }
  })
  return result;
}