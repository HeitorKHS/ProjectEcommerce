import React from 'react'
import summer from '../../assets/summer.png'
import baseball from '../../assets/baseball.png'
import lgsummer from '../../assets/lg-summer.png'
import lgbaseball from '../../assets/lg-baseball.png'
import Slider from 'react-slick';

const imagem = [
    {
        small: summer,
        big: lgsummer
    },
    {
        small: baseball,
        big: lgbaseball
    }
    
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
        
        <div className="relative min-h-[400px] lg:min-h-[600px]">
            <div>
                <Slider {...settings}>             
                        {imagem.map((url, index) => (
                            <div>
                                <div className="hidden lg:block">
                                    <a href="#"><img className="max-h-[650px] w-full object-fill" src={url.big} alt={`Slide ${index}`} /></a>
                                </div>
                                
                                <div className="block lg:hidden">
                                    <a href="#"><img className="min-h-[400px] w-full object-fill" src={url.small} alt={`Slide ${index}`} /></a>
                                </div>
                           </div>
                            
                        ))}
                </Slider>
            </div>
        </div>   

    )
}
