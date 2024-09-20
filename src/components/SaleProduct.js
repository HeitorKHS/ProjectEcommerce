import React from 'react'
import image1 from "../assets/products_sale/image1.png"
import image2 from "../assets/products_sale/image2.png"
import image3 from "../assets/products_sale/image3.png"
import Slider from 'react-slick';

const ProductsData = [
  {
    id: 1,
    name: "Saints",
    descrition: "abcdefghijklmnopqr",
    price: 300,
    sale: 30,
    image: image1
  },  
  {
    id: 2,
    name: "Lakers",
    descrition: "abcdefghijklmnopqr",
    price: 250,
    sale: 30,
    image: image2
  },  
  {
    id: 3,
    name: "Celtics",
    descrition: "abcdefghijklmnopqr",
    price: 280,
    sale: 30,
    image: image3
  },  
  {
    id: 4,
    name: "Lakers",
    descrition: "abcdefghijklmnopqr",
    price: 180,
    sale: 30,
    image: image2
  },  
  {
    id: 5,
    name: "Celtics",
    descrition: "abcdefghijklmnopqr",
    price: 320,
    sale: 30,
    image: image3
  },  
  {
    id: 6,
    name: "Celtics",
    descrition: "abcdefghijklmnopqr",
    price: 315,
    sale: 30,
    image: image3
  },  
  {
    id: 7,
    name: "Saints",
    descrition: "abcdefghijklmnopqr",
    price: 185,
    sale: 30,
    image: image1
  },  
  {
    id: 8,
    name: "Celtics",
    descrition: "abcdefghijklmnopqr",
    price: 199.99,
    sale: 30,
    image: image3
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
          breakpoint: 1200,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
        },
        {
          breakpoint: 1000,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
        }
    ]
  };

    return(
      <div className="my-10 mb-10">
        <div className="container overflow-hidden">
            
            {/*Header*/}
            <div className="text-center mb-2 sm:mb-10">
                <h1 className="text-xl sm:text-3xl font-bold text-[#0c4a6e]">Products on Sale</h1>
            </div>

             {/*Body*/}
             <div className="p-5"  >
              <Slider {...settings}>
                {ProductsData.map((data)=>(
                  <div className="py-5">
                    <div data-aos="zoom-in" className="group  max-w-[220px] rounded-2xl relative p-2 border border-gray-300 shadow-xl mx-auto">
                      <a href="#">
                        {/*img*/}
                        <div className="bg-[#E9E9E9] rounded-md p-5">
                          <img src={data.image} alt={data.id} className=" max-h-[150px] mx-auto transition-transform duration-300 transform sm:group-hover:scale-110"/>   
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
                      </a>
                    </div>
                  </div>
                  
                ))}
                </Slider>
             </div>
        </div>
      </div>
    )
}
