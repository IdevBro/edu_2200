import React from 'react'

function Coment({ comment, img, name }) {
    return (
        <div className="w-[783.5px] h-[304px] bg-white p-[50px] relative">
            <p className="w-[683px] text-[#4C4C4D] text-[18px] font-regular">
                {comment}
            </p>
            <div className="w-[783.5px] h-[123px] bg-[#FCFCFD] flex justify-between left-[0px] absolute bottom-[0px]">
                <img
                    src={img}
                    alt=""
                    className="mt-[31.5px] ml-[50px] mb-[31.5px]"
                />
                <p className="text-[#333333] text-[18px] font-semibold mr-[350px] mt-[48px]">
                    {name}
                </p>
                <button className="w-[182px] h-[63px] bg-[#F7F7F8] mt-[30px] mr-[50px] rounded-[8px] cursor-pointer">
                    Read Full Story
                </button>
            </div>
        </div>
    )
}

export default Coment
