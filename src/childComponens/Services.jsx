
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);


import ServicesOne from '../images/Black and Red Modern Car Dealer Presentation (6).png' ; 
import ServiceTwo from '../images/Black and Red Modern Car Dealer Presentation (7).png' 
import ServiceThree from '../images/Black and Red Modern Car Dealer Presentation (8).png' 
import ServiceFour from '../images/Black and Red Modern Car Dealer Presentation (9).png' 
import { useEffect, useRef } from "react";

function Services() {


const DivTwoRef= useRef() ;

useEffect(()=>{



  

setTimeout(()=>{

gsap.fromTo(DivTwoRef.current.children,{
    y:5,
    opacity:0
},{
    y:0,
    opacity:1,
    stagger:0.5,
    duration:2,
    scrollTrigger:{
        trigger:".ServicesDIvTwo",
        start:"top center"
    }
});













},20);













},[])









  return (
<>

<div className='Services h-[220vh] sm:h-[190vh] md:h-[140vh] w-full bg-black flex flex-col justify-around items-center md:flex-row md:justify-start md:items-center'>


<div className='md:w-[50%] md:h-[100%] md:flex md:flex-col md:justify-center md:items-center ServiceMainDivLeft'>
    <div className='flex justify-center items-center  '>
        <h1 className='text-3xl md:text-5xl font-bold  '> <span className='text-white OUrSecives'> OUR</span>  <span className='text-red-700 '> SERVICE</span> </h1>
    </div>
    <div className='flex flex-col justify-center items-center text-center p-5'>
        <h1 className='text-md font-bold text-slate-200'> WRITE YOUR DESCRIPTION</h1>
        <p className='text-sm text-slate-400'> A presentation is a formal talk, often delivered in front of an
audience, aimed at conveying information, persuading others, or
sharing insights on a particular topic. Presentations can take
various forms, such as verbal speeches, slideshows,
demonstrations, or multimedia displays. They are commonly used
in academic, professional, and social settings to communicate
ideas, proposals, reports, or findings. Effective presentations
typically involve careful planning, organization, and delivery
techniques to engage the audience and effectively convey the
intended message.</p>
    </div>
</div>

{/*---------div Two ----------*/}
<div className='flex flex-col justify-center items-center p-5 md:w-[50%] md:h-[100%] md:p-2 ServicesDIvTwo' ref={DivTwoRef}>

{/*---------child  div  one  ----------*/}
<div className='flex flex-col justify-center items-center sm:flex-row'>
    <div className='h-25 w-25 sm:h-60 sm:w-60 sm:flex sm:justify-center sm:items-center'>
        <img src={ServicesOne} alt="ServicesOne" />
    </div>
    <div>
        <h1 className='text-md font-bold text-slate-200'> SERVICE 01</h1>
        <h1 className='text-sm text-slate-400'> A presentation is a formal talk, often delivered in front of an audience, aimed
at conveying information, persuading others, or sharing insights on a
particular topic.</h1>
    </div>
</div>

{/*---------child  div  two  ----------*/}
<div className='flex flex-col justify-center items-center sm:flex-row '>

<div className='h-25 w-25 sm:h-60 sm:w-60 sm:flex sm:justify-center sm:items-center'>
        <img src={ServiceTwo} alt="ServiceTwo" />
    </div>
    <div>
        <h1 className='text-md font-bold text-slate-200'> SERVICE 01</h1>
        <h1 className='text-sm text-slate-400'> A presentation is a formal talk, often delivered in front of an audience, aimed
at conveying information, persuading others, or sharing insights on a
particular topic.</h1>
    </div>


</div>
{/*---------child  div  three  ----------*/}
<div className='flex flex-col justify-center items-center sm:flex-row'>
<div className='h-25 w-25 sm:h-60 sm:w-60 sm:flex sm:justify-center sm:items-center'>
        <img src={ServiceThree} alt="ServiceThree" />
    </div>
    <div>
        <h1 className='text-md font-bold text-slate-200'> SERVICE 01</h1>
        <h1 className='text-sm text-slate-400'> A presentation is a formal talk, often delivered in front of an audience, aimed
at conveying information, persuading others, or sharing insights on a
particular topic.</h1>
    </div>
</div>
{/*---------child  div  three  ----------*/}

<div className='flex flex-col justify-center items-center sm:flex-row'>
<div className='h-25 w-25 sm:h-60 sm:w-60 sm:flex sm:justify-center sm:items-center'>
        <img src={ServiceFour} alt="ServiceFour" />
    </div>
    <div>
        <h1 className='text-md font-bold text-slate-200 '> SERVICE 01</h1>
        <h1 className='text-sm text-slate-400'> A presentation is a formal talk, often delivered in front of an audience, aimed
at conveying information, persuading others, or sharing insights on a
particular topic.</h1>
    </div>


</div>





</div>


</div>





</>
  )
}

export default Services