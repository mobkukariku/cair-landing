import {WorkedPlacesCarousel} from "@/modules/landing/components/team-worked-places/WorkedPlacesCarousel";

export const PreviouslyWorkedSection = () => {
    return (
        <div className={"my-20"}>
            <h3 className={"text-foreground text-2xl font-bold text-center"}>Our team has previously worked at</h3>
            <WorkedPlacesCarousel />
        </div>
    )
}