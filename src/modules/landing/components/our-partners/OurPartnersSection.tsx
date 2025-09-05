import {CompaniesCarousel} from "@/modules/landing/shared/ui/CompaniesCarousel";
import {companies} from "@/modules/landing/components/our-partners/constants";
import {useTranslations} from "next-intl";

export const OurPartnersSection = () => {

    const t = useTranslations('landing.ourPartners');

    return (
        <section>
            <h3 className={"font-bold text-[36px] max-[768px]:text-[32px] max-[512px]:text-[28px] text-center mt-30"}>
                {t('title')}
            </h3>
            <CompaniesCarousel items={companies} />
        </section>
    )
}