import { Button, Column, Heading, Icon, Meta, RevealFx, Row, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}
                      {about.calendar.display && (
                <RevealFx paddingTop="8" delay={0.4} horizontal="center" paddingLeft="12">
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

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Projects />
    </Column>
  );
}
