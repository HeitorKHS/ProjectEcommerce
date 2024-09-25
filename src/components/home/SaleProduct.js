import React from 'react'
import image from "../../assets/products_sale/image.jpg"
import Slider from 'react-slick';

const ProductsData = [
  {
    id: 1,
    name: "Product 1",
    descrition: "This is the product description",
    price: 300,
    sale: 30,
    image: image
  },  
  {
    id: 2,
    name: "Product 2",
    descrition: "This is the product description",
    price: 250,
    sale: 30,
    image: image
  },  
  {
    id: 3,
    name: "Product 3",
    descrition: "This is the product description",
    price: 280,
    sale: 30,
    image: image
  },  
  {
    id: 4,
    name: "Product 4",
    descrition: "This is the product description",
    price: 180,
    sale: 30,
    image: image
  },  
  {
    id: 5,
    name: "Product 5",
    descrition: "This is the product description",
    price: 320,
    sale: 30,
    image: image
  },  
  {
    id: 6,
    name: "Product 6",
    descrition: "This is the product description",
    price: 315,
    sale: 30,
    image: image
  },  
  {
    id: 7,
    name: "Product 7",
    descrition: "This is the product description",
    price: 185,
    sale: 30,
    image: image
  },  
  {
    id: 8,
    name: "Product 8",
    descrition: "This is the product description",
    price: 199.99,
    sale: 30,
    image: image
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
      <div className="mt-14 sm:mb-12">
        <div className="container">
            
            {/*Header*/}
            <div data-aos="zoom-in" className="flex space-x-5 justify-center items-end mt-[20px] mb-[32px] ">
                <h1 className="text-xl sm:text-3xl font-bold text-[#0c4a6e]">Products on Sale</h1>
                <a href="#" className="font-semibold">See More ...</a>
            </div>

             {/*Body*/}
             <div data-aos="fade-up">
              <Slider {...settings}>
                {ProductsData.map((data)=>(
                  <div>
                    <div className="group max-w-[220px] rounded-2xl relative p-2 border border-gray-300 shadow-xl mx-auto">
                      <a href="#">
                        {/*img*/}
                        <div className="overflow-hidden p-5">
                          <img src={data.image} alt={data.id} className=" max-h-[180px] rounded-md mx-auto position-fill transition-transform duration-300 transform sm:group-hover:scale-110"/>   
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
