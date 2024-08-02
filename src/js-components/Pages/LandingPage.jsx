import NavSection from "../Landing-Page/NavSection";
import HeaderSection from "../Landing-Page/HeaderSection";
import CompanyIcon from "../Landing-Page/CompanyIcon";
import ServiceSection from "../Landing-Page/ServiceSection";
import ReviewSection from "../Landing-Page/ReviewSection";
import ProcedureSection from "../Landing-Page/ProcedureSection";
import NewsleterSection from "../Landing-Page/NewsleterSection";
import FAQSection from "../Landing-Page/FAQSection";
import FooterSection from "../Landing-Page/FooterSection";
import Projectsection from "../Landing-Page/Projectsection";
import IntroSection from "../Landing-Page/IntroSection";
import AboutSection from "../Landing-Page/AboutSection";

function LandingPage() {
  return (
    <div className="main-section">
      <NavSection />
      <HeaderSection />
      <CompanyIcon />
      <AboutSection />
      <ServiceSection />
      <ProcedureSection />
      <Projectsection />
      <ReviewSection />
      <FAQSection />
      <IntroSection />
      <NewsleterSection />
      <FooterSection />
    </div>
  );
}

export default LandingPage;
