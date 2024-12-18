import React from 'react'
import HeroSection from './homeHeroSection'
import PromoCard from '../component/promoCard'
import MusicChart from './music/musicTop'
import Footer from "../component/footer/footer"



export default function Home() {
  return (
    <div className="">
  
    <HeroSection/>
    <PromoCard/>
    <MusicChart/>
    <Footer/>



    </div>
  )
}
