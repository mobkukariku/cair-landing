import {Container} from "@/shared/components/Container";
import {Button} from "@/shared/ui/button";

export const JoinUsSection = () => {

    return (
        <Container className={"flex flex-col my-30 justify-center items-center gap-5"}>
            <h3 className={"text-center text-3xl font-bold"}>Join CAIR</h3>
            <p className={"text-center opacity-80 max-w-[680px]"}>Join a diverse, international organization with team members spanning multiple continents. We champion and pioneer remote work practices, setting industry standards.</p>
            <Button>
                <a target={"_blank"} href="https://docs.google.com/forms/d/e/1FAIpQLSc4py_BCIXQ_4HhSM79TDihBoIdpSBNaGJkdjHEHLc7pW58-w/viewform">Join Us</a>
            </Button>
        </Container>
    )
}