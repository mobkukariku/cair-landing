import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/shared/ui/select";
import {Button} from "@/shared/ui/button";
import {useMemo} from "react";
import {routing} from "@/shared/lib/i18n/routing";
import {usePathname, useRouter} from "next/navigation";


interface Props {
    className?: string;
}

export const HeaderMenu = ({className}:Props) => {
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


    return (
        <section className={`flex items-center gap-3 ${className}`}>
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
    )
}