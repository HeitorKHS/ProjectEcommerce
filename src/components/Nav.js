import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";

export default function Nav()
{
    return(

        <div className="shadow-md bg-white">   
            {/* Nav Top */}
            <div className="bg-primary/40 py-2">
                <div className="container flex justify-between items-center">
                    
                    {/*Logo*/}
                    <div>
                        <a href="/" className="text-2xl sm:text-3xl font-bold flex gap-2 text-[#0c4a6e]">
                           <img/> Shopp
                        </a>
                    </div>

                    {/*Search*/}
                    <div>
                        <div className="relative group hidden sm:block">
                            <input type="text" placeholder="Search" className="w-[200px] transition-all
                            duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none
                            focus:border-1 focus:border-primary group-hover:w-[300px]  "/>
                            <FaSearch className="group-hover:text-primary text-[#0c4a6e] absolute top-1/2 -translate-y-1/2 right-3"/>
                        </div>                      
                    </div>

                    {/*Buttons*/}
                    <div className="space-x-2">
                        <button className="text-white bg-gradient-to-r from-primary to-secondary py-1 px-4 rounded-full ">
                            <FaShoppingCart className="text-xl cursor:pointer drop-shadow-sm" />                      
                        </button>
                        <button className="text-white bg-gradient-to-r from-primary to-secondary py-1 px-4 rounded-full ">
                            <MdAccountCircle className="text-xl cursor:pointer drop-shadow-sm" />                       
                        </button>       
                    </div>
                     
                </div>

            </div>

            {/* Nav low */}
            <div className="flex justify-center">
                <ul className="sm:flex hidden items-center space-x-4">
                    <li><a className="inlinme-block px-4 hover:text-primary duration-200" href="#">Man</a></li>
                    <li><a className="inlinme-block px-4 hover:text-primary duration-200" href="#">Woman</a></li>
                    <li><a className="inlinme-block px-4 hover:text-primary duration-200" href="#">Kid</a></li>
                    <li><a className="inlinme-block px-4 hover:text-primary duration-200" href="#">Shirts</a></li>
                    <li><a className="inlinme-block px-4 hover:text-primary duration-200" href="#">Shoes</a></li>
                    
                    {/*Dropdown*/}
                    <li className="relative group">
                        <a className="flex items-center gap-2 py-2" href="#">Sports
                            <IoMdArrowDropup className="transition-all duration-200 group-hover:rotate-180"/>
                        </a>
                        <div class="absolute z-[9999] hidden group-hover:block bg-white w-[150px]
                        p-2 rounded-md shadow-md">
                            <ul >
                                <li><a className="inline-block w-full rounded-md p-2 hover:bg-primary/40" href="#" >Soccer</a></li>
                                <li><a className="inline-block w-full rounded-md p-2 hover:bg-primary/40" href="#" >Football</a></li>
                                <li><a className="inline-block w-full rounded-md p-2 hover:bg-primary/40" href="#" >Basketball</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}
