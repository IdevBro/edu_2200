import React from 'react'
import Logo from "../assets/Logo.svg"
import Email from "../assets/Email.png"
import Phone from "../assets/Phone.png"
import Address from "../assets/Address.png"
import Facebook from "../assets/Facebook.png"
import Twitter from "../assets/Twitter.png"
import In from "../assets/In.png"

function Footer() {
    return (
        <footer className='w-[100%] h-[472px] bg-white mt-[140px]'>
            <div className='flex w-[100%]'>
                <div className='flex-column ml-[162px] w-[392px]'>
                    <img className='mt-[100px] mb-[40px]' src={Logo} alt="" />
                    <div className='flex items-center mb-[20px]'>
                        <img src={Email} alt="" />
                        <p className='text-[18px] font-regular ml-6px'>hello@skillbridge.com</p>
                    </div>
                    <div className='flex items-center mb-[20px]'>
                        <img src={Phone} alt="" />
                        <p className='text-[18px] font-regular ml-6px'>+91 91813 23 2309</p>
                    </div>
                    <div className='flex items-center mb-[20px]'>
                        <img src={Address} alt="" />
                        <p className='text-[18px] font-regular ml-6px'>Somewhere in the World</p>
                    </div>
                </div>
                <div className='flex-column ml-[397px] mt-[100px] w-[249px]'>
                    <p className='text-[20px] font-semibold text-[#262626] mb-[14px]'>Home</p>
                    <p className='text-[18px] font-regular text-[#59595A] mb-[8px]'>Benefits</p>
                    <p className='text-[18px] font-regular text-[#59595A] mb-[8px]'>Our Courses</p>
                    <p className='text-[18px] font-regular text-[#59595A] mb-[8px]'>Our Testimonials</p>
                    <p className='text-[18px] font-regular text-[#59595A] mb-[8px]'>Our FAQ</p>
                </div>
                <div className='flex-column ml-[30px] mt-[100px] w-[249px]'>
                    <p className='text-[20px] font-semibold text-[#262626] mb-[14px]'>About</p>
                    <p className='text-[18px] font-regular text-[#59595A] mb-[8px]'>Company</p>
                    <p className='text-[18px] font-regular text-[#59595A] mb-[8px]'>Achievements</p>
                    <p className='text-[18px] font-regular text-[#59595A] mb-[8px]'>Our Goals</p>
                </div>
                <div className='w-[249px] ml-[30px] mt-[100px] flex-column'>
                    <p className='text-20px font-bold'>Social Profiles</p>
                    <div className='flex gap-[14px] mt-[14px]'>
                        <img className='cursor-pointer' src={Facebook} alt="" />
                        <img className='cursor-pointer' src={Twitter} alt="" />
                        <img className='cursor-pointer' src={In} alt="" />
                    </div>
                </div>
            </div>
            <p className='text-[18px] font-regular text-center mt-[100px]'>© 2023 Skillbridge. All rights reserved.</p>
        </footer>
    )
}

export default Footer
