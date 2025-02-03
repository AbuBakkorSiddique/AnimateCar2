import SplitType from 'split-type'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import WelcomeComponensImage from '../images/Black and Red Modern Car Dealer Presentation (1).png' ; 
import { useEffect } from 'react';


function WelcomeComponens() {

  useEffect(() => {
    // Ensure SplitType runs first
    const WelcomeText = new SplitType(".welcomeTO", { types: "chars" });

    setTimeout(() => {
      gsap.fromTo(
        WelcomeText.chars,
        {
          y: 5,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1, // Ekta ekta kore asbe
          scrollTrigger: {
            trigger: ".WelcomeComponens",
            start: "top center"
       
          },
        }
      );
    },2); // Small delay to ensure SplitType is ready
  }, []);



  return (
<>

<div className="WelcomeComponens h-[150vh] md:h-[100vh] w-full mt-0 bg-black md:flex  md:flex-row md:justify-between md:items-center">


    <div className="WelcomeComponens_left flex flex-col justify-center items-center text-center h-[50%] md:h-[80%] md:w-[50%]">

        <h1 className="text-4xl md:text-5xl  lg:text-7xl  font-bold text-white welcomeTO"> WELCOME TO</h1>
        <h1 className="text-4xl md:text-5xl lg:text-7xl  font-bold text-red-800"> OUR COMPANY</h1>
        <h1 className="text-sm text-slate-300 p-3 md:p-5 "> A presentation is a formal talk, often delivered in front of an audience,
aimed at conveying information, persuading others, or sharing insights
on a particular topic. Presentations can take various forms, such as
verbal speeches, slideshows, demonstrations, or multimedia displays.
They are commonly used in academic, professional, and social settings
to communicate ideas, proposals, reports, or findings. Effective
presentations typically involve careful planning, organization, and
delivery techniques to engage the audience and effectively convey the
intended message.</h1>

    </div>



    <div className="WelcomeComponens_right h-[50%] w-full md:h-[100%] md:w-[50%] flex justify-center items-center  "   >
      <img src={WelcomeComponensImage} alt="WelcomeComponensImage" className='h-[100%] w-[100%] ' style={{ clipPath: "polygon(27% 0, 86% 0, 75% 100%, 13% 100%)" }}/>
    </div>


</div>




</>
  )
}

export default WelcomeComponens