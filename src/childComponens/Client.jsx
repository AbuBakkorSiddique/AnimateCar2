import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);


import ClientOne from '../images/Black and Red Modern Car Dealer Presentation (13).png'
import ClientTwo from '../images/Black and Red Modern Car Dealer Presentation (14).png'
import { useEffect, useRef } from "react";

function Client() {
const ReviewRef = useRef()

useEffect(()=>{


setTimeout(()=>{


    gsap.fromTo( ReviewRef.current.children,{

    x:50,
    opacity:0
    },{
x:0,
opacity:1,
stagger:0.7,
scrollTrigger:{
    trigger:".ReviewDIvMain",
    start:"top center "
}



    })
},20)

},[])









  return (
 <>
 <div className='h-[160vh] sm:h-[90vh] w-full bg-black flex flex-col justify-between items-center sm:flex-row sm:p-3'>


<div className='flex flex-col justify-center items-center  sm:p-2 sm:w-[50%] sm:h-[100%] sm:justify-center sm:items-center  '>
<h1 className='text-4xl font-bold text-white  md:text-6xl'> OUR CLIENT</h1>
<h1 className='text-4xl font-bold text-red-600 md:text-5xl'> TESTIMONY </h1>
<h1 className='text-sm p-5 text-slate-400 '> 
A presentation is a formal talk, often delivered in front of an
audience, aimed at conveying information, persuading others,
or sharing insights on a particular topic. Presentations can take
various forms, such as verbal speeches, slideshows,
demonstrations, or multimedia displays. They are commonly
used in academic, professional, and social settings to
communicate ideas, proposals, reports, or findings. Effective
presentations typically involve careful planning, organization,
and delivery techniques to engage the audience and effectively
convey the intended message.
</h1>

</div>






<div className='p-3 sm:w-[50%] sm:h-[100%]  sm:flex sm:justify-center sm:items-center sm:flex-col sm:pr-3 ReviewDIvMain' ref={ReviewRef}>

<div className='flex flex-row justify-between items-center'>
    <div className='w-[30%]'>
        <img src={ClientOne} alt="ClientOne" />
    </div>
    <div className='w-[70%]'>
        <h1 className='text-md font-bold text-slate-200'> HARUMI KOBAYASHI</h1>
        <h1 className='text-slate-400 text-sm'> A presentation is a formal talk, often delivered in front of an
audience, aimed at conveying information, persuading others, or
sharing insights on a particular topic. Presentations can take
various forms, such as verbal speeches, slideshows,
demonstrations, or multimedia displays.</h1>
    </div>
</div>




<div className='flex flex-row justify-between items-center pt-2 sm:justify-around'>
<div className='w-[30%]'>
        <img src={ClientTwo} alt="ClientTwo" />
    </div>
    <div className='w-[70%]'>
        <h1 className='text-md font-bold text-slate-200'> HARUMI KOBAYASHI</h1>
        <h1 className='text-slate-400 text-sm'> A presentation is a formal talk, often delivered in front of an
audience, aimed at conveying information, persuading others, or
sharing insights on a particular topic. Presentations can take
various forms, such as verbal speeches, slideshows,
demonstrations, or multimedia displays.</h1>
    </div>


</div>



</div>



    
 </div>
 
 
 
 
 
 
 
 </>
  )
}

export default Client