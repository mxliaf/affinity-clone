import { useState } from 'react'
import './Affinity.css'
import NavBar from './Componentes/NavBar'
import HeroBanner from './Componentes/HeroBanner'
import SlideLogoMarquee from './Componentes/SlideLogoMarquee'
import Studio1 from './Componentes/Studio1'
import Studio2 from './Componentes/Studio2'
import Studio3 from './Componentes/Studio3'
import Studio4 from './Componentes/Studio4'
import Studio5 from './Componentes/Studio5'
import Studio6 from './Componentes/Studio6'
import Rodape from './Componentes/Rodape'

function Affinity() {

  return (
    <>
    <div className='Container'>
    <NavBar></NavBar>
    <HeroBanner></HeroBanner>
    <SlideLogoMarquee></SlideLogoMarquee>
    <Studio1></Studio1>
    <Studio2></Studio2>
    <Studio3></Studio3>
    <Studio4></Studio4>
    <Studio5></Studio5>
    <Studio6></Studio6>
    <Rodape></Rodape>
    </div>
    </>
  )
}

export default Affinity
