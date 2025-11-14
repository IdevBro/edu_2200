import React from 'react'
import Vector from "../assets/Vector.png"

function Box({ number, title, text }) {
    return (
        <div className="bg-white w-[519px] h-[437px] rounded-[12px] p-[50px]">
            <p className="text-[80px] font-bold ml-[300px]">{number}</p>
            <p className="text-[24px] font-semibold mt-[50px]">
                {title}
            </p>
            <p className="text-[18px] mt-[14px] w-[420px]">
                {text}
            </p>
            <img
                src={Vector}
                alt=""
                className="mt-[70px] ml-[415px] cursor-pointer"
            />
        </div>
    )
}

export default Box
