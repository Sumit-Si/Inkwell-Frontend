import type { UserData } from "@/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getUsername = (author: UserData): string => {
  const {fullName, username} = author;

  return fullName ||  username;
}

export const getReadingTime = (description: string): number => {
  const AVG_READING_WPM = 150;

  return Math.ceil(description.split(' ').length / AVG_READING_WPM);
}
