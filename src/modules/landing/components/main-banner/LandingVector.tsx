import React from "react";
import Image from "next/image";

interface LandingVector {
    imageSrc: string;
    icon: React.ReactNode;
    colorText?: string;
    title: string;
}

export const LandingVector = ({imageSrc, icon, title, colorText}:LandingVector) => {
    return (
        <div className="relative w-[344px] ">
            <Image
                width={344}
                height={270}
                src={imageSrc}
                alt={title}
            />
            <div
                className={`flex flex-col items-center justify-center gap-1 absolute  left-1/2  -translate-x-1/2  top-1/2 -translate-y-1/2`}
                style={{ color: colorText || "white" }}
            >
                {icon}
                <p className={"text-[24px] font-bold"}>{title}</p>
            </div>
        </div>
    )
}
