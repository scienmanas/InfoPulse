import React, { Component } from 'react'
import { useState } from 'react'
import './style/navbar.css'
import logo from './assets/logo.png'

export default class Navbar extends Component {

// const [isMenuOpen, setIsMenuOpen] = useState("false")

    // let toggleMenu = () => {

    // };

    render() {
        return (
            <div className='navbar z-40 bg-transparent p-4 md:text-lg items-center justify-between flex fixed top-0 w-full h-fit blurred-navbar'>
                <div className="left text-white">
                    <img
                        src={logo}
                        alt="logo"
                        className='w-16 h-11 pointer-events-none cursor-pointer'
                    />
                </div>
                <div className="flex right text-white w-fit h-fit items-center justify-center">
                    <button className="hamburger sm:hidden cursor-pointer flex flex-col gap-y-1 items-center bg-slate-300 p-[9px] rounded-lg">
                        <div className="line w-6 h-[2.5px] bg-slate-600"></div>
                        <div className="line w-6 h-[2.5px] bg-slate-600"></div>
                        <div className="line w-6 h-[2.5px] bg-slate-600"></div>
                    </button>
                    <div className="navbar-items fixed top-4 left-4 p-5 sm:p-0 w-auto right-4 sm:static sm:bg-none bg-transparent bg-gradient-to-tr from-[#009245] to-[#FCEE21] rounded-lg flex flex-col sm:flex-row sm:w-fit shadow-xl sm:shadow-none hidden">
                        {/* Hidden add above */}
                        <div className="navigation text-[#4C4C4C] navbar-text-custom  sm:text-white w-fit flex sm:flex-row flex-col gap-x-5 gap-y-2 sm:w-fit h-fit items-center">
                            <div className="cursor-pointer sm:text-slate-400 sm:hover:text-slate-100 hover:text-[#3a3a3a] w-fit h-fit active:border-[#FFD700] border-[1px] border-dashed hover:scale-110 duration-150 active:scale-90 border-transparent rounded-[4px] px-3 py-1  home">Home</div>
                            <div className="cursor-pointer sm:text-slate-400 sm:hover:text-slate-100 hover:text-[#3a3a3a] w-fit h-fit active:border-[#FFD700] border-[1px] border-dashed hover:scale-110 duration-150 active:scale-90 border-transparent rounded-[4px] px-3 py-1  options2">Option</div>
                            <div className="cursor-pointer sm:text-slate-400 sm:hover:text-slate-100 hover:text-[#3a3a3a] w-fit h-fit active:border-[#FFD700] border-[1px] border-dashed hover:scale-110 duration-150 active:scale-90 border-transparent rounded-[4px] px-3 py-1  option-3">Option</div>
                            <div className="cursor-pointer sm:text-slate-400 sm:hover:text-slate-100 hover:text-[#3a3a3a] w-fit h-fit active:border-[#FFD700] border-[1px] border-dashed hover:scale-110 duration-150 active:scale-90 border-transparent rounded-[4px] px-3 py-1  Author">Author</div>
                            <div className="w-fit h-fit buttons items-center flex gap-3">
                            </div>
                        </div>
                        <div className="buttons items-center px-3 flex flex-col sm:flex-row gap-4 mr-5 w-fit">
                            <div className="mode-button cursor-pointer w-fit h-fit text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className={` iconify iconify--carbon`}
                                    // ${props.mode === 'dark' ? 'hidden' : 'visible'} 
                                    width="26"
                                    height="26"
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6M5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
                                    ></path>
                                </svg>

                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className={` iconify iconify--ph`} 
                                    // ${props.mode === 'dark' ? 'visible' : 'hidden'}
                                    width="26"
                                    height="26"
                                    viewBox="0 0 256 256"
                                >
                                    <path fill="currentColor"
                                        d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4"
                                    ></path>
                                </svg> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
