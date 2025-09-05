import {Container} from "@/shared/components/Container";
import {Button} from "@/shared/ui/button";
import Image from "next/image";
import {useTranslations} from "next-intl";

export const WhatWeDoSection = () => {
    const t = useTranslations('landing.whatWeDo')

    return (
        <Container className={"flex flex-col max-[1076px]:gap-10 py-[100px]"}>
            <h3 className={"text-[40px] max-[768px]:text-[36px] max-[512px]:text-[28px] font-black  max-[1076px]:text-center text-foreground"}>
                {t('title')}
            </h3>
            <div className={"flex flex-row flex-wrap-reverse max-[1076px]:justify-center  justify-between  max-[1076px]:gap-10"}>
                <div className={"flex justify-center flex-col items-center "}>
                    <div className={"flex flex-col max-[512px]:text-[14px] px-5  mt-[30px] w-[400px]  max-[1076px]:w-full text-foreground opacity-70"}>
                        <li>
                            {t('point-1')}
                        </li>
                        <li>
                            {t('point-2')}
                        </li>
                        <li>
                            {t('point-2')}
                        </li>
                    </div>
                    <Button className={"mt-[30px] max-[1076px]:mt-[50px] max-[1076px]:w-[50%]"}>
                        <a target={"_blank"} href="https://docs.google.com/forms/d/e/1FAIpQLSc4py_BCIXQ_4HhSM79TDihBoIdpSBNaGJkdjHEHLc7pW58-w/viewform">Join Us</a>
                    </Button>
                </div>
                <Image
                    src={"/images/freedom-workshop.png"}
                    width={630}
                    height={380}
                    className={"h-[380px] max-[512px]:h-[200px] object-cover object-center rounded-xl"}
                    alt="What we do"

                />
            </div>
        </Container>
    )
}