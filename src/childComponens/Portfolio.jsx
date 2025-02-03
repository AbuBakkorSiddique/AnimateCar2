import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);


import portfolioOne from '../images/Black and Red Modern Car Dealer Presentation (10).png' ; 
import portfolioTwo from '../images/Black and Red Modern Car Dealer Presentation (11).png'
import portfolioThree from '../images/Black and Red Modern Car Dealer Presentation (12).png'
import { useEffect, useRef } from "react";




function Portfolio() {
const imageMainDiv = useRef()

useEffect(()=>{

  const ourText =new SplitType(".ourText",{types:"chars"})

  setTimeout(() => {
    
gsap.fromTo(ourText.chars,{

  y:10,
  opacity:0
},{
y:0,
opacity:1,
stagger:0.1,
scrollTrigger:{
  trigger:".Portfolio",
  start:"top center"
}



})



gsap.fromTo(imageMainDiv.current.children,{

  y:10,
  opacity:0
},{
y:0,
opacity:1,
stagger:0.5,
scrollTrigger:{
  trigger:".DIvImageSlide",
  start:"top center"
}



})



  }, 20);
})




  return (
<>


<div className='Portfolio h-screen w-full bg-black flex flex-col justify-center items-center '>


<div className=' h-[30%] w-full  flex justify-center items-center'>
<h1 className='text-3xl font-bold sm:text-4xl md:text-5xl ourText'> <span className='text-white '> OUR </span> <span className='text-red-600'> PORTFOLIO</span></h1>


</div>



<div className=' h-[70%] w-full flex flex-row justify-center items-center p-5 DIvImageSlide ' ref={imageMainDiv} >


<div className='h-[100%] w-[50%] sm:w-[33.33%] md:w-[25%]  PortFolioSide_one'>
 <img src={portfolioOne} alt="portfolioOne"  className='h-full w-full p-0 m-0 PortFolioSide'/>
</div>
<div className='h-[100%] w-[50%] sm:w-[33.33%]  md:w-[25%]   PortFolioSide_two '>
  <img src={portfolioTwo} alt="portfolioTwo"  className=' h-full w-full p-0 m-0'/>
</div>
<div className='h-[100%] w-[25%] sm:w-[33.33%]  md:w-[25%]  hidden sm:block  PortFolioSide_three'>
  <img src={portfolioThree} alt="portfolioThree" className='h-full w-full p-0 m-0' />
</div>
<div className='h-[100%] w-[25%]  md:w-[25%]  hidden md:block   PortFolioSide_four'>
  <img src={portfolioOne} alt="portfolioOne"  className='h-full w-full p-0 m-0'/>
</div>



</div>




</div>


</>
  )
}

export default Portfolio