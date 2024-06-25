
import { fetcher, sleep } from '@/lib/utils'

export async function getItemsByLocation(location?: any) {
  const url = `${`http://localhost:3000/api/purchase-proxies`}/${location}`
  try {
    const data = await fetcher(url)

  await sleep(3000) // Simulate network latency
    return data
  } catch (error) {
    console.error('🚀 ~ error:', error)
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

export async function getLocations() {
  const url = `${`http://localhost:3000/api/purchase-proxies/locations`}`
  try {
    const data = await fetcher(url)
    await sleep(1000) // Simulate network latency
    return data
  } catch (error) {
    console.error('🚀 ~ error:', error)
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

