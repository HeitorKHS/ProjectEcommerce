import React from 'react'
import Slider from 'react-slick';
import Account from "../../assets/account.png"
import { FaStar } from "react-icons/fa";

const CustomerReview = [

    {
        id: 1,
        name: "Client 1",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,
        date: "01/01/2024"
    },    
    {
        id: 2,
        name: "Client 2",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "02/01/2024"
    },
    {
        id: 3,
        name: "Client 3",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "03/01/2024"
    },
    {
        id: 4,
        name: "Client 4",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "04/01/2024"
    },
    {
        id: 5,
        name: "Client 5",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "05/01/2024"
    },
    {
        id: 6,
        name: "Client 6",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "06/01/2024"
    },
    {
        id: 7,
        name: "Client 7",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "07/01/2024"
    },
    {
        id: 8,
        name: "Client 8",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        date: "08/01/2024"
    }

]

export default function Review()
{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
              {
                breakpoint: 1000,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
              },
            {
            breakpoint: 1200,
            settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 2
                }
            }
        ]
      };

    return(
        <div  className="py-10 mb-10 mt-20">
           <div className="container">
                
                {/*Header*/}
                <div className="text-center mb-2 sm:mb-10">
                    <h1 data-aos-offset="1000" data-aos="zoom-in" className="text-xl sm:text-3xl font-bold text-[#0c4a6e]">Customer Review</h1>
                </div>

                {/*Body*/}
                <div  data-aos-offset="1000" data-aos="zoom-in">
                    <Slider {...settings}>
                        {CustomerReview.map((data)=> (
                            <div className="py-3">
                            <div  key={data.id} className="relative flex flex-col max-w-[350px] mx-auto space-y-5 p-5 my-6 rounded-xl shadow-lg bg-primary/30">
                                
                                <div className="flex space-x-2 items-center">
                                    <img src={Account} alt={data.name} className="roudend-xl w-10 h-10"/>
                                    <h1 className="text-xl font-bold text-[#0c4a6e]">{data.name}</h1>
                                </div>

                                <p className="text-lg text-gray-500">{data.comment}</p>

                                <div className="space-y-2">
                                    <div className="flex space-x-2">
                                        <FaStar className="text-yellow-500"/>
                                        <FaStar className="text-yellow-500"/>
                                        <FaStar className="text-yellow-500"/>
                                        <FaStar className="text-yellow-500"/>
                                        <FaStar className="text-yellow-500"/>
                                    </div>
                                    <h2 className="font-semibold text-[#0c4a6e]">{data.date}</h2>
                                </div>

                            </div>
                            </div>
                        ))}
                    </Slider>
                </div>

           </div>
        </div>
    )
}
