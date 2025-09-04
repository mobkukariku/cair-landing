"use client";
import { useState, useEffect } from "react";
import { Tags } from "@/shared/ui/tags";
import Image from "next/image";

interface ProjectItemProps {
    imageSRC?: string;
    title?: string;
    shortDescription?: string;
    link?: string;
    description?: string;
}

export const ProjectItem = ({
                                imageSRC,
                                title,
                                shortDescription,
                                description,
                                link,
                            }: ProjectItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Проверяем ширину экрана
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640); // sm breakpoint
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const toggleOpen = () => {
        if (isMobile) setIsOpen((prev) => !prev);
    };

    return (
        <div
            className={`
          group w-[375px] max-[512px]:w-[320px] max-[512px]:h-[230px] h-[200px] overflow-hidden bg-card/20 rounded-2xl 
          border-2 border-card px-6 py-10 flex flex-col transition-all duration-300
          ${isOpen ? "h-[370px] max-[512px]:h-[450px]" : "hover:h-[370px]"}
        `}
            onClick={toggleOpen}
        >
            {imageSRC ? (
                <div className="flex justify-end">
                    <Image
                        width={50}
                        height={50}
                        src={imageSRC}
                        alt="project-image"
                        className="object-cover"
                    />
                </div>
            ) : null}

            <div
                className={`
            flex flex-col gap-2 mt-15 transition-all duration-300
            ${isOpen ? "mt-0" : "group-hover:mt-0"}
          `}
            >
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-sm opacity-50">{shortDescription}</p>
            </div>

            <div
                className={`
            mt-5 ease-in-out transition-all duration-300
            ${isOpen ? "opacity-100 max-h-[200px]" : "opacity-0 max-h-0 group-hover:opacity-100"}
          `}
            >
                <p>{description}</p>
            </div>

            <div
                className={`
            mt-40 transition-all duration-300
            ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
          `}
            >
                <Tags name="Software" />
            </div>
        </div>
    );
};
