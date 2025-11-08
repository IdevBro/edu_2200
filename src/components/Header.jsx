import React from 'react'
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className=" w-[1860px] bg-white shadow-sm mt-[20px] ml-[30px] mr-[30px]">
            <div className="bg-orange-500 text-white text-center text-sm py-2">
                Free Courses Sale Ends Soon, Get It Now →
            </div>

            <div className="container mx-auto logo flex">

                <div className="container mx-auto px-6 py-4 flex gap-[100px] items-center">
                    <div className="flex items-center gap-2 justify-center">
                        <div className="bg-orange-500 w-8 h-8 rounded flex justify-center items-center text-white font-bold text-lg">
                            <img src={Logo} alt="Logo" />
                        </div>
                    </div>
                    <ul className="hidden md:flex items-center gap-6 ">
                        <li className="cursor-pointer text-gray-700 font-normal hover:text-blue-700 font-semibold"><Link to="/">Home</Link></li>
                        <li className="cursor-pointer text-gray-700 font-normal hover:text-blue-700 font-semibold"><Link to="/courses">Courses</Link></li>
                        <li className="cursor-pointer text-gray-700 font-normal hover:text-blue-700 font-semibold">About Us</li>
                        <li className="cursor-pointer text-gray-700 font-normal hover:text-blue-700 font-semibold">Pricing</li>
                        <li className="cursor-pointer text-gray-700 font-normal hover:text-blue-700 font-semibold">Contact</li>
                    </ul>
                </div>

                <div className="btn flex justify-center items-center">
                    <div className="hidden md:flex items-center gap-5">
                        <button className="cursor-pointer text-gray-800 w-[100px]">Sign Up</button>
                        <button className="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Login</button>
                    </div>

                    <div className="md:hidden text-2xl text-gray-800 cursor-pointer">
                    </div>
                </div>

            </div>
        </header >
    )
}

export default Header
