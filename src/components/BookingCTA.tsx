"use client";

import { Button, Heading, Text, Background, Column } from "@once-ui-system/core";
import type { opacity, SpacingToken } from "@once-ui-system/core";

interface BookingCTAConfig {
  display: boolean;
  title: string;
  description: string;
  calendlyUrl: string;
  effects: {
    mask: { x: number; y: number; radius: number; cursor: boolean };
    gradient: {
      display: boolean;
      opacity: number;
      x: number;
      y: number;
      width: number;
      height: number;
      tilt: number;
      colorStart: string;
      colorEnd: string;
    };
    dots: {
      display: boolean;
      opacity: number;
      size: string;
      color: string;
    };
    grid: {
      display: boolean;
      opacity: number;
      color: string;
      width: string;
      height: string;
    };
    lines: {
      display: boolean;
      opacity: number;
      size: string;
      thickness: number;
      angle: number;
      color: string;
    };
  };
}

const bookingConfig: BookingCTAConfig = {
  display: true,
  title: "Book a Discovery Call",
  description: "Arrange a no-obligation consultation to explore how we can work together.",
  calendlyUrl: "https://cal.com/mhitaryan",
  effects: {
    mask: { x: 50, y: 0, radius: 100, cursor: true },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

interface BookingCTAOverrides {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const BookingCTA: React.FC<React.ComponentProps<typeof Column> & BookingCTAOverrides> = ({ title, description, buttonText, buttonHref, ...flex }) => {
  if (!bookingConfig.display) return null;
  const displayTitle = title ?? bookingConfig.title;
  const displayDescription = description ?? bookingConfig.description;
  const displayButtonText = buttonText ?? "Book Now";
  const displayButtonHref = buttonHref ?? bookingConfig.calendlyUrl;

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: bookingConfig.effects.mask.x,
          y: bookingConfig.effects.mask.y,
          radius: bookingConfig.effects.mask.radius,
          cursor: bookingConfig.effects.mask.cursor,
        }}
        gradient={{
          display: bookingConfig.effects.gradient.display,
          opacity: bookingConfig.effects.gradient.opacity as opacity,
          x: bookingConfig.effects.gradient.x,
          y: bookingConfig.effects.gradient.y,
          width: bookingConfig.effects.gradient.width,
          height: bookingConfig.effects.gradient.height,
          tilt: bookingConfig.effects.gradient.tilt,
          colorStart: bookingConfig.effects.gradient.colorStart,
          colorEnd: bookingConfig.effects.gradient.colorEnd,
        }}
        dots={{
          display: bookingConfig.effects.dots.display,
          opacity: bookingConfig.effects.dots.opacity as opacity,
          size: bookingConfig.effects.dots.size as SpacingToken,
          color: bookingConfig.effects.dots.color,
        }}
        grid={{
          display: bookingConfig.effects.grid.display,
          opacity: bookingConfig.effects.grid.opacity as opacity,
          color: bookingConfig.effects.grid.color,
          width: bookingConfig.effects.grid.width,
          height: bookingConfig.effects.grid.height,
        }}
        lines={{
          display: bookingConfig.effects.lines.display,
          opacity: bookingConfig.effects.lines.opacity as opacity,
          size: bookingConfig.effects.lines.size as SpacingToken,
          thickness: bookingConfig.effects.lines.thickness,
          angle: bookingConfig.effects.lines.angle,
          color: bookingConfig.effects.lines.color,
        }}
      />
      
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {displayTitle}
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
          {displayDescription}
        </Text>
      </Column>
      
      <a
        href={displayButtonHref}
        target={displayButtonHref.startsWith('mailto') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', width: '100%', maxWidth: '384px' }}
      >
        <Button size="m" fillWidth>
          {displayButtonText}
        </Button>
      </a>
    </Column>
  );
};