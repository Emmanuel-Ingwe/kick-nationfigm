import React from 'react'
import Image from 'next/image'

type Props = {
}

const page = (props: Props) => {
  return (
    <div className='container sw-screen flex justify-between flex-col'>
        <div className="flex justify-end">
        <input type="text" placeholder='Search...' className='w-[395px] h-[47.43px] border border-[--color-blue] rounded-3xl pl-6 placeholder-black outline-none mt-8 mb-4 mr-[100px]' />
        {/* <img className='relate h-[20px]' src="Vector-search.png" alt="" /> */}
        </div>
        <div className='ml-[100px] font-extrabold text-[24px]'>
            <h2 className=''><span className='text-[--color-blue]'>Fri Fragt</span> på ordre over 600 DKK <span className='text-[--color-blue]'>Dansk Lager</span> hurtig levering <span className='text-[--color-blue]'> Lager Indregistrering</span> autentiske trøjer </h2>
        </div>
    </div>
  )
}

export default page