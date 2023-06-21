import React from 'react'
import Image from 'next/image'

type Props = {}

type Item = {
    id: number
    icon: string
    name: string
    description: string
}

const items: Item[] = [
    {id:1, icon: "/tshit.png", name: "Premium Fodboldtrøje", description: "Shop i blandt vores udvalg af Premium fodboldtrøjer, her kan du finde yderst sjældne og eftertragtede fodboldtrøjer"},
    {id:2, icon: "/boxes.png", name: "Mystery Boxes", description: "Shop i blandt vores udvalg af Premium fodboldtrøjer, her kan du finde yderst sjældne og eftertragtede fodboldtrøjer"},
    {id:3, icon: "/portrait.png", name: "Plakatar", description: "Shop i blandt vores udvalg af Premium fodboldtrøjer, her kan du finde yderst sjældne og eftertragtede fodboldtrøjer"},
]

const page = (props: Props) => {
  return (
    <div className='container flex mt-[46px] w-[1320px] justify-around m-[auto] mb-[46px]'>
            {items.map((item: Item) => (
            <div key={item.id} className="flex flex-col border border-[--color-blue] items-center text-cente w-[418px] h-[316px] mr-[28]">
                <div className="">
                     <Image width={129} height={150} src={item.icon} alt=''/ >
                </div>
                 <div className="">
                     <h3 className='font-semibold text-[24px]'>{item.name}</h3>
                     <p className='font-normal text-[16px]'>{item.description}</p>
                 </div>
            </div>
            ))}
    </div>
  )
}

export default page