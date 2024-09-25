import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export default function Nav()
{

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    return(

        <div className="bg-white relative">   
            {/* Nav Top */}
            <div className="bg-primary/40 py-2">
                <div className="container grid md:grid-cols-3 md:grid-rows-1 grid-rows-2 place-items-center">

                    <button onClick={() => setIsOpen(!isOpen)} 
                        className="md:hidden flex items-center text-secondary row-start-1">
                        <IoMenu className="text-[30px]" />
                    </button>

                    {/*Logo*/}
                    <div className="row-start-1">
                        <a href="/" className="text-2xl sm:text-3xl font-bold flex gap-2 text-[#0c4a6e]">
                            Shopp
                        </a>
                    </div>

                    {/*Search*/}
                    <div className="row-start-2 col-span-3 md:col-span-1 md:row-start-1">
                        <div className="relative mt-2 md:mt-0">
                            <input type="text" placeholder="Search" className="w-[180px] md:w-[300px] rounded-full border border-gray-300 px-2 py-1 pr-10"/>
                            <FaSearch className="text-[#0c4a6e] absolute top-1/2 -translate-y-1/2 right-3"/>
                        </div>                      
                    </div>

                    {/*Buttons*/}
                    <div className="space-x-10 row-start-1">
                        <button className="text-secondary">
                            <IoPerson className="text-[30px] cursor:pointer" />                       
                        </button>  
                        <button className="text-secondary">
                            <RiShoppingCart2Line className="text-[30px] cursor:pointer" />                      
                        </button>   
                    </div>
                     
                </div>

            </div>

            {/* Nav low */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:block absolute md:static z-[9999] w-[200px] md:w-full`}>
                <nav className="flex justify-center bg-white">
                    <ul className="flex flex-col md:flex-row items-center md:space-x-4 gap-5 md:gap-0">
                        <li className="w-full hover:text-primary duration-200 px-4 inline-block"><a href="#">Man</a></li>
                        <li className="w-full hover:text-primary duration-200 px-4 inline-block"><a href="#">Woman</a></li>
                        <li className="w-full hover:text-primary duration-200 px-4 inline-block"><a href="#">Kid</a></li>
                        <li className="w-full hover:text-primary duration-200 px-4 inline-block"><a href="#">Shirts</a></li>
                        <li className="w-full hover:text-primary duration-200 px-4 inline-block"><a href="#">Shoes</a></li>
                        
                        {/*Dropdown*/}
                        <li className="relative group">
                            <a onClick={() => setIsOpen2(!isOpen2)} className="flex items-center w-full md:gap-2 md:py-2" href="#">Sports
                                <IoMdArrowDropup className="transition-all duration-200 md:group-hover:rotate-180"/>
                            </a>
                            <div class={`${isOpen2 ? 'block' : 'hidden'} absolute z-[9999] md:hidden md:group-hover:block bg-white w-[150px]
                            p-2 rounded-md shadow-md`}>
                                <ul >
                                    <li><a className="inline-block w-full rounded-md p-2 hover:bg-primary/40" href="#" >Soccer</a></li>
                                    <li><a className="inline-block w-full rounded-md p-2 hover:bg-primary/40" href="#" >Football</a></li>
                                    <li><a className="inline-block w-full rounded-md p-2 hover:bg-primary/40" href="#" >Basketball</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>           
            </div>
        </div>

    )
}
