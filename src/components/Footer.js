import React, { Component } from 'react'
import { IoSendOutline } from "react-icons/io5";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import './style/footer.css';
import footer_img_1 from './assets/footer-1.png'
import logo from './assets/logo.png'

export default class Footer extends Component {
    render() {
        return (
            <div className='static fotter bg-gradient-to-tr p-9 pt-14 w-full h-fit from-[#1a1a1a] to-gray-700 rounded-sm flex flex-col gap-16'>
                <div className="content-1 flex justify-around flex-wrap items-center w-full h-fit">
                    <div className="texts flex flex-col gap-4 w-fit h-fit">
                        <div className="text-1 select-none text-green-500">
                            No subscription required
                        </div>
                        <div className="text-2 select-none footer-text-head">
                            Start using News Monkey Today <span className='font-mono'>!</span>
                        </div>
                        <div className="email-entry flex gap-2 items-center mt-2">
                            <div className="field flex flex-col">
                                <input
                                    type="text"
                                    placeholder='Connect with creator !'
                                    className='bg-transparent border-b-2 border-gray-400 sm:w-80 w-72 h-10 outline-none text-white focus:border-blue-500'
                                    // onKeyDown={} handle press
                                    // const handleKeyPress = (event) => {
                                    //     if (event.key === 'Enter') {
                                    //         props.submitPrompt();
                                    //     }
                                    // }
                                />
                            </div>
                            <button
                                className='text-white w-fit h-fit button-clicked'>
                                <IoSendOutline className='-rotate-[30deg]' />
                            </button>
                        </div>
                    </div>
                    <div className="w-fit h-fit animate-pulse">
                        <img
                            src={footer_img_1}
                            alt=""
                            className='pointer-events-none'
                        />
                    </div>
                </div>
                <div className="content-2 flex gap-14 justify-normal lg:justify-evenly flex-wrap">
                    <div className="compnay-logo select-none">
                        <div className="logo w-fit h-fit">
                            <img
                                src={logo}
                                alt=""
                                className='w-20 h-18 pointer-events-none'
                            />
                        </div>
                        <div className="logo-text flex flex-col gap-5 w-fit h-fit text-white">
                            <div className="text-1">&#169; InfoPulse 2024</div>
                            <div className="text-1 text-transparent bg-clip-text bg-gradient-to-r from-[#C6EA8D] to-[#FE90AF] flex flex-wrap w-80">Delivering news like never before. Enjoy the new way of reading.</div>
                        </div>
                    </div>
                    <div className="social-links flex flex-row flex-wrap gap-x-9 gap-y-8 md:gap-x-11 md:gap-y-10 lg:gap-x-12 lg:gap-y-11 xl:gap-x-16 2xl:gap-x-24">
                        <div className="column-1 text-sm sm:text-base flex flex-col gap-y-[5px]">
                            <div className="text-slate-400 hover:text-white cursor-pointer">About</div>
                            <div className="text-slate-400 hover:text-white cursor-pointer">Impact</div>
                            <div className="text-slate-400 hover:text-white cursor-pointer">Open Source</div>
                        </div>
                        <div className="column-2 text-sm sm:text-base flex flex-col gap-y-[5px]">
                            <div className="text-slate-400 hover:text-white cursor-pointer">Terms and Conditions</div>
                            <div className="text-slate-400 hover:text-white cursor-pointer">Privacy Policy</div>
                            <div className="text-slate-400 hover:text-white cursor-pointer">Cookie Policy</div>
                        </div>
                        <div className="column-3 text-sm sm:text-base flex flex-col gap-3">
                            <div className="text-white text-xl font-bold tracking-[0.03em] select-none">Contact Us</div>
                            <div className="text-slate-300 hover:text-[#EA8D8D] custom-font"><a href="mailto:iamscientistmanas@gmail.com">connect@infopulse<span className='font-serif'>.</span>com</a></div>
                            <div className="social-links text-slate-300 flex flex-rows gap-4 cursor-pointer -mt-1">
                                <div className="facebook text-lg hover:text-white"><a href="#"><FiFacebook /></a></div>
                                <div className="twitter text-lg hover:text-white"><a href="#"><FiTwitter /></a></div>
                                <div className="linkedin text-lg hover:text-white"><a href="#"><CiLinkedin /></a></div>
                                <div className="instagram text-lg hover:text-white"><a href="#"><FaInstagram /></a></div>
                                <div className="github text-lg hover:text-white"><a href="https://github.com/scienmanas"><FiGithub /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
