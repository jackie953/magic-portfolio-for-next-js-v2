import "@/styles/tailwind.css";
import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";
import { Analytics } from "@vercel/analytics/next"; 


import classNames from "classnames";

import {
  Background,
  Column,
  Flex,
  Meta,
  type opacity,
  RevealFx,
  type SpacingToken,
} from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers } from "@/components";
import { baseURL, effects, fonts, style, dataStyle, home } from "@/resources";

import CTAWrapper from '@/components/CTAWrapper'; // ✅ add this instead

export async function generateMetadata() {
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
        {/* ❌ Remove the old theme-init if it toggles theme.
            If you keep it, ensure it DOES NOT set data-theme or add/remove
            'dark' on <html>. next-themes will handle that. */}
      </head>
      <body>
          <Providers>
            <Flex
              fillWidth
              className={classNames(
                fonts.heading.variable,
                fonts.body.variable,
                fonts.label.variable,
                fonts.code.variable,
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
                  <Background
                    mask={{
                      x: effects.mask.x,
                      y: effects.mask.y,
                      radius: effects.mask.radius,
                      cursor: effects.mask.cursor,
                    }}
                    gradient={{
                      display: effects.gradient.display,
                      opacity: effects.gradient.opacity as opacity,
                      x: effects.gradient.x,
                      y: effects.gradient.y,
                      width: effects.gradient.width,
                      height: effects.gradient.height,
                      tilt: effects.gradient.tilt,
                      colorStart: effects.gradient.colorStart,
                      colorEnd: effects.gradient.colorEnd,
                    }}
                    dots={{
                      display: effects.dots.display,
                      opacity: effects.dots.opacity as opacity,
                      size: effects.dots.size as SpacingToken,
                      color: effects.dots.color,
                    }}
                    grid={{
                      display: effects.grid.display,
                      opacity: effects.grid.opacity as opacity,
                      color: effects.grid.color,
                      width: effects.grid.width,
                      height: effects.grid.height,
                    }}
                    lines={{
                      display: effects.lines.display,
                      opacity: effects.lines.opacity as opacity,
                      size: effects.lines.size as SpacingToken,
                      thickness: effects.lines.thickness,
                      angle: effects.lines.angle,
                      color: effects.lines.color,
                    }}
                  />
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
