import React from 'react'
import Clock from "../assets/Clock.png"
function CourseOpenCardRow({ course, id, time }) {
    return (
        <div className='group w-[683px] h-[111px] mt-[20px] flex justify-between items-center rounded-[8px] border border-[#F1F1F3] p-[30px] hover:border-[#FFD599] hover:shadow-[0_0_0_4px_rgba(255,244,229,1)] cursor-pointer'>
            <div className=''>
                <p className='text-[20px] font-medium'>{course}</p>
                <p className='text-[18px] font-regular mt-[6px] text-[#59595A]'>{id}</p>
            </div>
            <button className='group-hover:bg-[rgba(255,234,204,1)] transition-colors h-[48px] items-center p-[15px] 14px] flex gap-[6px] rounded-[6px] bg-[#F7F7F8] cursor-pointer'>
                <img src={Clock} alt="" />{time}
            </button>
        </div>
    )
}

export default CourseOpenCardRow
