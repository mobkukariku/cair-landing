import {Container} from "@/shared/components/Container";
import {Button} from "@/shared/ui/button";
import {useTranslations} from "next-intl";

export const JoinUsSection = () => {

    const t = useTranslations('landing.joinUs')

    return (
        <Container className={"flex flex-col my-30 justify-center items-center gap-5"}>
            <h3 className={"text-center text-[40px] max-[768px]:text-[36px] max-[512px]:text-[28px] font-bold"}>
                {t('title')}
            </h3>
            <p className={"text-center opacity-80 max-w-[680px] max-[512px]:text-[14px]"}>
                {t('description')}
            </p>
            <Button>
                <a target={"_blank"} href="https://docs.google.com/forms/d/e/1FAIpQLSc4py_BCIXQ_4HhSM79TDihBoIdpSBNaGJkdjHEHLc7pW58-w/viewform">Join Us</a>
            </Button>
        </Container>
    )
}