import React from 'react'
import Lists from './Lists'
import Yes from "../assets/Yes.png"
import No from "../assets/No.png"

function Free() {
    return (
        <div className='w-[703px] h-[1046px] bg-[#FCFCFD] mt-[80px] border-1 border-[#F1F1F3]'>
            <button className='w-[643px] h-[61px] bg-[#FFF9F0] text-black text-[22px] font-medium text-center mt-[50px] ml-[30px]'>Free Plan</button>
            <p className='text-center'><span className='text-[80px] font-semibold'>$79</span> <span className='text-20px font-medium'>/month</span></p>
            <div className='w-[643px] h-[747px] bg-white m-auto border-1 border-[#F1F1F3]'>
                <p className='text-[20px] font-medium text-center mt-[40px]'>Available Features</p>
                <Lists img={Yes}
                    text="Unlimited access to all courses."
                />
                <Lists img={Yes}
                    text="Unlimited course materials and resources."
                />
                <Lists img={Yes}
                    text="Priority support from instructors."
                />
                <Lists img={Yes}
                    text="Course completion certificates."
                />
                <Lists img={Yes}
                    text="Ad-free experience."
                />
                <Lists img={Yes}
                    text="Access to exclusive Pro Plan community forums."
                />
                <Lists img={Yes}
                    text="Early access to new courses and updates."
                />
                <button className='w-[643.5px] h-[67px] bg-[#FF9500] text-white text-[18px] text-center font-semibold cursor-pointer flex justify-center items-center m-auto mt-[40px]'>Get Started</button>
            </div>
        </div>
    )
}

export default Free
