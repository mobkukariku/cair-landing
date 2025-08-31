import {PartnersAndInvestorsList} from "@/modules/landing/components/our-partners/ui/PartnersAndInvestorsList";

export const OurPartnersSection = () => {
    return (
        <section>
            <h3 className={"font-bold text-3xl text-center mt-10"}>Our investors and partners</h3>
            <PartnersAndInvestorsList />
        </section>
    )
}