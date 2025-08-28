import {MainBannerSection} from "@/modules/landing/components/main-banner/MainBannerSection";
import {OurProjectsSection} from "@/modules/landing/components/our-projects/OurProjectsSection";
import {TimeLineSection} from "@/modules/landing/components/timeline-section/TimeLineSection";
import {WhatWeDoSection} from "@/modules/landing/components/what-we-do/WhatWeDoSection";


export default function Home() {
  return (
      <>
          <MainBannerSection />
          <OurProjectsSection />
          <TimeLineSection />
          <WhatWeDoSection />
      </>
  );
}
