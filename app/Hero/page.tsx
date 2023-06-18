import React from 'react'
import Image from 'next/image'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex'>
        <div className="ml-[173px] mt-[52px]">
            <h1 className='text-[40px] font-extrabold'>THE ULTIMATE MYSTERY FOOTBALL SHIRT EXPERIENCE.</h1>
            <p className="text-[36] font-normal leading-5">Order a one-time box for the footy fanatic in your life or join the ever-growing club on a mystery football shirt subscription!</p>
        </div>
        <div className="mr-[42px]">
             <Image width={672} height={378} src="/home-hero.png" alt=''/ >
        </div>
    </div>
  )
}

export default page