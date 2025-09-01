import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: 'standalone',
};

const withNextIntl = createNextIntlPlugin(
    './src/shared/lib/i18n/i18n.ts'
);
export default withNextIntl(nextConfig);
