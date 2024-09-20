import React from 'react'
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";


export default function Footer()
{

    return(     
        <div className="text-white bg-black">
            <div className="container">
                <div className="grid pb-10 pt-5">
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 ">
                        {/*About company*/}
                        <div>
                            <div className="">
                                <h1 className="text-xl sm:text-3xl font-bold text-left mb-3">Institutional</h1>
                                <ul className="flex flex-col gap-3">
                                    <li><a href="#" className="text-gray-300 hover:underline duration:300 font-semibold">About Shopp</a></li>
                                    <li><a href="#" className="text-gray-300 hover:underline duration:300 font-semibold">Shopp Blog</a></li>
                                    <li><a href="#" className="text-gray-300 hover:underline duration:300 font-semibold">Sustainability</a></li>
                                    <li><a href="#" className="text-gray-300 hover:underline duration:300 font-semibold">Work with us</a></li>
                                </ul>
                            </div>
                        </div>
 
                         {/*About company*/}
                        <div>
                            <div className="">
                                <h1 className="text-xl sm:text-3xl font-bold text-left mb-3">Help</h1>
                                <ul className="flex flex-col gap-3">
                                    <li><a href="#" className="text-gray-300 hover:underline duration:300 font-semibold">Exchanges and Returns</a></li>
                                    <li><a href="#" className="text-gray-300 hover:underline duration:300 font-semibold">Privacy Policy</a></li>
                                    <li><a href="#" className="text-gray-300 hover:underline duration:300 font-semibold">Regulations</a></li>
                                    <li><a href="#" className="text-gray-300 hover:underline duration:300 font-semibold">Frequently asked questions</a></li>
                                    <li><a href="#" className="text-gray-300 hover:underline duration:300 font-semibold">Talk to us</a></li>
                                </ul>
                            </div>
                        </div>

                        {/*Social links*/}
                        <div>
                            <div className="flex gap-3 mt-5">
                                <a href="#"><SlSocialFacebook className="text-3xl"/></a>
                                <a href="#"><SlSocialLinkedin className="text-3xl"/></a>
                                <a href="#"><SlSocialInstagram className="text-3xl"/></a>
                                <a href="#"><SlSocialYoutube className="text-3xl"/></a>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center gap-3">
                                    <FaHeadphones/>
                                    <p>+55 9999-9999</p>
                                </div>
                                <div className="flex items-center gap-3 mt-3">
                                    <FaWhatsapp/>
                                    <p>+55 9999-9999</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>   
    )
}
