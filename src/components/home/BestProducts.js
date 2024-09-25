import React from 'react'
import image from "../../assets/best/image.jpg"

const imageData = [
    {
        url: image,
        name: "Product 1",
        price: 350,
        aosDelay: 200
    },
    {
        url: image,
        name:"Product 2",
        price: 300,
        aosDelay: 400
    },
    {
        url: image,
        name: "Product 3",
        price: 300,
        aosDelay: 600
    }
]

export default function BestProducts()
{
    return(
        <div className="mt-14 mb-12">
            <div className="container">

                {/*Header*/}
                <div className="text-center mb-2 sm:mb-10 mt-top">
                    <h1 data-aos="zoom-in" className="text-xl sm:text-3xl font-bold text-[#0c4a6e]">Best Rated</h1>
                </div>

                {/*Body*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center">
                    {imageData.map((data) => (
                        <div data-aos="fade-up" data-aos-delay={data.aosDelay} className="rounded-xl relative shadow-2xl group max-w-[220px] md:max-w-[300px] duration-300 p-5 hover:bg-black/20">
                            <a href="#">
                                <div>
                                    <img src={data.url} alt={data.name} className="mx-auto max-h-[150px] md:max-h-[244px] rounded-md"/>
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