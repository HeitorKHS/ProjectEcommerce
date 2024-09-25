import React from 'react'
import nfl from "../../assets/banner/football.jpg"

export default function Banner()
{
    return(
        <div className="min-h-[550px] flex justify-center items-center">
            <div data-aos="zoom-in" className="container">

                    <div className="grid md:grid-cols-2 gap-6 place-items-center p-5 bg-gray-200 rounded-xl">
                        <div className="rounded-xl">
                            <img src={nfl} className="rounded-xl max-w-[150px] md:max-w-[400px]" />
                        </div>
                        <div className="text-center md:text-left space-y-5">
                            <h1  className="text-xl sm:text-4xl font-bold">American Football products<br/> 70% OFF</h1>
                            <p  className="text-sm text-gray-500">
                                American Football products with 70% discount. Only for selected products, for more information read the promotion regulations.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
