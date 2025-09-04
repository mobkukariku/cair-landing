"use client"
import { Container } from "@/shared/components/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import {HeaderMenu} from "@/shared/components/header/HeaderMenu";


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
        <div className={`sticky top-3 z-50 w-full ${isSticky ? "" : "mt-5"}`}>
            <Container>
                <header
                    className={`bg-card/70 backdrop-blur-md py-4 h-[70px] px-8 rounded-3xl
                    flex justify-between items-center border border-white/20
                    shadow-lg shadow-black/10 transition-all duration-300
                    ${isSticky ? "scale-[0.98] bg-card/80" : ""}`}
                >
                    <Image
                        width={104}
                        height={34}
                        src={"Logo.svg"}
                        alt={"logo"}
                        className="transition-transform duration-300 "
                    />
                    <HeaderMenu className={"max-[640px]:hidden"} />
                </header>
            </Container>
        </div>
    );
};