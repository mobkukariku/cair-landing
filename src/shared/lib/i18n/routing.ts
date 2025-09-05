import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
    locales: ['en', 'ru', 'kz'],
    defaultLocale: 'en',
    pathnames: {
        '/': '/'
    }
})

export type Locale = (typeof routing.locales)[number];
