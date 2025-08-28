import {MainBannerSection} from "@/modules/landing/components/main-banner/MainBannerSection";
import {OurProjectsSection} from "@/modules/landing/components/our-projects/OurProjectsSection";
import {TimeLineSection} from "@/modules/landing/components/timeline-section/TimeLineSection";
import {WhatWeDoSection} from "@/modules/landing/components/what-we-do/WhatWeDoSection";
import {PreviouslyWorkedSection} from "@/modules/landing/components/team-worked-places/PreviouslyWorkedSection";
import {WhoWeAreSection} from "@/modules/landing/components/who-we-are/WhoWeAreSection";


export default function Home() {
  return (
      <>
          <MainBannerSection />
          <OurProjectsSection />
          <TimeLineSection />
          <WhatWeDoSection />
          <PreviouslyWorkedSection />
          <WhoWeAreSection />
      </>
  );
}
