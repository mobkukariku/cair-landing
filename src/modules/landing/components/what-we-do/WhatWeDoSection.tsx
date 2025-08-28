import {Container} from "@/shared/components/Container";
import {Button} from "@/shared/ui/button";

export const WhatWeDoSection = () => {
    return (
        <Container className={"flex justify-between items-center py-[100px]"}>
           <div >
               <h3 className={"text-[40px] font-black text-foreground"}>What we do</h3>
               <div className={"flex flex-col gap-5 mt-[30px] w-[400px] text-foreground opacity-70"}>
                   <p>
                       Attract the best talent, and keep them. We offer companies comprehensive features to efficiently employ and manage global teams at scale.
                   </p>
                   <p>
                       Whether it’s onboarding, payroll, local employee compliance, or benefits administration, we simplify the process for half the price.
                   </p>
                   <p>
                       And as a global remote-first company ourselves, we understand the unique challenges of distributed work.
                   </p>
               </div>
               <Button className={"mt-[30px]"}>
                   Join us
               </Button>
           </div>
            <div className={"w-[652px] h-[369px] bg-foreground rounded-3xl"}></div>
        </Container>
    )
}