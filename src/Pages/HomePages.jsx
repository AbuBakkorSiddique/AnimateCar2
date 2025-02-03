
import NavigationBar from "../masterComponens/NavigationBar"
import HomeHeroSection from "../childComponens/HomeHeroSection";
import WelcomeComponens from "../childComponens/WelcomeComponens";
import MissionComponens from "../childComponens/MissionComponens";
import Provide from "../childComponens/Provide";
import Services from "../childComponens/Services";
import Portfolio from "../childComponens/Portfolio";
import Client from "../childComponens/Client";
import ContactPage from "../childComponens/ContactPage";
import Fotter from "../childComponens/Fotter";

function HomePages() {
  return (
<>
<div>
<NavigationBar/>
<HomeHeroSection/>
<WelcomeComponens/>
<MissionComponens/>
<Provide/>
<Services/>
<Portfolio/>
<Client/>
<ContactPage/>
<Fotter/>

</div>

</>
  )
}

export default HomePages