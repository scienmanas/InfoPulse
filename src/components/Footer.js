import React from 'react'
import { useState } from 'react'
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import './style/footer.css';
import footer_img_1 from './assets/footer-1.png'
import logo from './assets/logo.png'


export default function Footer()  {

    const templet_id = process.env.REACT_APP_EMAIL_JS_TEMAPLATE_ID;
    const public_key = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
    const service_id = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
        

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleSubmit = (event) => {

        if (!validateEmail(email)) {
            document.querySelector('.email-error').classList.remove('hidden');
            return;
        } else {
            document.querySelector('.email-error').classList.add('hidden');
        }

        if (message.trim() === '') {
            document.querySelector('.message-error').classList.remove('hidden');
            return;
        }
        else {
            document.querySelector('.message-error').classList.add('hidden');
        }

        event.preventDefault();

        const template_params = {
            from: email,
            date: "Today",
            time: "!2 am",
            message: message
        }


        emailjs.send(service_id, templet_id, template_params, public_key)
            .then((result) => {
                alert("Feedback sent successfully");
                setEmail('');
                setMessage('');
            }, (error) => {
                alert("Failed to send feedback");
                console.log(error.text);
            });
    }

        return (
            <div className='static fotter bg-gradient-to-tr p-9 pt-14 w-full h-fit from-[#1a1a1a] to-gray-700 rounded-sm flex flex-col gap-16'>
                <div className="content-1 flex justify-around flex-wrap items-center gap-6 w-full h-fit">
                    <div className="texts flex flex-col gap-4 w-fit h-fit">
                        <div className="text-1 select-none text-green-500">
                            No subscription required
                        </div>
                        <div className="text-2 select-none footer-text-head">
                            Start using News Monkey Today <span className='font-mono'>!</span>
                        </div>
                        <div className="entry-fields items-center flex flex-wrap flex-col gap-12 mt-2">
                            <div className="email-entry flex gap-2 items-center mt-2">
                                <div className="field flex flex-col">
                                    <input
                                        type="email"
                                        placeholder='Email'
                                        className='bg-transparent border-b-2 border-gray-400 sm:w-80 w-72 h-10 outline-none text-white focus:border-blue-500'
                                        value={email}
                                        onChange={(event) => setEmail({ email: event.target.value })}
                                    />
                                </div>
                                <div className="email-error absolute hidden bg-yellow-100 rounded-md px-4 py-2 mt-[5.5rem] shadow-md">
                                    <p className="text-sm text-yellow-800"> <span><svg className="h-5 w-5 align-text-bottom inline-block" data-icon="tabler:info-square" height="1em" viewBox="0 0 24 24" width="1em"><symbol id="ai:tabler:info-square"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor"><path d="M12 9h.01M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"></path><path d="M11 12h1v4h1"></path></g></symbol><use xlinkHref="#ai:tabler:info-square"></use></svg></span>Please enter a valid email address.</p>
                                </div>


                            </div>
                            <div className="message-entry">
                                <textarea
                                    onChange={(event) => setMessage(event.target.value)}
                                    value={message}
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    placeholder="Message the creator..."
                                    className='rounded-xl p-4 bg-transparent text-white font-semibold border-2 border-gray-400 outline-none focus:border-blue-500 w-80 h-52 resize-none'
                                >
                                </textarea>
                                <div className="message-error absolute hidden bg-yellow-100 rounded-md px-4 py-2 mt-[5.5rem] shadow-md">
                                    <p className="text-sm text-yellow-800"> <span><svg className="h-5 w-5 align-text-bottom inline-block" data-icon="tabler:info-square" height="1em" viewBox="0 0 24 24" width="1em"><symbol id="ai:tabler:info-square"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor"><path d="M12 9h.01M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z"></path><path d="M11 12h1v4h1"></path></g></symbol><use xlinkHref="#ai:tabler:info-square"></use></svg></span>Message cannot be blank.</p>
                                </div>
                            </div>
                            <div className="button place-self-center">
                                <button
                                    onClick={handleSubmit}
                                    className='bg-[#d36868] w-fit h-fit py-4 px-8 rounded-md flex justify-center items-center gap-2 text-white font-bold text-lg hover:bg-[#FFA0A0] transition-all duration-200'>
                                    <span className='text-black'>Send</span>
                                </button>
                            </div>
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
                            <div className="text-slate-300 hover:text-[#EA8D8D] custom-font"><a href="mailto:iamscientistmanas@gmail.com">infopulseconnect@gmail<span className='font-serif'>.</span>com</a></div>
                            <div className="social-links text-slate-300 flex flex-rows gap-4 cursor-pointer -mt-1">
                                <div className="facebook text-lg hover:text-[#EA8D8D]"><a href="#"><FiFacebook /></a></div>
                                <div className="twitter text-lg hover:text-[#EA8D8D]"><a href="#"><FiTwitter /></a></div>
                                <div className="linkedin text-lg hover:text-[#EA8D8D]"><a href="#"><CiLinkedin /></a></div>
                                <div className="instagram text-lg hover:text-[#EA8D8D]"><a href="#"><FaInstagram /></a></div>
                                <div className="github text-lg hover:text-[#EA8D8D]"><a href="https://github.com/scienmanas"><FiGithub /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
