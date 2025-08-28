import {Container} from "@/shared/components/Container";
import {ProjectsCarousel} from "@/modules/landing/components/our-projects/ProjectsCarousel";

export const OurProjectsSection = () => {

    return (
        <section>
            <Container>
                <h2 className={"text-[40px] font-bold text-foreground "}>Our projects</h2>
            </Container>
            <ProjectsCarousel />
        </section>
    )
}