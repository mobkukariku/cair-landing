import {Tags} from "@/shared/ui/tags";
import Image from "next/image";
import Link from "next/link";

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
    return (
        <Link href={link || ""}>
            <div className={"group w-[375px] h-[200px] overflow-hidden bg-card/20 rounded-2xl border-2 border-card px-6 py-10 flex flex-col transition-all duration-300 hover:h-[370px]"}>
                {imageSRC ? (
                    <div className={"flex justify-end"}>
                        <Image
                            width={50}
                            height={50}
                            src={imageSRC}
                            alt={"project-image"}
                            className={"object-cover"}
                        />
                    </div>
                ): null}

                <div className={"flex flex-col gap-2 mt-15 group-hover:mt-0 transition-all duration-300 "}>
                    <h3 className={"text-2xl font-bold"}>{title}</h3>
                    <p className={"text-sm opacity-50"}>{shortDescription}</p>
                </div>

                <div className={"opacity-0 max-h-0 mt-5  ease-in-out group-hover:opacity-100 transition-all duration-300"}>
                    <p>{description}</p>
                </div>

                <div className={"opacity-0 mt-40 group-hover:opacity-100 transition-all duration-300 "}>
                    <Tags name={"Software"} />
                </div>
            </div>
        </Link>
    );
};
