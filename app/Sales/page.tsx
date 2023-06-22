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
    {id:2, icon: "/boxes.png", name: "Mystery Boxes", description: "Vælg din mystery box, størrelsen og udeluk op til 10 hold/klubber/spillere du ikke ønsker. Vælg f.eks. mellem klubber, premium, vintage, of flere…"},
    {id:3, icon: "/portrait.png", name: "Plakatar", description: "Vores plakater er designet, tegnet og produceret af os selv. De har et helt unikt touch og der findes noget for en hver smag"},
]

const page = (props: Props) => {
  return (
    <div className='container flex mt-[46px] w-[1320px] justify-around m-[auto] mb-[129px] sm:flex-wrap'>
            {items.map((item: Item) => (
            <div key={item.id} className="flex flex-col border border-[--color-blue] items-center text-cente w-[418px] h-[316px] mr-[28]">
                <div className="">
                     <Image width={129} height={150} src={item.icon} alt=''/ >
                </div>
                 <div className="pl-[31px] pr-[30px]">
                     <h3 className='font-semibold text-[24px] mb-[18px]'>{item.name}</h3>
                     <p className='font-normal text-[16px]'>{item.description}</p>
                 </div>
            </div>
            ))}
    </div>
  )
}

export default page