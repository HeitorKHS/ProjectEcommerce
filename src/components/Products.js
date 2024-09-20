import React from 'react'
import nba from "../assets/collections/nba.png"
import mlb from "../assets/collections/mlb.png"
import nfl from "../assets/collections/nfl.png"

const image = [
    {
        url: nba,
        name: "NBA",
        aosDelay: 0
    },    
    {
        url: mlb,
        name: "MLB",
        aosDelay: 200
    },    
    {
        url: nfl,
        name: "NFL",
        aosDelay: 400
    }
]

export default function Products()
{

    return(
        <div className="py-10 sm:mb-20">
            <div className="container overflow-hidden">

                {/*Header*/}
                <div className="text-center max-w-[600px] mx-auto mb-2 sm:mb-10">
                    <h1 data-aos="fade-up" className="text-xl sm:text-3xl font-bold text-[#0c4a6e]">Collections</h1>
                </div>

                {/*Body*/}
                <div>
                    <div className="grid grid-cols-3 place-items-center gap-5">
                        {image.map((data, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={data.aosDelay} 
                            className="group overflow-hidden shadow-2xl rounded-md">
                                <a href="#">
                                    <img src={data.url} className="transition-transform duration-300 transform group-hover:scale-105" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>   
    )
}
