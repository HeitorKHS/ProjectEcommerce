import React from 'react'
import basketball from "../../assets/collections/basketball.png"
import baseball from "../../assets/collections/baseball.png"
import football from "../../assets/collections/football.png"

const image = [
    {
        url: basketball,
        name: "Basketball",
        aosDelay: 0
    },    
    {
        url: baseball,
        name: "Baseball",
        aosDelay: 200
    },    
    {
        url: football,
        name: "Football",
        aosDelay: 400
    }
]

export default function Products()
{

    return(
        <div className="mt-14 sm:mb-12">
            <div className="container">

                {/*Header*/}
                <div data-aos-offset="200" data-aos="zoom-in" className="flex justify-center items-end space-x-5 mb-10 mt-[20px]  ">
                    <h1  className="text-xl sm:text-3xl font-bold text-[#0c4a6e]">Collections</h1>
                    <a href="#" className="font-semibold">See More ...</a>
                </div>

                {/*Body*/}
                <div>
                    <div className="grid grid-cols-3 place-items-center gap-5">
                        {image.map((data, index) => (
                            <div data-aos-offset="200" data-aos="fade-up" key={index} data-aos-delay={data.aosDelay} 
                            className=" group shadow-2xl rounded-md ">
                                <a href="#">
                                    <img src={data.url} className="rounded-lg max-h-[408px] transition-transform duration-300 transform group-hover:scale-105 " />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>   
    )
}
