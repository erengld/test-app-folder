
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getLocations } from '@/lib/fetchers'
import Link from 'next/link'

export default async function ShopLocations({
  // locations,
  location,
}: {
  // locations: Location[]
  location: string
}) {
  const locations = (await getLocations()) as string[]

  return (
    <>
      <h3 className="text-lg font-semibold mb-2">Choose a location</h3>
      <Tabs defaultValue={location}>
        <TabsList>
          {locations.map((location: string) => (
            <TabsTrigger
              key={location}
              value={location}
              className="capitalize"
              asChild
            >
              <Link
                href={{
                  pathname: '/purchase',
                  query: { location: location as string },
                }}
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
