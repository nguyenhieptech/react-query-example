import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** @see https://github.com/shadcn/ui/blob/main/apps/www/lib/utils.ts#L1-L6 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
