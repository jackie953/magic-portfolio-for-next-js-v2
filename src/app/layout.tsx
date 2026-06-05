import "@/styles/tailwind.css";
import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import classNames from "classnames";

import {
  Column,
  Flex,
  Meta,
  type opacity,
  RevealFx,
  type SpacingToken,
} from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers } from "@/components";
import { baseURL, effects, fonts, style, dataStyle, home } from "@/resources";

import CTAWrapper from "@/components/CTAWrapper";

export function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 🧠 Smart default theme: respects system preference and saved user choice */}
        <Script id="init-theme" strategy="beforeInteractive">
          {`
            try {
              const saved = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = saved || (prefersDark ? 'dark' : 'light');
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {
              document.documentElement.setAttribute('data-theme', 'light');
            }
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <Flex
            fillWidth
            className={classNames(
              fonts.heading.variable,
              fonts.body.variable,
              fonts.label.variable,
              fonts.code.variable
            )}
          >
            <Column
              background="page"
              fillWidth
              style={{ minHeight: "100vh" }}
              margin="0"
              padding="0"
              horizontal="center"
            >
              <RevealFx fill position="absolute">
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: 'radial-gradient(ellipse at 50% 0%, var(--accent-background-strong, rgba(120,80,200,0.35)) 0%, transparent 70%)',
                  opacity: (effects.gradient.opacity ?? 100) / 100,
                }} />
              </RevealFx>

              <Flex fillWidth minHeight="16" s={{ hide: true }} />
              <Header />
              <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
                <Flex horizontal="center" fillWidth minHeight="0">
                  <RouteGuard>{children}</RouteGuard>
                </Flex>
              </Flex>
              <Footer />
              <CTAWrapper />
            </Column>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
