// utils/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// A utility function to merge and conditionally apply class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
