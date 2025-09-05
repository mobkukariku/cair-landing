import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/shared/lib/i18n/routing";

export const useLangSwitch = () => {
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

    return { currentLocale, switchLocale };
};
