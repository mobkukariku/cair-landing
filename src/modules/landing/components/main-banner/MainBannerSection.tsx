// MainBannerSection.tsx
"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from 'next-intl';
import Image from "next/image";
import {SubVectors} from "@/modules/landing/components/main-banner/ui/SubVectors";
import {MainBannerText} from "@/modules/landing/components/main-banner/ui/MainBannerText";

export const MainBannerSection = () => {
    const locale = useLocale();

    return (
        <section className="relative">
            <div className="relative h-[1000px] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={locale}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex justify-center inset-0"
                    >
                        <MainBannerText />
                        <Image
                            className="mt-[60px] w-[1076px] h-[350px]"
                            width={1076}
                            height={350}
                            src={"/landing/vector-1.svg"}
                            alt={"vector-1"}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            <AnimatePresence >
                <motion.div
                    key={locale}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <SubVectors />
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

