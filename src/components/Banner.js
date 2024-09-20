import React from 'react'
import nfl from "../assets/banner/nfl.png"

export default function Banner()
{
    return(
        <div className="py-10 mb-20">
            <div data-aos="fade-up" className="container">

                    <div className="grid md:grid-cols-2 gap-6 place-items-center p-5 bg-gray-200 rounded-xl">
                        <div className="rounded-xl">
                            <img src={nfl} className="rounded-xl max-w-[150px] md:max-w-[250px]" />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-xl sm:text-4xl font-bold">NFL products 70% OFF</h1>
                            <p className="text-sm text-gray-500">
                                NFL products with 70% discount. Only for selected products, for more information read the promotion regulations.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
