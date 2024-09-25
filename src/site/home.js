import React, {useEffect} from "react";
import Nav from "../components/home/Nav";
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";
import SaleProducts from "../components/home/SaleProduct";
import Banner from "../components/home/Banner";
import Follow from "../components/home/Follow";
import BestProducts from "../components/home/BestProducts";
import Review from "../components/home/Reviews";
import Footer from "../components/home/Footer";
import AOS from "aos";
import 'aos/dist/aos.css'; 

export default function Home()
{

    useEffect(()=>{
        AOS.init({ 
            duration: 800, 
            delay: 100,
            offset: 600,
            easing:"ease-in-out"
        }); 
        AOS.refresh();
    },[])  

    return(

        <div>
            <Nav/>
            <Hero/>
            <Products/>
            <SaleProducts/>
            <Banner/>
            <Follow/>
            <BestProducts/>
            <Review/>
            <Footer/>
        </div>

    )
}
