import React from 'react'

function Lists({ img, text }) {
    return (
        <div className='w-[503px] h-[60px] m-auto bg-transparent border-1 border-[#F1F1F3] rounded-[8px] flex mt-[20px] items-center pt-[14px]'>
            <img className='ml-[14px]' src={img} alt="" />
            <p className='text-[18px] font-regular ml-[12px]'>{text}</p>
        </div>
    )
}

export default Lists
