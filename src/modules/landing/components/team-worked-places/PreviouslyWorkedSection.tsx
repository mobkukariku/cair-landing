import {CompaniesCarousel} from "@/modules/landing/shared/ui/CompaniesCarousel";
import {companies} from "@/modules/landing/components/team-worked-places/constants";
import {useTranslations} from "next-intl";


export const PreviouslyWorkedSection = () => {

    const t = useTranslations("landing.previouslyWorkedPlaces");

    return (
        <section className={"my-20"}>
            <h3 className={"text-foreground w-[90%] mx-auto text-[36px] max-[768px]:text-[32px] max-[512px]:text-[28px] font-bold text-center"}>
                {t('title')}
            </h3>
            <CompaniesCarousel items={companies} />
        </section>
    )
}