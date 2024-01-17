import React, { Component } from 'react'
import { FiGithub } from "react-icons/fi";
import logo from './assets/logo.png'

export default class Navbar extends Component {

    // const onClick = () => {
    //     console.log('clicked')
    // }
    render() {
        return (
            <div className='navbar z-30 bg-transparent p-4 md:text-lg items-center justify-between flex absolute top-0 w-full h-fit'>
                <div className="left text-white">
                    <img
                        src={logo}
                        alt="logo"
                        className='w-16 h-11'
                    />
                </div>
                <div className="flex right text-white w-fit h-fit items-center">
                    <button className="hamburger sm:hidden cursor-pointer flex flex-col gap-y-1 items-center bg-slate-300 p-[9px] rounded-lg">
                        <div className="line w-6 h-[2.5px] bg-slate-600"></div>
                        <div className="line w-6 h-[2.5px] bg-slate-600"></div>
                        <div className="line w-6 h-[2.5px] bg-slate-600"></div>
                    </button>
                    <div className="navbar-items hidden sm:flex">
                        <div className="navigation flex gap-x-5 w-fit h-fit items-center">
                            <div className="cursor-pointer hover:-translate-y-1 duration-300 w-fit h-fit home">Home</div>
                            <div className="cursor-pointer hover:-translate-y-1 duration-300 w-fit h-fit options2">Option2</div>
                            <div className="cursor-pointer hover:-translate-y-1 duration-300 w-fit h-fit option-3">Option3</div>
                            <div className="cursor-pointer hover:-translate-y-1 duration-300 w-fit h-fit Author">Author</div>
                            <div className="w-fit h-fit buttons items-center flex gap-3">
                            </div>
                        </div>
                        <div className="buttons flex items-center gap-4 mr-5">
                            <div className="mode-button cursor-pointer w-fit h-fit">Mode</div>
                            <div className="github cursor-pointer w-fit h-fit"><FiGithub /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
