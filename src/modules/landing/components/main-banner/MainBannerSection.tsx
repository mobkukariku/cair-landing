import {Container} from "@/shared/components/Container";
import Image from "next/image";
import {LandingVector} from "@/modules/landing/components/main-banner/ui/LandingVector";
import {BookOpenIcon, BracesIcon, ShieldCheckIcon} from "lucide-react";
import {MainBannerText} from "@/modules/landing/components/main-banner/ui/MainBannerText";

export function MainBannerSection() {
    return (
        <Container className={"h-[650px]"}>
            <div className={"relative"}>
                <MainBannerText />
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
                            colorText="#2ABF84"
                            icon={<BookOpenIcon width={46} height={46} />}
                        />
                        <LandingVector
                            imageSrc={"/landing/vector-3.svg"}
                            title={"Development"}
                            colorText="#2F75C8"
                            icon={<BracesIcon width={46} height={46} />}
                        />
                        <LandingVector
                            imageSrc={"/landing/vector-4.svg"}
                            title={"Certification"}
                            colorText="#8440E3"
                            icon={<ShieldCheckIcon width={46} height={46} />}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}
