import {CompaniesCarousel} from "@/modules/landing/shared/ui/CompaniesCarousel";
import {companies} from "@/modules/landing/components/team-worked-places/constants";


export const PreviouslyWorkedSection = () => {
    return (
        <section className={"my-20"}>
            <h3 className={"text-foreground w-[90%] mx-auto text-[36px] max-[768px]:text-[32px] max-[512px]:text-[28px] font-bold text-center"}>Our team has previously worked at</h3>
            <CompaniesCarousel items={companies} />
        </section>
    )
}