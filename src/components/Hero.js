import React from 'react'
import winter from '../assets/winter.png'
import autumn from '../assets/autumn.png'
import Slider from 'react-slick';

const imagem = [
    winter,
    autumn
];

export default function Hero()
{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots:false
                }
            }
        ]
    };

    return(
        
        <div className="relative mb-5 sm:mb-20 md:mt-0">

            <Slider {...settings}>             
                    {imagem.map((url, index) => (
                        <a href="#"><img className="w-full object-fill" src={url} alt={`Slide ${index}`} /></a>
                    ))}
            </Slider>

        </div>   

    )
}
