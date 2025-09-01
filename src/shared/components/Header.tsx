"use client"
import { Container } from "@/shared/components/Container";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { useEffect, useMemo, useState } from "react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/shared/ui/select";
import {routing} from "@/shared/lib/i18n/routing";
import {usePathname, useRouter} from "next/navigation";

export const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const router = useRouter();
    const pathName = usePathname();

    const currentLocale = useMemo(() => {
        if (!pathName) return routing.defaultLocale;
        const segs = pathName.split("/");
        return segs[1] || routing.defaultLocale;
    }, [pathName]);

    const switchLocale = (locale: string) => {
        if (!pathName) return;
        const segments = pathName.split("/");
        segments[1] = locale;
        const nextPath = segments.join("/") || `/${locale}`;
        router.push(nextPath);
    };

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
                    <section className={"flex items-center gap-3"}>
                        <Select value={currentLocale} onValueChange={switchLocale}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ru">Russian</SelectItem>
                                <SelectItem value="en">English</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant={"outline"} className="transition-all duration-300 hover:scale-105">
                            Sign in
                        </Button>
                        <Button className="transition-all duration-300 hover:scale-105">
                            <a target={"_blank"} href="https://docs.google.com/forms/d/e/1FAIpQLSc4py_BCIXQ_4HhSM79TDihBoIdpSBNaGJkdjHEHLc7pW58-w/viewform">Join Us</a>
                        </Button>
                    </section>
                </header>
            </Container>
        </div>
    );
};