import {WorkedPlacesCarousel} from "@/modules/landing/components/team-worked-places/ui/WorkedPlacesCarousel";

export const PreviouslyWorkedSection = () => {
    return (
        <section className={"my-20"}>
            <h3 className={"text-foreground text-2xl font-bold text-center"}>Our team has previously worked at</h3>
            <WorkedPlacesCarousel />
        </section>
    )
}