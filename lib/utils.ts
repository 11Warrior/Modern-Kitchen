import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateProfile(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  return `${base}/boy?username=${username}`;
}

export const availableMeetingDates = () => {
  const today = new Date();

  return Array.from({ length: 5 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    return {
      bookingDate: date.toISOString().split("T")[0],
      label: date.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short",
      }),
    };
  });
}

export const availableMeetingTimes = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30"
]



export const MeetingTypes = 
[
  {
    id: "home-cooking",
    title: "Home Cooking Session",
    price: 80,
    duration: 90, // minutes
    description:
      "A professional chef visits your home and prepares a complete meal based on your preferences.",
  },
  {
    id: "special-cuisine",
    title: "Special Cuisine Session",
    price: 120,
    duration: 120, // minutes
    description:
      "Includes cuisines such as Italian, Chinese, Continental, or regional specialties with full preparation and cooking.",
  },
  {
    id: "event-family",
    title: "Event / Family Gathering Cooking",
    price: 180,
    duration: 180, // minutes
    description:
      "Designed for small parties or special occasions, including menu planning and execution.",
  },
];


