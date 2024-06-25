
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getLocations } from '@/lib/fetchers'
import { sleep } from '@/lib/utils'
import Link from 'next/link'

export default async function ShopLocations({
  selectedLocation,
}: {
  selectedLocation: string
}) {
  const locations = (await getLocations()) as string[]

  return (
    <>
      <h3 className="text-lg font-semibold mb-2">Choose a location</h3>
      <Tabs defaultValue={selectedLocation}>
        <TabsList>
          {locations.map((location: string) => (
            <TabsTrigger
              key={location.toLowerCase()}
              value={location.toLowerCase()}
              className="capitalize"
              asChild
            >
              <Link
                href={`?${new URLSearchParams({ location: location.toLowerCase() })}`}
                scroll={false}
              >
                {location}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </>
  )
}
