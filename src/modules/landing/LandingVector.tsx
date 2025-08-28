import {React} from "react";
import Image from "next/image";

interface LandingVector {
    imageSrc: string;
    icon: React.ReactNode;
    title: string;
}

export const LandingVector = ({imageSrc, icon, title}:LandingVector) => {
    return (
        <div className="relative w-[344px] ">
            <Image
                width={344}
                height={270}
                src={imageSrc}
                alt={title}
            />
            <div className={"flex text-black flex-col items-center justify-center gap-1 absolute  left-1/2  -translate-x-1/2  top-1/2 -translate-y-1/2"}>
                {icon}
                <p className={"text-[24px] font-bold"}>{title}</p>
            </div>
        </div>
    )
}
