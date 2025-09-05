import {Container} from "@/shared/components/Container";
import {BookOpenIcon, BracesIcon, ShieldCheckIcon} from "lucide-react";
import {MainBannerText} from "@/modules/landing/components/main-banner/ui/MainBannerText";
import {LandingVector} from "@/modules/landing/components/main-banner/ui/LandingVector";
import {Shape1} from "@/modules/landing/components/main-banner/ui/Shape1";
import {Shape2} from "@/modules/landing/components/main-banner/ui/Shape2";
import {Shape3} from "@/modules/landing/components/main-banner/ui/Shape3";
import {Shape4} from "@/modules/landing/components/main-banner/ui/Shape4";
import {useTranslations} from "next-intl";

export function MainBannerSection() {
    const t = useTranslations("landing.mainBanner");

    return (
        <Container className={"h-[600px] max-[512px]:h-fit max-[512px]:mb-20"}>
            <div className={"relative"}>
                <MainBannerText />
               <div className={"mt-10 max-[512px]:hidden"}>
                   <Shape1 />
               </div>
                <div className={"-mt-[50px] max-[512px]:mt-[150px]"}>
                    <div className={"flex max-[512px]:flex-col max-[512px]:items-center items-end justify-center gap-4 "}>
                        <LandingVector
                            vector={<Shape2 />}
                            title={t('research')}
                            colorText="#2ABF84"
                            icon={<BookOpenIcon className={"w-[46px] h-[46px] max-[512px]:w-[26px] max-[512px]:h-[26px]"} />}
                        />
                        <LandingVector
                            vector={<Shape3 />}
                            title={t('development')}
                            colorText="#2F75C8"
                            icon={<BracesIcon className={"w-[46px] h-[46px] max-[512px]:w-[26px] max-[512px]:h-[26px]"} />}
                        />
                        <LandingVector
                            vector={<Shape4 />}
                            title={t('certification')}
                            colorText="#8440E3"
                            icon={<ShieldCheckIcon className={"w-[46px] h-[46px] max-[512px]:w-[26px] max-[512px]:h-[26px]"} />}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}