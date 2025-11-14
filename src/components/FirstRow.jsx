import React from 'react'

function FirstRow({ title, text }) {
    return (
        <div className='w-[1860px] h-[194px] pl-[132px] pr-[132px] mt-[110px] mb-[100px] ml-[30px] flex justify-between items-center border-b-1 border-[#E4E4E7]'>
            <p className='text-[48px] font-semibold'>{title}</p>
            <p className='w-[710px] text-[18px] font-regular text-[#59595A]'>{text}</p>
        </div>
    )
}

export default FirstRow
