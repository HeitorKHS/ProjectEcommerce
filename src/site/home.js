import React, {useEffect} from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Products from "../components/Products";
import SaleProducts from "../components/SaleProduct";
import Banner from "../components/Banner";
import Follow from "../components/Follow";
import BestProducts from "../components/BestProducts";
import Review from "../components/Reviews";
import Footer from "../components/Footer";
import AOS from "aos";
import 'aos/dist/aos.css'; 

export default function Home()
{

    useEffect(()=>{
        AOS.init({ 
            duration: 1000, 
            delay: 70,
            offset: 100,
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
