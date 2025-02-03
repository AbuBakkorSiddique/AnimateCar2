import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect } from 'react';
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger);
import ProvideCarOne from '../images/Black and Red Modern Car Dealer Presentation (4).png'
import ProvideCartwo from '../images/Black and Red Modern Car Dealer Presentation (5).png';

function Provide() {



useEffect(()=>{




  setTimeout(()=>{


gsap.fromTo(".provideOne",{
scale:2.5

},{
scale:1,
scrollTrigger:{

trigger:".Provide_one",
start:"top 60%",
scrub:true
}

})


gsap.fromTo(".prodivdeTwo",{
scale:1
},{
scale:2,
duration:0.5,
scrollTrigger:{
  trigger:".Provide_one",
  start:"top 60%",
  scrub:true
}

})




  },20)
},[])


  return (
<>

<div className='Provide h-screen w-full bg-black flex justify-center items-center flex-col'>

<div className='Provide_one h-[20%] w-full  flex flex-col justify-center items-center '>
<h1 className='text-xl md:text-4xl  font-bold text-white font-serif provideOne'> PROVIDE VARIOUS TYPES </h1>
<h1 className='text-xl md:text-3xl font-bold text-red-700 font-serif  prodivdeTwo'> OF NEW AND USED CAR </h1>
</div>
<div className='Provide_two flex flex-col justify-center items-center h-[80%] w-full sm:flex-row '>

<div className='flex justify-center items-center h-[50%] w-full sm:h-[80%] sm:w-[50%] '>
    
    <img src={ProvideCartwo} alt="ProvideCartwo" />
</div>
<div className='flex justify-center items-center h-[50%] w-full sm:h-[80%] sm:w-[50%] '>
<img src={ProvideCarOne} alt="ProvideCarOne" />
</div>
</div>







</div>







</>
  )
}

export default Provide