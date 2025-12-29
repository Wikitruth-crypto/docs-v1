import {clsx, type ClassValue} from 'clsx';

/**
 * 合并类名的工具函数
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

