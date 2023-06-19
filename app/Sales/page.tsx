import React from 'react'
import Image from 'next/image'

type Props = {}

type item = {
    id: number
    icon: string
    name: string
    description: string
}

const items: item[] = [
    {id:1, icon: "/tshit.png", name: "Premium Fodboldtrøje", description: "Shop i blandt vores udvalg af Premium fodboldtrøjer, her kan du finde yderst sjældne og eftertragtede fodboldtrøjer"},
    {id:2, icon: "/boxes.png", name: "Mystery Boxes", description: "Shop i blandt vores udvalg af Premium fodboldtrøjer, her kan du finde yderst sjældne og eftertragtede fodboldtrøjer"},
    {id:3, icon: "/portrait.png", name: "Plakatar", description: "Shop i blandt vores udvalg af Premium fodboldtrøjer, her kan du finde yderst sjældne og eftertragtede fodboldtrøjer"},
]

const page = (props: Props) => {
  return (
    <div>
        <div className="">
            {items.map((item: item) => (
                <Image key={item.id} width={32} height={41} src={item.icon} alt=''/ >
            ))}
        </div>
    </div>
  )
}

export default page