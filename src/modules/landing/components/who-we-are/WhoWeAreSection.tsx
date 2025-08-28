import {Container} from "@/shared/components/Container";
import {WhoWeAreCardItem} from "@/modules/landing/components/who-we-are/WhoWeAreCardItem";
import {color} from "motion-dom";
import {CodeXmlIcon} from "lucide-react";

export const WhoWeAreSection = () => {
    return (
        <Container className={"my-10"}>
            <div>
                <h3
                    className={"text-[40px] font-bold"}
                >
                    Who we are
                </h3>
                <p className={"text-foreground opacity-70 w-[700px] mt-4"}>
                    Our team is made up of problem solvers and overachievers, and we seek out others who are also passionate and relentless in their respective missions. Our team has previously worked at TriNet, Indeed, Amazon, Monday.com, Goldman Sachs, Palantir, LinkedIn, DocuSign, PagerDuty.
                </p>
            </div>
            <div className={"flex mt-10 flex-wrap justify-center flex-row gap-4"}>
                <WhoWeAreCardItem
                    color={"#d4f542"}
                    icon={<CodeXmlIcon width={40} height={40} color={"#d4f542"} />}
                    name={"Development"}
                />
                <WhoWeAreCardItem
                    color={"#4A7EBB"}
                    icon={<CodeXmlIcon width={40} height={40} color={"#4A7EBB"} />}
                    name={"DevOps"}
                />
                <WhoWeAreCardItem
                    color={"#F7A16B"}
                    icon={<CodeXmlIcon width={40} height={40} color={"#F7A16B"} />}
                    name={"AI/ML"}
                />
                <WhoWeAreCardItem
                    color={"#F0F9FF"}
                    icon={<CodeXmlIcon width={40} height={40} color={"#F0F9FF"} />}
                    name={"Security"}
                />
                <WhoWeAreCardItem
                    color={"#42f5d7"}
                    icon={<CodeXmlIcon width={40} height={40} color={"#42f5d7"} />}
                    name={"Hardware"}
                />
            </div>
        </Container>
    )
}