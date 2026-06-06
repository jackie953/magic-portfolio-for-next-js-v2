"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

import {
  routes,
  display,
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

const navLinkStyle = (active: boolean): React.CSSProperties => ({
  display: "block",
  padding: "13px 20px",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: active ? 600 : 400,
  color: active
    ? "var(--neutral-on-background-strong)"
    : "var(--neutral-on-background-weak)",
  borderBottom: "1px solid var(--neutral-alpha-weak)",
  transition: "background 0.15s",
});

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Close on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />

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
      >
        {/* LEFT: Site name — always visible */}
        <Row paddingLeft="12" fillWidth vertical="center">
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "var(--header-color)",
              fontSize: "clamp(1rem, 2.8vw, 1.375rem)",
              fontWeight: 600,
              letterSpacing: "0.02em",
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              whiteSpace: "nowrap",
            }}
          >
            Jacqueline Mhitaryan
          </Link>
        </Row>

        {/* CENTER: Pill nav — desktop only */}
        <Row fillWidth horizontal="center" className={styles.desktopOnly}>
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

        {/* RIGHT: Timezone — desktop only */}
        <Flex fillWidth horizontal="end" vertical="center" className={styles.desktopOnly}>
          <Flex paddingRight="12" horizontal="end" vertical="center" textVariant="body-default-s">
            Europe/Stockholm
          </Flex>
        </Flex>

        {/* MOBILE: Hamburger + dropdown — mobile only */}
        <div ref={menuRef} className={styles.mobileNav}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className={styles.hamburger}
          >
            {menuOpen
              ? <X size={22} strokeWidth={2} />
              : <Menu size={22} strokeWidth={2} />
            }
          </button>

          {menuOpen && (
            <div className={styles.mobileDropdown}>
              {routes["/"] && (
                <Link href="/" style={navLinkStyle(pathname === "/")} onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              )}
              {routes["/about"] && (
                <Link href="/about" style={navLinkStyle(pathname === "/about")} onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              )}
              {routes["/services"] && (
                <Link href={services.path} style={navLinkStyle(pathname.startsWith("/services"))} onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
              )}
              {routes["/work"] && (
                <Link href="/work" style={navLinkStyle(pathname.startsWith("/work"))} onClick={() => setMenuOpen(false)}>
                  Work
                </Link>
              )}
              {routes["/blog"] && (
                <Link href="/blog" style={navLinkStyle(pathname.startsWith("/blog"))} onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
              )}
              {routes["/contact"] && (
                <Link href={contact.path} style={navLinkStyle(pathname.startsWith("/contact"))} onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              )}
              {display.themeSwitcher && (
                <div style={{
                  padding: "12px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <span style={{ fontSize: "1rem", color: "var(--neutral-on-background-weak)" }}>Theme</span>
                  <ThemeToggle />
                </div>
              )}
            </div>
          )}
        </div>
      </Row>
    </>
  );
};
