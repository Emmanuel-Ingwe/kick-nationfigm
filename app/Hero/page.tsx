import React from 'react'
import Image from 'next/image'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex'>
        <div className="ml-[173px] mt-[52px]">
            <div className="flex flex-wrap">
                <h1 className='text-[37px] font-extrabold w-[672px]'>THE ULTIMATE MYSTERY FOOTBALL SHIRT EXPERIENCE.</h1>
            </div>
            <div className="flex flex-wrap mt-3">
                <p className="text-[20px] font-normal leading-7 w-1/2">Order a one-time box for the footy fanatic in your life or join the ever-growing club on a mystery football shirt subscription!</p>
            </div>
        </div>
        <div className="mr-[76px]">
             <Image width={672} height={378} src="/home-hero.png" alt=''/ >
        </div>
    </div>
  )
}

export default page