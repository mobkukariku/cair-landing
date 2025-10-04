"use client";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import { ProjectItem } from "@/modules/landing/components/our-projects/ui/ProjectItem";
import Autoscroll from "embla-carousel-auto-scroll";

export const ProjectsCarousel = () => {
    const [speed, setSpeed] = useState(2);

    useEffect(() => {
        if (window.innerWidth < 512) {
            setSpeed(0.5); // меняем только на клиенте
        }
    }, []);

    return (
        <Carousel
            plugins={[
                Autoscroll({
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                    playOnInit: true,
                    speed,
                }),
            ]}
            opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
            className="w-full mb-5 mt-10"
        >
            <CarouselContent >
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="shrink-0 basis-auto"
                    >
                        <ProjectItem
                            title="KZH"
                            shortDescription="Platform for learning the history of Kazakhstan"
                            imageSRC="/projects/KZH.svg"
                            description="KZH is an interactive educational platform designed to make learning the history of Kazakhstan engaging and accessible. Users can explore historical events, timelines, important figures, and cultural milestones through modern digital tools."
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};
