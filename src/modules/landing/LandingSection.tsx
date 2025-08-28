import {Container} from "@/shared/components/Container";
import Image from "next/image";
import {LandingVector} from "@/modules/landing/LandingVector";
import {BookOpenIcon, BracesIcon, ShieldCheckIcon} from "lucide-react";
import {MainBannerText} from "@/modules/landing/MainBannerText";

export default function LandingSection() {
    return (
        <Container className={"h-[650px]"}>
            <div className={"relative"}>
                <MainBannerText  />
                <Image
                    className="mt-[60px] w-[1076px] h-[350px]"
                    width={1076}
                    height={350}
                    src={"/landing/vector-1.svg"}
                    alt={"vector-1"}
                />
                <div className={"absolute left-1/2  -translate-x-1/2 top-[300px]"}>
                    <div className={"flex items-end justify-center gap-4"}>
                        <LandingVector
                            imageSrc={"/landing/vector-2.svg"}
                            title={"Research"}
                            icon={<BookOpenIcon width={46} height={46} />}
                        />
                        <LandingVector
                            imageSrc={"/landing/vector-3.svg"}
                            title={"Development"}
                            icon={<BracesIcon width={46} height={46} />}
                        />
                        <LandingVector
                            imageSrc={"/landing/vector-4.svg"}
                            title={"Certification"}
                            icon={<ShieldCheckIcon width={46} height={46} />}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}
