import React from 'react'
import "./Hero.css"
import HeroDesktop from './HeroDesktop'
import HeroMobile from './HeroMobile'

export default function Hero() {
  return (
    <div className="hero-container">
        Hero
        <HeroMobile />
        <HeroDesktop />
    </div>
  )
}
