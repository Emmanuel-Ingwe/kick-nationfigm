import React from 'react'
import Image from 'next/image'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex'>
        <div className="">
            <h2>THE ULTIMATE MYSTERY FOOTBALL SHIRT EXPERIENCE.</h2>
            <p className="">Order a one-time box for the footy fanatic in your life or join the ever-growing club on a mystery football shirt subscription!</p>
        </div>
        <div className="">
             <Image width={32} height={41} src="/tshit.png" alt=''/ >
        </div>
    </div>
  )
}

export default page