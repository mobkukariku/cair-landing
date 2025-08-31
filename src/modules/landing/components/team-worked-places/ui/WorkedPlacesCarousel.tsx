"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import Autoscroll from "embla-carousel-auto-scroll";
import Image from "next/image";

const companies = [
    {
        name: "Qcloudy",
        logo: "/companies/qcloudy.png",
    },
    {
        name: "Freedom",
        logo: "/companies/freedom-holding.png",
    },
    {
        name: "MyCar",
        logo: "/companies/mycar.png",
    },
    {
        name: "Relog",
        logo: "/companies/relog.png",
    },
    {
        name: "racoonAi",
        logo: "/companies/racoonAi.png",
    },
    {
        name: "Kcell",
        logo: "/companies/kcell.png",
    },
    {
        name: "centerCredit",
        logo: "/companies/centercredit.png",
    },
    {
        name: "Wonder",
        logo: "/companies/wonderFBO.png",
    }
];

export const WorkedPlacesCarousel = () => {
    return (
        <div className={"bg-foreground mt-10"}>
            <Carousel
                opts={{ align: "center", loop: true }}
                plugins={[
                    Autoscroll({
                        playOnInit: true,
                        speed: 2,
                    }),
                ]}
                className={"w-full py-12 hidden max-[1000px]:block"}
            >
                <CarouselContent>
                    {companies.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-1/4 flex items-center justify-center"
                        >
                            <Image
                                width={80}
                                height={80}
                                src={item.logo}
                                alt={item.name}
                                className="object-contain"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className={"max-[1000px]:hidden flex w-full py-12 justify-center items-center gap-12"}>
                {companies.map((item, index) => (
                    <Image
                        key={index}
                        width={80}
                        height={80}
                        src={item.logo}
                        alt={item.name}
                        className="object-contain"
                    />
                ))}
            </div>
        </div>
    );
};
