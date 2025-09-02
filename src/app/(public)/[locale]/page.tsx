import {MainBannerSection} from "@/modules/landing/components/main-banner/MainBannerSection";
import {OurProjectsSection} from "@/modules/landing/components/our-projects/OurProjectsSection";
import {TimeLineSection} from "@/modules/landing/components/timeline-section/TimeLineSection";
import {WhatWeDoSection} from "@/modules/landing/components/what-we-do/WhatWeDoSection";
import {PreviouslyWorkedSection} from "@/modules/landing/components/team-worked-places/PreviouslyWorkedSection";
import {WhoWeAreSection} from "@/modules/landing/components/who-we-are/WhoWeAreSection";
import {OurPartnersSection} from "@/modules/landing/components/our-partners/OurPartnersSection";
import {JoinUsSection} from "@/modules/landing/components/join-us/JoinUsSection";
import {use} from "react";
import {setRequestLocale} from "next-intl/server";
import {Locale} from "use-intl";


export default function Home({params}: PageProps<'/[locale]'>) {
    const {locale} = use(params);

    setRequestLocale(locale as Locale);

  return (
      <>
          <MainBannerSection />
          <OurProjectsSection />
          <TimeLineSection />
          <WhatWeDoSection />
          <PreviouslyWorkedSection />
          <WhoWeAreSection />
          <OurPartnersSection />
          <JoinUsSection />
      </>
  );
}
