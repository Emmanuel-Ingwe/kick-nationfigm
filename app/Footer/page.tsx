import React from 'react'
import Image from 'next/image'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='container mt-[46px] flex flex-col items-center mb-[9px]'>
      <Image className='cursor-wait' width={1265} height={485} src="/footer2.png" alt=''/ >
    </div>
  )
}

export default page