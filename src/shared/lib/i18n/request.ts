import {getRequestConfig} from "next-intl/server";
import LandingMessages from "@/modules/landing/messages";
import {hasLocale} from "use-intl";
import {routing} from "@/shared/lib/i18n/routing";

export default getRequestConfig(async ({requestLocale}) => {

    const requested = await requestLocale;


    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;


    return {
        locale,
        messages: {
            landing: LandingMessages[locale as keyof typeof LandingMessages]
        }
    }
})