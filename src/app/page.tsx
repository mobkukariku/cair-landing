import LandingSection from "@/modules/landing/LandingSection";
import {OurProjectsSection} from "@/modules/landing/OurProjectsSection";
import {ProjectsCarousel} from "@/modules/landing/ProjectsCarousel";


export default function Home() {
  return (
      <>
          <LandingSection />
          <OurProjectsSection />
          <ProjectsCarousel />
      </>
  );
}
