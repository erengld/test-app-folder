
import { ShopItems } from '@/components/shop'
import { Suspense } from 'react'

export default function ShopTable({
  selectedLocation,
}: {
  selectedLocation: string
}) {

  console.log('🚀 ~ selectedLocation:', selectedLocation)

  return (
    <>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Operator(s)
      </h3>
      <div className="rounded bg-white max-w-screen-md border">
        <div className="bg-light-5 grid grid-cols-[1fr_100px] gap-x-10 border-b px-2 py-2.5 text-sm font-medium tracking-tight lg:gap-x-24 lg:px-4 ">
          <span>Operator</span>
          <span>In Stock</span>
        </div>
        <Suspense fallback={<div className='p-3'>Loading....</div>} key={selectedLocation}>
          <ShopItems selectedLocation={selectedLocation} />
        </Suspense>
      </div>
    </>
  )
}
