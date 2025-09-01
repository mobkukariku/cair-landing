import {ReactNode} from "react";
import {NextIntlClientProvider} from "next-intl";
import {hasLocale} from "use-intl";
import {routing} from "@/shared/lib/i18n/routing";
import {notFound} from "next/navigation";
import {getMessages} from "next-intl/server";

interface LayoutProps {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocalLayout({ children, params }: LayoutProps) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) notFound();

    const messages = await getMessages();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({
        locale: locale
    }));
}