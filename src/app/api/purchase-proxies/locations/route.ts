import { sleep } from '@/lib/utils'
import { proxiesLocationsData } from '@/mocks/proxies'

export async function GET() {
  const locations = proxiesLocationsData
  return Response.json(locations)
}
