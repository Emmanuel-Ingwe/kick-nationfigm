import React from 'react'
import Image from 'next/image'

type Props = {
}

const page = (props: Props) => {
  return (
    <div className='flex w-[1340px] h-[119px] justify-between bg-[--navColor] ml-[100px] mr-[100px] mt-[9px] items-center'>
        <div className="pl-[13px]">
            <Image width={391} height={44} src="/logo.png" alt=''/>
        </div>
        {/* <Image src="logo.png" alt=''/> */}
        <div className="flex">
            <ul className='flex uppercase space-x-14 text-[16px] font-semibold'>
                <li className='text-[--color-blue]'>Forside</li>
                <li>Services/Prise</li>
                <li>portfolio</li>
                <li>galeri</li>
                <li>Om os</li>
                <li>Kontakt</li>
            </ul>
        </div>
        <div className="flex pr-[22px]">
            <div className="pr-[23px]">
                <Image width={32} height={41} src="/Vector-user.png" alt=''/ >
            </div>
        <Image width={32} height={41} src="/Vector-cart.png" alt=''/>
        </div>
    </div>
  )
}

export default page