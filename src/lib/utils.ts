import {clsx, type ClassValue} from 'clsx';

/**
 * merge class name utility function
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

