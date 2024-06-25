import { ShopLocations, ShopTable } from "@/components/shop";
import { getItemsByLocation, getLocations } from "@/lib/fetchers";
import { sleep } from "@/lib/utils";
import { Suspense } from "react";


export default async function Home(  {searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const location =
    (searchParams.location as string) ??
    'country-1'





  return (
    <main className="flex min-h-screen flex-col  p-24">
<>
      <div className="mb-6">
        <Suspense fallback={<div>Loading locations...</div>}>
          <ShopLocations selectedLocation={location} />
        </Suspense>
      </div>
      <ShopTable selectedLocation={location} />
    </>
    </main>
  );
}
