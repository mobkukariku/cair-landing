"use client"
import { Container } from "@/shared/components/Container";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { useEffect, useState } from "react";

export const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={
            `sticky top-3 z-50 w-full ${isSticky ? "" : "mt-5"}`
        }>
            <Container>
                <header className={
                    `bg-card/70 backdrop-blur-md py-4 h-[70px] px-8 rounded-3xl
                    flex justify-between items-center border border-white/20
                    shadow-lg shadow-black/10 transition-all duration-300
                    ${isSticky ? "scale-[0.98] bg-card/80" : ""}`
                }>
                    <Image
                        width={104}
                        height={34}
                        src={"Logo.svg"}
                        alt={"logo"}
                        className="transition-transform duration-300 "
                    />
                    <section className={"flex gap-3"}>
                        <Button variant={"outline"} className="transition-all duration-300 hover:scale-105">
                            Sign in
                        </Button>
                        <Button className="transition-all duration-300 hover:scale-105">
                            Join Us
                        </Button>
                    </section>
                </header>
            </Container>
        </div>
    );
};