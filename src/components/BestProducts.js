import React from 'react'
import image1 from "../assets/best/image1.png"
import image2 from "../assets/best/image2.png"
import image3 from "../assets/best/image3.png"

const image = [
    {
        url: image1,
        name: "New Orleans Saints",
        price: 350
    },
    {
        url: image2,
        name:"Los Angeles Lakers",
        price: 300
    },
    {
        url: image3,
        name: "Boston Celtics",
        price: 300
    }
]

export default function BestProducts()
{
    return(
        <div className="my-10 mb-10">
            <div className="container">

                {/*Header*/}
                <div className="text-center mb-2 sm:mb-10 mt-top">
                    <h1 data-aos="fade-up" className="text-xl sm:text-3xl font-bold text-[#0c4a6e]">Best rated</h1>
                </div>

                {/*Body*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center">
                    {image.map((data) => (
                        <div data-aos="zoom-in" className="rounded-xl relative shadow-2xl group max-w-[220px]  md:max-w-[300px] duration-300 p-5 hover:bg-black/20">
                            <a href="#">
                                <div className="">
                                    <img src={data.url} alt={data.name} className="mx-auto max-h-[150px] md:max-h-[250px]"/>
                                </div>

                                <div className="text-center p-6">
                                    <h1 className="text-xl font-bold">{data.name}</h1>
                                    <p className="mt-5 text-xl font-bold text-[#0c4a6e]">R$ {(data.price).toFixed(2)}</p>
                                </div>
                            </a>
                        </div>                       
                  ))}
                </div>
            </div>
        </div>
    )
}