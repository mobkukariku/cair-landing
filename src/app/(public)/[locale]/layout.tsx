import "../../globals.css";
import {Header} from "@/shared/components/header/ui/Header";
import {Footer} from "@/shared/components/Footer";
import {hasLocale} from "use-intl";
import {routing} from "@/shared/lib/i18n/routing";
import {notFound} from "next/navigation";
import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";

interface Props {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function PublicLayout(
    { children, params }: Props,
) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) notFound();
    const messages = await getMessages();



  return (
      <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
      </NextIntlClientProvider>
  );
}


export async function generateStaticParams() {
    return routing.locales.map((locale) => ({
        locale: locale
    }));
}