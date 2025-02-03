
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);



import MissionImageOne from '../images/Black and Red Modern Car Dealer Presentation (3).png' 

import '../css/MissionComponens.css' ; 
import { useEffect, useRef } from "react";
function MissionComponens() {

const MissonTextSlide = useRef()

useEffect(()=>{

setTimeout(()=>{


gsap.fromTo(MissonTextSlide.current.children,{
y:50,
opacity:0

},{

y:0,
opacity:1,
stagger:0.3,
scrollTrigger:{
  trigger:".MissonTextSlide",
  start:" top center "
}


})




},20)



},[])









  return (
<>

<div className="MissionComponens h-[240vh] md:h-[110vh] w-full flex flex-col justify-around md:justify-between items-center bg-black md:flex-row md:overflow-hidden">


<div className="MissionComponens_left  h-[60%] md:h-[100%] md:w-[70%] w-full bg-red-600 p-5 md:p-3 flex flex-col justify-around  clip-custom  MissonTextSlide" ref={MissonTextSlide}>


    <div className="MissionComponens_left_one flex flex-col justify-center items-center text-center pb-5">
     <h1 className="text-2xl sm:text-4xl    font-bold text-white"> MISSION & VISION </h1>
     <h1 className="text-2xl  sm:text-4xl  font-bold text-black"> COMPANY</h1>
    </div>


    <div className="MissionComponens_left_two flex flex-col gap-8 pb-5 md:w-[50%]  ">
        <h1 className="text-xl font-bold text-white"> OUR MISSION</h1>
        <h1 className="text-sm text-black  "> <span className="text-md  pr-2 font-bold bg-white p-1 border rounded-full border-none"> 1</span><span> A presentation is a formal talk, often delivered in front of an</span>  <span> audience, aimed at conveying information, persuading others, or sharing</span>  <span> verbal speeches, slideshows, demonstrations, or multimedia displays. </span> </h1>
       
        <h1 className="text-sm text-black "> <span className="text-md pr-2  font-bold bg-white p-1 border rounded-full border-none"> 2</span> A presentation is a formal talk, often delivered in front of an audience, aimed at conveying information, persuading others, or sharing insights on a particular topic. Presentations can take various forms, such as verbal speeches, slideshows, demonstrations, or multimedia displays.</h1>
    </div>



    <div className="MissionComponens_left_three flex flex-col gap-8  md:w-[50%]">
    <h1 className="text-xl font-bold text-white"> OUR VISION</h1>
        <h1 className="text-sm text-black"> <span className="text-md pr-2 font-bold bg-white p-1 border rounded-full border-none"> 1</span> A presentation is a formal talk, often delivered in front of an audience, aimed at conveying information, persuading others, or sharing insights on a particular topic. Presentations can take various forms, such as verbal speeches, slideshows, demonstrations, or multimedia displays.</h1>
       
        <h1 className="text-sm text-black md:hidden"> <span className="text-md pr-2  font-bold bg-white p-1 border rounded-full border-none"> 2</span> A presentation is a formal talk, often delivered in front of an audience, aimed at conveying information, persuading others, or sharing insights on a particular topic. Presentations can take various forms, such as verbal speeches, slideshows, demonstrations, or multimedia displays.</h1>
    </div>




</div>

<div className="MissionComponens_right h-[40%] md:h-[100%] md:w-[30%] w-full flex justify-center items-center  ">

    <img src={MissionImageOne} alt="MissionImageOne" className='h-[100%] w-[100%]   ' />

</div>





</div>

</>
  )
}

export default MissionComponens