import React from 'react'
import Image from 'next/image'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='container mt-[46px] flex flex-col items-center mb-[89px]'>
      <h1 className="text-center font-extrabold text-[40px]">FEATURES PRODUCTS/ SHOP</h1>
      <Image className='ml-[36px] cursor-progress' width={1265} height={485} src="/footer.png" alt=''/ >
    </div>
  )
}

export default page