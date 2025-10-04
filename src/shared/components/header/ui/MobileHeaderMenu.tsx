"use client"
import {Button} from "@/shared/ui/button";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

interface Props {
    className?: string;
}



export const MobileHeaderMenu = ({className}:Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <AnimatePresence mode={"wait"}>
            <div className={`${className}`}>

                <Button className={"py-2 rounded-2xl bg-primary/50 border border-primary/70"} onClick={toggleMenu}>Menu</Button>

                {isOpen && (
                    <motion.div
                        className="absolute w-full h-fit left-0 top-20 py-10 px-5
                     bg-card backdrop-blur-md rounded-2xl
                     border border-white/20 shadow-lg shadow-black/10"
                        initial={{ opacity: 0, y: -20, }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <div className={"flex flex-col gap-4    "}>
                            <Button variant={"outline"}>Sign in</Button>
                            <Button className={"w-full bg-primary rounded-xl h-10"}>Join us</Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </AnimatePresence>
    )
}