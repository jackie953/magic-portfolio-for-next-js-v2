"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link"; // ADD THIS LINE

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";
import 'animate.css';

import {
  routes,
  display,
  person,
  about,
  blog,
  work,
  services,
  contact,
} from "@/resources";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat(locale, options).format(now));
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, [timeZone, locale]);
  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade hide s={{ hide: false }} fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />

      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{ position: "fixed" }}
      >
        {/* LEFT SIDE: Company name */}
        <Row paddingLeft="12" fillWidth vertical="center">
        <Link 
        href="/" 
        style={{ 
          textDecoration: 'none', 
          color: 'var(--header-color)', 
          fontSize: '1.25rem', // Bump to 20px
          fontWeight: 600,
          letterSpacing: '0.02em',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' // Force clean sans-serif
        }}
      >
        Jacqueline Mhitaryan
      </Link>
        </Row>

        {/* CENTER: Navigation */}
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}

              <Line background="neutral-alpha-medium" vert maxHeight="24" />

              {routes["/about"] && (
                <ToggleButton href="/about" label={about.label} selected={pathname === "/about"} />
              )}

              {routes["/work"] && (
                <ToggleButton href="/work" label={work.label} selected={pathname.startsWith("/work")} />
              )}

              {routes["/services"] && (
                <ToggleButton href={services.path} label={services.label} selected={pathname.startsWith("/services")} />
              )}

              {routes["/contact"] && (
                <ToggleButton href={contact.path} label={contact.label} selected={pathname.startsWith("/contact")} />
              )}

              {routes["/blog"] && (
                <ToggleButton href="/blog" label={blog.label} selected={pathname.startsWith("/blog")} />
              )}

              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>

        {/* RIGHT SIDE: Timezone */}
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex paddingRight="12" horizontal="end" vertical="center" textVariant="body-default-s">
            Europe/Stockholm
          </Flex>
        </Flex>
      </Row>
    </>
  );
};