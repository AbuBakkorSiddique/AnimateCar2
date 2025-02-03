
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);


import HomeHeroCarPic from '../images/10f1b8c4c91902c2444c7fe96adccc36.gif'
import { useEffect } from "react";


function HomeHeroSection() {







  useEffect(()=>{

    const AutoTextRefSplit = new SplitType(".AutoTextHObe",{types:"chars"}) ;


    gsap.fromTo(AutoTextRefSplit.chars,{
      y:50,
      opacity:0
    },{
      y:0,
      opacity:1,
      stagger:0.2,
      
   ease:"power3.out"
    }
  );


  },[])





  return (
<>


<div className="HomeHeroSection h-screen w-screen bg-black flex flex-col justify-around items-center">


<div className='HomeHeroSection_one  w-full flex justify-center items-center' >


<img src={HomeHeroCarPic} alt="HomeHeroCarPic" className='h-60 w-80' />


</div>
<div className='HomeHeroSection_two flex justify-center items-center'>
<h1> <span className='text-red-700 text-5xl md:text-7xl lg:text-8xl  font-bold AutoTextHObe '> AUTO</span> <span className='text-5xl md:text-7xl lg:text-8xl font-bold text-white' > CAR</span></h1>
</div>
<div className='HomeHeroSection_three'>
<h1 className='text-lg text-blue-200'> BEST DEALER AND AUTOMOTIVE</h1>
</div>
<div className='HomeHeroSection_four w-[90%] text-sm flex justify-center items-center text-slate-400 text-center'>
<h1 className="HomeHeroIntroText  "  > A presentation is a formal talk, often delivered in front of an audience, aimed at conveying information, persuading others,
or sharing insights on a particular topic. Presentations can take various forms, such as verbal speeches, slideshows,
demonstrations, or multimedia displays.</h1>
</div>




</div>

</>
  )
}

export default HomeHeroSection