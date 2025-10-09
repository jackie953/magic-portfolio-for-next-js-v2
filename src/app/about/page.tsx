import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  RevealFx,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  // This 'structure' constant is now correct and matches your new content.
  const structure = [
    {
      title: about.aboutSection.title,
      display: about.aboutSection.display,
      items: [],
    },
    {
      title: about.howItStarted.title,
      display: about.howItStarted.display,
      items: [],
    },
    {
      title: about.approach.title,
      display: about.approach.display,
      items: [],
    },
    {
      title: about.whyWorkWithUs.title,
      display: about.whyWorkWithUs.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.workingTogether.title,
      display: about.workingTogether.display,
      items: [],
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      
      {/* ================================================================== */}
      {/* CHANGE THIS LINE: Replaced <Row> with <Column> and removed props   */}
      {/* ================================================================== */}
      <Column fillWidth>
        {/* This is the (now hidden) column that used to hold the avatar */}
        {!about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
          </Column>
        )}

        {/* This is your main content column */}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          {/* Main Header */}
          <Column
            id={about.aboutSection.title} // <-- UPDATED from intro.title
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
          </Column>

          {/* SECTION 1: About */}
          {about.aboutSection.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              <Heading as="h2" id={about.aboutSection.title} variant="display-strong-s" marginBottom="m">
                {about.aboutSection.title}
              </Heading>
              {about.aboutSection.description}
            </Column>
          )}


          {/* SECTION 2: How It Started */}
          {about.howItStarted.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              <Heading as="h2" id={about.howItStarted.title} variant="display-strong-s" marginBottom="m">
                {about.howItStarted.title}
              </Heading>
              {about.howItStarted.description}
              <Avatar src={person.avatar} size="xl" />
            </Column>
          )}

          {/* SECTION 3: Approach/Values */}
          {about.approach.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              <Heading as="h2" id={about.approach.title} variant="display-strong-s" marginBottom="m">
                {about.approach.title}
              </Heading>
              {about.approach.description}
            </Column>
          )}

          {/* SECTION 4: Why Work With Us */}
          {about.whyWorkWithUs.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              <Heading as="h2" id={about.whyWorkWithUs.title} variant="display-strong-s" marginBottom="m">
                {about.whyWorkWithUs.title}
              </Heading>
              {about.whyWorkWithUs.description}
              {about.calendar.display && (
                <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
                  <Button
                    id="schedule-call"
                    data-border="rounded"
                    href={about.calendar.link}
                    variant="secondary"
                    size="m"
                    weight="default"
                    arrowIcon
                    className="text-neutral-900 dark:text-white"
                  >
                    <Row vertical="center" gap="8">
                      <Icon name="calendar" onBackground="brand-weak" />
                      <span>Schedule a call</span>
                    </Row>
                  </Button>
                </RevealFx>
              )}
            </Column>
          )}

          {/* SECTION 5: Experience/Background (This is your original 'work' section) */}
          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    {/* ...This section continues as it was before... */}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* SECTION 6: Working Together */}
          {about.workingTogether.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              <Heading as="h2" id={about.workingTogether.title} variant="display-strong-s" marginBottom="m">
                {about.workingTogether.title}
              </Heading>
              {about.workingTogether.description}
            </Column>
          )}
        </Column>

      {/* ================================================================== */}
      {/* AND THIS CLOSING TAG: Changed from </Row> to </Column>             */}
      {/* ================================================================== */}
      </Column>
    </Column>
  );
}