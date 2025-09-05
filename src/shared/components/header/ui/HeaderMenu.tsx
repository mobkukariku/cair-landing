import { Button } from "@/shared/ui/button";

interface Props {
    className?: string;
}

export const HeaderMenu = ({ className }: Props) => {
    return (
        <section className={`flex items-center gap-3 ${className}`}>
            <Button variant="outline" className="transition-all duration-300 hover:scale-105">
                Sign in
            </Button>
            <Button className="transition-all duration-300 hover:scale-105">
                <a
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc4py_BCIXQ_4HhSM79TDihBoIdpSBNaGJkdjHEHLc7pW58-w/viewform"
                >
                    Join Us
                </a>
            </Button>
        </section>
    );
};
