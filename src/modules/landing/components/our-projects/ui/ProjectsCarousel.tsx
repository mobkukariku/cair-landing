"use client"
import {Carousel, CarouselContent, CarouselItem} from "@/shared/ui/carousel";
import {ProjectItem} from "@/modules/landing/components/our-projects/ui/ProjectItem";
import Autoscroll from "embla-carousel-auto-scroll"

export const ProjectsCarousel = () => {
    return (
        <Carousel
            plugins={[
                Autoscroll({
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                    playOnInit: true,
                    speed: 2
                }),
            ]}
            opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
            className="w-full my-20"
        >
            <CarouselContent className="flex space-x-[150px]">
                {Array.from({length: 10}).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="flex-[0_0_auto] w-[250px] mr-[150px]"
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
    )
}
