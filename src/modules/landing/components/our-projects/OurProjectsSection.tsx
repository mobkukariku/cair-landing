import {Container} from "@/shared/components/Container";
import {ProjectsCarousel} from "@/modules/landing/components/our-projects/ui/ProjectsCarousel";
import {useTranslations} from "next-intl";

export const OurProjectsSection = () => {

    const t = useTranslations("landing.ourProjects");

    return (
        <section>
            <Container>
                <h2 className={"text-[40px] max-[512px]:text-center max-[768px]:text-[36px] max-[512px]:text-[28px] font-bold text-foreground "}>
                    {t('title')}
                </h2>
            </Container>
            <ProjectsCarousel />
        </section>
    )
}