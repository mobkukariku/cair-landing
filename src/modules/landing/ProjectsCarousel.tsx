import {Carousel, CarouselContent, CarouselItem} from "@/shared/ui/carousel";
import {ProjectItem} from "@/modules/landing/ProjectItem";

export const ProjectsCarousel = () => {
    return (
        <Carousel
            className=" w-full"
        >
            <CarouselContent>
                {Array.from({length: 20}).map((_, index) => (
                    <CarouselItem key={index} className={"basis-1/4"}>
                        <ProjectItem />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}