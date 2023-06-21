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
    <div className='container flex mt-[46px] w-[1320px] justify-between m-[auto]'>
            {items.map((item: Item) => (
            <div key={item.id} className="border border-[--color-blue] justify-center items-center">
                <Image width={32} height={41} src={item.icon} alt=''/ >
                 <div className="">
                     <h3>{item.name}</h3>
                     <p>{item.description}</p>
                 </div>
            </div>
            ))}
    </div>
  )
}

export default page