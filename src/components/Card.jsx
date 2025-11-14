import React from 'react'

function Card({ image, number, degree, person, work, text }) {
    return (
        <div className="w-[783.5px] h-[807px] bg-white rounded-[12px] p-[50px]">
            <img src={image} alt="" />
            <div className="flex mt-[40px] justify-between">
                <p className="text-[18px] font-regular ml-[16px] text-[#4C4C4D]">
                    {number}
                </p>
                <p className="text-[18px] font-regular mr-[335px] text-[#4C4C4D]">
                    {degree}
                </p>
                <p className="text-[20px] font-medium">{person}</p>
            </div>
            <p className="text-[24px] font-semibold mt-[30px]">
                {work}
            </p>
            <p className="text-[18px] font-regular text-[#4C4C4D] mt-[14px] w-[630px]">
                {text}
            </p>
            <button className="w-[683px] h-[63px] bg-[#F7F7F8] rounded-[8px] text-[18px] font-medium text-center mt-[30px] cursor-pointer">
                Get it Now
            </button>
        </div>
    )
}

export default Card
