import React from 'react'
import bg from "../assets/background/bg.png"

const ImageBg = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "fill",
    height: "100%",
    width: "100%"
};

export default function Follow()
{
    return(
        <div data-aos="zoom-in" style={ImageBg}>
            <div className="container py-10">
                <div className="space-y-6 max-w-[600px] mx-auto">
                    <h1 className="text-2xl text-center font-semibold text-white">Receive notifications of exclusive offers and discounts</h1>
                    <input type="text" placeholder="Enter your Email" className="w-full p-3"/>
                </div>
            </div>
        </div>
    )
}