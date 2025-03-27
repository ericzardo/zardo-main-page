import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateMonthsBetweenDates(from: string, to: string): number {
  const [fromMonth] = from.split('/')
  const [toMonth] = to.split('/')
  
  return Number(toMonth) - Number(fromMonth) + 1
}

export function formatDate(date: string): string {
  return date
} 