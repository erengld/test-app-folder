import { sleep } from '@/lib/utils'
import { proxiesData, proxiesPricesData } from '@/mocks/proxies'

export async function GET(
  request: Request,
  { params }: { params: { location: string } },
) {

  const { location } = params
  const { items } = proxiesData[location as keyof typeof proxiesData]
  const prices = proxiesPricesData

  return Response.json({ items, prices })
}
