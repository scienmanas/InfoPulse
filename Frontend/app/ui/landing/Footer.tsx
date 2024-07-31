"use client";

import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import shipImg from "@/public/assets/footer/ship.png";
import logo from "@/public/assets/logo/logo.png";
import React from "react";
import { useState } from "react";
import { MessageSubmissionLoader } from "@/app/ui/loaders";

export function Footer(): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmission: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    // Update the state
    setIsSubmitting(true);

    // Get the form data
    const formData = new FormData(e.target as HTMLFormElement);
    const email: string = formData.get("email") as string;
    const message: string = formData.get("message") as string;

    // Submit form
    const POST_API_URI = "https://infopulse.onrender.com/api/service/send-email";

    try {
      // Send message to creator
      let res = await fetch(POST_API_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toName: "Manas",
          toEmail: "iamscientistmanas@gmail.com",
          subject: "A New Message from InfoPulse",
          message: `Hi Manas, some with email: ${email}, have messaged you. Below is the message sent through the webiste: \n\n${message}\n\nYou can either respond or ignore the message\n\nTeam InfoPulse\nThe All in One News App`,
        }),
      });

      // Internal Server error case
      if (res.status != 200) {
        throw new Error();
      }

      // Send confirmation message to user
      res = await fetch(POST_API_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toName: "",
          toEmail: email,
          subject: "InfoPulse: Message Received !",
          message:
            "Hi,\nYour message have been successfully received and sent to creators. They will try to repond as soon as possible and will love to interact to you.\n\nTeam InfoPulse\n(This is auto-gnerated mail for successful confirmation.)",
        }),
      });

      // Internal Server error case
      if (res.status != 200) {
        throw new Error();
      }

      // Final update
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.log(`Some Error Occured`);
      throw new Error();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="static fotter bg-gradient-to-tr sm:p-9 py-9 px-5 pt-14 sm:py-9 w-full h-fit from-[#1a1a1a] to-gray-700 rounded-sm flex flex-col gap-16">
      <div className="content flex justify-around flex-wrap items-center gap-6 w-full h-fit">
        <div className="texts flex flex-col gap-4 w-fit h-fit">
          <p className="text select-none text-green-500 w-fit h-fit">
            No subscription required
          </p>
          <p className="text select-none footer-text-head text-white h-fit w-fit">
            Start using News Monkey Today <span className="font-mono">!</span>
          </p>
          <form
            id="contact"
            onSubmit={handleFormSubmission}
            className="user-message-submit items-center flex flex-wrap flex-col gap-12 mt-2"
          >
            <input
              disabled={isSubmitted}
              required
              type="email"
              placeholder="Email"
              name="email"
              id=""
              className="bg-transparent border-b-2 border-gray-400 sm:w-80 w-72 h-10 outline-none text-white focus:border-blue-500 placeholder:text-slate-200"
            />
            <textarea
              disabled={isSubmitted}
              required
              placeholder="Message"
              name="message"
              id=""
              className="rounded-xl p-4 bg-transparent text-white border-2 border-gray-400 outline-none focus:border-blue-500 w-80 h-52 resize-none"
            ></textarea>

            <button
              disabled={isSubmitted}
              type="submit"
              className={`bg-[#d36868] w-[7.7rem] h-fit py-4 px-6 rounded-md flex justify-center items-center gap-2 text-white font-bold text-lg  transition-all duration-200 ${
                isSubmitted
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-[#d73434]"
              }`}
            >
              {isSubmitted ? <span>Sent 😊</span> : <span>Send</span>}

              {isSubmitting && <MessageSubmissionLoader />}
            </button>
          </form>
        </div>
        <div className="w-fit h-fit animate-pulse">
          <Image
            src={shipImg}
            alt="footer img"
            className="pointer-events-none"
            aria-hidden
          />
        </div>
      </div>
      <div className="content flex gap-14 justify-normal lg:justify-evenly flex-wrap">
        <div className="compnay-logo select-none">
          <div className="logo w-fit h-fit">
            <Image
              src={logo}
              alt="logo"
              aria-hidden
              className="w-20 h-18 pointer-events-none"
            />
          </div>
          <div className="logo-text flex flex-col gap-5 w-fit h-fit text-white">
            <div className="text-1">&#169; InfoPulse 2024</div>
            <div className="text-1 text-transparent bg-clip-text bg-gradient-to-r from-[#C6EA8D] to-[#FE90AF] flex flex-wrap w-80">
              Delivering news like never before. Enjoy the new way of reading.
            </div>
          </div>
        </div>
        <div className="social-links flex flex-row flex-wrap gap-x-9 gap-y-8 md:gap-x-11 md:gap-y-10 lg:gap-x-12 lg:gap-y-11 xl:gap-x-16 2xl:gap-x-24">
          <div className="column-1 text-sm sm:text-base flex flex-col gap-y-[5px]">
            <div className="text-slate-400 hover:text-white cursor-pointer">
              About
            </div>
            <div className="text-slate-400 hover:text-white cursor-pointer">
              Impact
            </div>
            <div className="text-slate-400 hover:text-white cursor-pointer">
              Open Source
            </div>
          </div>
          <div className="column-2 text-sm sm:text-base flex flex-col gap-y-[5px]">
            <div className="text-slate-400 hover:text-white cursor-pointer">
              Terms and Conditions
            </div>
            <div className="text-slate-400 hover:text-white cursor-pointer">
              Privacy Policy
            </div>
            <div className="text-slate-400 hover:text-white cursor-pointer">
              Cookie Policy
            </div>
          </div>
          <div className="column-3 text-sm sm:text-base flex flex-col gap-3">
            <div className="text-white text-xl font-bold tracking-[0.03em] select-none">
              Contact Us
            </div>
            <div className="text-slate-300 hover:text-[#EA8D8D] custom-font">
              <Link href="mailto:thenerdymanas@gmail.com">
                thenerdymanas@gmail.com<span className="font-serif">.</span>com
              </Link>
            </div>
            <div className="social-links text-slate-300 flex flex-rows gap-4 cursor-pointer -mt-1">
              <div className="facebook text-lg hover:text-[#EA8D8D]">
                <Link href="#">
                  <FiFacebook />
                </Link>
              </div>
              <div className="twitter text-lg hover:text-[#EA8D8D]">
                <Link href="#">
                  <FiTwitter />
                </Link>
              </div>
              <div className="linkedin text-lg hover:text-[#EA8D8D]">
                <Link href="#">
                  <CiLinkedin />
                </Link>
              </div>
              <div className="instagram text-lg hover:text-[#EA8D8D]">
                <Link href="#">
                  <FaInstagram />
                </Link>
              </div>
              <div className="github text-lg hover:text-[#EA8D8D]">
                <Link href="https://github.com/scienmanas">
                  <FiGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
