'use client'



export default function ShopItem({ proxy }: { proxy: any }) {


  return (
    <div className="border-b last:border-b-0">
      <div
        className='text-dark grid grid-cols-[1fr_100px] items-center gap-x-10 gap-y-10 px-2 py-4 text-sm tracking-tight last:border-b-0 lg:gap-x-24 lg:px-4'
      >


        <div>
        {proxy.name}
        </div>

        <div>{proxy.stock}</div>
      </div>
    </div>
  )
}
