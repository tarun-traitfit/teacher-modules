import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export function merge(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
