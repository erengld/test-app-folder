

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetcher<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  try {
    const res = await fetch(url, {
      ...options,
    })

    if (!res.ok) {
      throw new Error(res.statusText)
    }
    const data = (await res.json()) as Promise<T>
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Something went wrong. Please try again later.')
    }
  }
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
