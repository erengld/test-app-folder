import { ShopItem } from '@/components/shop'
import { getItemsByLocation } from '@/lib/fetchers'
import { sleep } from '@/lib/utils'

export default async function ShopItems({
  selectedLocation,
}: {
  selectedLocation: string
}) {
  const { items } = (await getItemsByLocation(selectedLocation)) as {
    items: any[]
  }

  console.log('🚀 ~ const{items}= ~ items:', items)



  return items.map((proxy: any) => (
    <ShopItem key={proxy.id} proxy={proxy} />
  ))
}
