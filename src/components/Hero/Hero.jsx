import React from 'react'
import "./Hero.css"
import HeroDesktop from './HeroDesktop'
import HeroMobile from './HeroMobile'
import { useEffect, useState } from 'react'

export default function Hero() {

    const [deskMode, setDeskMode] = useState((window.innerWidth>=950) ? true : false);
    
    useEffect(()=>{
        function renderFeed(){
            window.innerWidth>=950 ? setDeskMode(true) : setDeskMode(false)
        }
        window.addEventListener('resize',renderFeed)
      })

  return (
    <div className='hero-container'>

        {deskMode ? <HeroDesktop />:<HeroMobile />}

        <div className='hero-textbody'>
            <h1>YAYO VANG</h1>
            <h4>DIRECTOR OF PHOTOGRAPHY</h4>
            <button>SEE MORE</button>
        </div>

    </div>
  )
}
