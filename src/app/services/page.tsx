import React from 'react';
import {
  Column,
  Heading,
  Text,
  Schema,
  Button,
  Row,
  Icon,
  RevealFx,
} from "@once-ui-system/core";
import { baseURL } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  return {
    title: "Services | Mhitaryan Works",
    description: "Strategic Research & Intelligence, Strategic Communications, and Strategic Advisory services.",
  };
}

export default function Services() {
  const structure = [
    {
      title: "Strategic Research & Intelligence",
      display: true,
      items: [],
    },
    {
      title: "Strategic Communications",
      display: true,
      items: [],
    },
    {
      title: "Strategic Advisory",
      display: true,
      items: [],
    },
  ];

  const about = {
    tableOfContent: {
      display: true,
      subItems: false,
    },
    calendar: {
      display: true,
      link: "https://cal.com/your-link", // Replace with your actual calendar link
    }
  };

  return (
    <Column maxWidth="s">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Services"
        description="Strategic Research & Intelligence, Strategic Communications, and Strategic Advisory services."
        path="/services"
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

      <Column fillWidth>
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          
          {/* Page Header */}
          <Column
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Heading className={styles.textAlign} variant="display-strong-xl">
              Services
            </Heading>
          </Column>

          {/* Intro Section */}
          <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
            <Text variant="body-default-l">
              We work at the intersection of research, strategy, and communications—helping organizations understand complex environments and act decisively. Whether you need intelligence on a shifting landscape, communications that cut through noise, or strategic counsel when stakes are high, we deliver clarity when it matters most.
            </Text>
          </Column>

          {/* Strategic Research & Intelligence */}
          <Column fillWidth gap="m" marginBottom="40">
            <Heading as="h1" id="Strategic Research & Intelligence" variant="display-strong-s" marginBottom="m">
              Strategic Research & Intelligence
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" style={{ fontStyle: 'italic' }} marginBottom="m">
              Understanding the landscape—across sectors, stakeholders, and signals
            </Text>
            
            <Text variant="body-default-l" marginBottom="l">
              We don't just gather information. We map power, track narratives, and identify patterns that others miss.
            </Text>

            <Heading as="h2" variant="heading-strong-l" marginBottom="s">
              What we do
            </Heading>
            <Column as="ul" gap="s" paddingLeft="l" marginBottom="l" style={{ listStyleType: 'disc' }}>
              <Text as="li" variant="body-default-l">
                <strong>Open-source intelligence (OSINT)</strong> and media monitoring across platforms, languages, and geographies
              </Text>
              <Text as="li" variant="body-default-l">
                <strong>Stakeholder mapping & network analysis</strong>—identifying who matters, who influences whom, and where leverage exists
              </Text>
              <Text as="li" variant="body-default-l">
                <strong>Market and competitive intelligence</strong>—understanding positioning, movements, and opportunities in complex environments
              </Text>
              <Text as="li" variant="body-default-l">
                <strong>Risk assessment and due diligence</strong>—surfacing reputational, regulatory, operational, or political risks before they become crises
              </Text>
              <Text as="li" variant="body-default-l">
                <strong>Regulatory and policy analysis</strong>—tracking legislative developments, policy shifts, and their strategic implications
              </Text>
            </Column>

            <Heading as="h2" variant="heading-strong-l" marginBottom="s">
              Delivery
            </Heading>
            <Text variant="body-default-l" marginBottom="l">
              Strategic and operational. We deliver both discrete research reports and ongoing intelligence support—whatever your timeline and context demand.
            </Text>

            <Heading as="h2" variant="heading-strong-l" marginBottom="s">
              Who needs this
            </Heading>
            <Text variant="body-default-l">
              Companies entering new markets or facing competitive threats. Investors conducting due diligence. Organizations navigating regulatory or reputational complexity. Anyone operating where information asymmetry is a risk.
            </Text>
          </Column>

          {/* Strategic Communications */}
          <Column fillWidth gap="m" marginBottom="40">
            <Heading as="h1" id="Strategic Communications" variant="display-strong-s" marginBottom="m">
              Strategic Communications
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" style={{ fontStyle: 'italic' }} marginBottom="m">
              Shaping narratives, building influence, and driving action
            </Text>
            
            <Text variant="body-default-l" marginBottom="l">
              Strategy without execution is just a plan. Execution without strategy is noise. We do both.
            </Text>

            <Heading as="h2" variant="heading-strong-l" marginBottom="s">
              What we do
            </Heading>
            <Column as="ul" gap="s" paddingLeft="l" marginBottom="l" style={{ listStyleType: 'disc' }}>
              <Text as="li" variant="body-default-l">
                <strong>Positioning and messaging strategy</strong>—defining how you show up, who you reach, and what you want them to believe or do
              </Text>
              <Text as="li" variant="body-default-l">
                <strong>Content development</strong>—research briefs, white papers, thought leadership, op-eds, stakeholder reports, pitch materials
              </Text>
              <Text as="li" variant="body-default-l">
                <strong>Advocacy and public affairs communications</strong>—building coalitions, influencing policymakers, shaping public discourse
              </Text>
              <Text as="li" variant="body-default-l">
                <strong>Stakeholder engagement and outreach</strong>—identifying, reaching, and mobilizing the people who matter to your goals
              </Text>
              <Text as="li" variant="body-default-l">
                <strong>Campaign strategy and execution</strong>—from launch strategies to ongoing communications operations
              </Text>
              <Text as="li" variant="body-default-l">
                <strong>Crisis and reputational communications</strong>—rapid response, narrative control, and strategic counsel when stakes are high
              </Text>
            </Column>

            <Heading as="h2" variant="heading-strong-l" marginBottom="s">
              Delivery
            </Heading>
            <Text variant="body-default-l" marginBottom="l">
              Strategic and operational. We develop the strategy, create the content, execute the outreach, and adjust based on what's working. One-off projects or ongoing partnerships.
            </Text>

            <Heading as="h2" variant="heading-strong-l" marginBottom="s">
              Who needs this
            </Heading>
            <Text variant="body-default-l">
              Organizations with complex stories to tell. Businesses navigating reputational or market challenges. Nonprofits and advocacy groups building movements. Companies needing stakeholder buy-in for major decisions. Anyone who needs to move perception or behavior—internally or externally.
            </Text>
          </Column>

          {/* Strategic Advisory */}
          <Column fillWidth gap="m" marginBottom="l">
            <Heading as="h1" id="Strategic Advisory" variant="display-strong-s" marginBottom="m">
              Strategic Advisory
            </Heading>
            
            <Text variant="body-default-l" marginBottom="m">
              Research tells you what's happening. Communications shape what people think. Advisory tells you what to do.
            </Text>

            <Text variant="body-default-l" marginBottom="m">
              This isn't a separate service—it's the layer of strategic judgment that sits on top of everything we do. Whether you need:
            </Text>

            <Column as="ul" gap="s" paddingLeft="l" marginBottom="l" style={{ listStyleType: 'disc' }}>
              <Text as="li" variant="body-default-l">
                Ongoing counsel on a high-stakes situation
              </Text>
              <Text as="li" variant="body-default-l">
                A thought partner for navigating ambiguity
              </Text>
              <Text as="li" variant="body-default-l">
                Strategic judgment on time-sensitive decisions
              </Text>
              <Text as="li" variant="body-default-l">
                Scenario planning for multiple futures
              </Text>
            </Column>

            <Text variant="body-default-l" marginBottom="m">
              We bring the discipline to see patterns across sectors and cultures, the experience to know what's signal versus noise, and the clarity to tell you what you need to hear—not what you want to hear.
            </Text>

            <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l" style={{ fontStyle: 'italic' }}>
              Available as a retainer or on-demand for existing clients.
            </Text>

            {about.calendar.display && (
              <RevealFx paddingTop="8" delay={0.4} horizontal="center">
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

        </Column>
      </Column>
    </Column>
  );
}