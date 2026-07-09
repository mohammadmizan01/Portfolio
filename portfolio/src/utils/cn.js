import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn = Class Names
 * Combines class names and intelligently merges Tailwind CSS classes.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}