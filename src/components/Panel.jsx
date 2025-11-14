import React from 'react'

function Panel({ job, more, img1, img2, weeks, level, name, viewBtn }) {
    return (
        <div className='w-[1596px] bg-white ml-[162px] mt-[50px] p-[50px] rounded-[12px]'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-[24px] font-semibold'>{job}</p>
                    <p className='text-[18px] font-regular mt-[10px] w-[1180px]'>{more}</p>
                </div>
                <button className='w-[160px] h-[63px] background-[#FCFCFD] border-1 border-[#F1F1F3] mt-[18px] ml-[80px] cursor-pointer'>{viewBtn}</button>
            </div>
            <div className='mt-[30px]'>
                <img src={img1} alt="" />
            </div>
            <div className='flex mt-[39px] items-center justify-between cursor-pointer'>
                <div className='gap-[40px] flex'>
                    <p className='text-[18px] font-regular cursor-pointer'>{weeks}</p>
                    <p className='text-[18px] font-regular cursor-pointer'>{level}</p>
                </div>
                <p className='text-[20px] font-medium'>{name}</p>
            </div>
            <img className='mt-[50px]' src={img2} alt="" />
        </div>
    )
}

export default Panel
