"use client"
import {Container} from "@/shared/components/Container";
import React, {useState} from "react";
import dynamic from "next/dynamic";
import {TimeLine} from "@/modules/landing/components/timeline-section/ui/TimeLine";
import {TimeLineSkeleton} from "@/modules/landing/components/timeline-section/ui/TimeLineSkeleton";
import {useTranslations} from "next-intl";

const contents = {
    "2022": dynamic(() => import("@/modules/landing/components/timeline-section/ui/TimelineContent/Content22"), {
        ssr: false,
        loading: () => <TimeLineSkeleton />
    }),
    "2023": dynamic(() => import("@/modules/landing/components/timeline-section/ui/TimelineContent/Content23"), {
        ssr: false,
        loading: () => <TimeLineSkeleton />
    }),
    "2024": dynamic(() => import("@/modules/landing/components/timeline-section/ui/TimelineContent/Content24"), {
        ssr: false,
        loading: () => <TimeLineSkeleton />
    })
};


export const TimeLineSection = () => {
    const [activeYear, setActiveYear] = useState<string | null>("2022");

    const t = useTranslations('landing.timeLine');

    const Content = activeYear ? contents[activeYear as keyof typeof contents] : contents["2022"];

    return (
        <Container className={"pt-[120px]"}>
            <h2 className={"text-[40px] max-[768px]:text-[36px] max-[512px]:text-[28px] font-black "}>
                {t('title')}
            </h2>
            <p className={"w-[550px] max-[640px]:w-fit text-[#F0F9FF] opacity-70 mt-[20px] max-[512px]:text-[14px]"}>
                {t('description')}
            </p>
            <hr className={"my-10  max-[512px]:my-20 border-card"}/>
            <section className={"flex flex-row max-[640px]:flex-col-reverse max-[640px]:gap-20 items-center justify-between"}>
                <Content />
                <TimeLine years={Object.keys(contents)} setActiveYear={setActiveYear} activeYear={activeYear} />
            </section>
            <hr className={"my-10 max-[512px]:my-20 border-card"}/>
        </Container>
    )
}