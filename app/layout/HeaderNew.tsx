"use client"
import React, { useState } from "react";
import MiniNav from "../home/miniNav";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
import { logo_link } from "../../utils/image_links";
import logo_header  from "../../public/image.header.svg"
import { mini_menu_icon } from "../../utils/svgs";

const navlinks = ["Features", "Pricing", "University", "Blog", "Discover"];

function HeaderNew() {
    const [ref, inView] = useInView({
        threshold: 0
    });
    const [open, setOpen] = useState<Boolean>(false);

    return (
       <>
        <div className="items-center justify-center flex flex-col w-full">
            <Image
                alt="logoheader"
                src={logo_header}
                width={2000}
                height={2000}
                className="px-6 py-4 mb-6 lg:flex hidden "
            />
            {/* <p className="font-bold">
                Neubrutalism Style
            </p> */}
            <div ref={ref}
            className="w-full py-1 lg:flex hidden"
            > </div>
        </div>

        <div
            className={` lg:py-0 py-2 items-center justify-between
            navbar flex-col-1 lg:flex w-full border-y-2 z-50
            border-black ${open ? "bg-black" : "bg-white"}`}
        >
                <div className="flex lg:hidden">
                    {!inView && (
                        <Image
                            alt="logo_new_link"
                            src={open ? logo_header : logo_header}
                            width={200}
                            height={200}
                        />
                    )}
                    <div
                        onClick={() => setOpen(!open)}
                        className={`w-full cursor-pointer flex
                        lg:hidden px-4 items-center justify-end ${
                        open ? "text-white" : "text-black"
                        } `}
                    >
                        
                        {mini_menu_icon}
                    </div>
                </div>
                {open && <MiniNav />}
                {!inView && (
                <Image
                    alt="logo"
                    src={logo_header}
                    className=" px-6 py-4 hidden lg:flex"
                    width={200}
                    height={200}
                />
                )}
                <div className="items-start justify-start space-x-10 lg:flex hidden pl-20 ">
                {navlinks.map((link) => (
                    <p key={link} className="text-lg navlink cursor-pointer">
                    {link}
                    </p>
                ))}
                </div>
                <div className=" items-center justify-center lg:flex hidden">
                <button className="nav-btn">Login</button>
                <button className="nav-btn border-none bg-black text-gray-100 hover:text-black ">
                    Start the journey
                </button>
                </div>
            </div>
       </>
    )
}

export default HeaderNew