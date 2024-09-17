import React from 'react'
import shirt from "../assets/products_sale/shirt.png"
import Slider from 'react-slick';

const ProductsData = [
  {
    id: 1,
    name: "Shirt",
    descrition: "abcdefghijklmnopqr",
    price: 80,
    sale: 30,
    image: shirt
  },  
  {
    id: 2,
    name: "Shirt",
    descrition: "abcdefghijklmnopqr",
    price: 80,
    sale: 30,
    image: shirt
  },  
  {
    id: 3,
    name: "Shirt",
    descrition: "abcdefghijklmnopqr",
    price: 80,
    sale: 30,
    image: shirt
  },  
  {
    id: 4,
    name: "Shirt",
    descrition: "abcdefghijklmnopqr",
    price: 80,
    sale: 30,
    image: shirt
  },  
  {
    id: 5,
    name: "Shirt",
    descrition: "abcdefghijklmnopqr",
    price: 80,
    sale: 30,
    image: shirt
  },  
  {
    id: 6,
    name: "Shirt",
    descrition: "abcdefghijklmnopqr",
    price: 80,
    sale: 30,
    image: shirt
  },  
  {
    id: 7,
    name: "Shirt",
    descrition: "abcdefghijklmnopqr",
    price: 80,
    sale: 30,
    image: shirt
  },  
  {
    id: 8,
    name: "Shirt",
    descrition: "abcdefghijklmnopqr",
    price: 80,
    sale: 30,
    image: shirt
  }
]

export default function SaleProducts()
{

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots:false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
  };

    return(
      <div className="mb-20">
        <div className="container">
            
            {/*Header*/}
            <div className="text-left mb-2 sm:mb-10">
                <h1 className="text-xl sm:text-3xl font-bold text-[#0c4a6e]">Products on Sale</h1>
            </div>

             {/*Body*/}
             <div className="">
              <Slider {...settings}>
                {ProductsData.map((data)=>(
                  <div data-aos="zoom-in" className="group max-w-[200px] sm:max-w-[280px] rounded-2xl relative p-2 border border-gray-300 shadow-xl mx-auto">
                    {/*img*/}
                    <div className="bg-[#E9E9E9] rounded-md">
                      <img src={data.image} alt={data.id} className="max-h-[70px] sm:max-h-[150px] mx-auto transition-transform duration-300 transform sm:group-hover:scale-105"/>   
                    </div>
                    {/*Details*/}
                    <div className="p-4 text-center">
                      <h1 className="text-xl font-bold text-[#0c4a6e]">{data.name}</h1>
                      <p className="text-gray-500">{data.descrition}</p>
                      <div className="text-left mt-5">
                        <p className="text-gray-500 font-bold line-through">R$ {data.price.toFixed(2)}</p>
                        <h1 className="text-xl font-bold text-[#0c4a6e]">R$ {(data.price-(data.price*(data.sale/100))).toFixed(2)}</h1>
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
