import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Button,
  Column,
  Flex,
  Heading,
  Icon, 
  IconButton,
  Media,
  Text,
  SmartLink,
  Row,
  Line,
  RevealFx
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import type { Metadata } from "next";
import { Projects } from "@/components/work/Projects";
import TableOfContents from "@/components/about/TableOfContents";

function generateTocStructure(markdownContent: string) {
  const structure: { title: string; display: boolean; items: string[] }[] = [];
  const headingRegex = /^## (.*)$/gm;
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(markdownContent)) !== null) {
    structure.push({
      title: match[1],
      display: true,
      items: [],
    });
  }
  return structure;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slugPath = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug.join("/")
    : resolvedParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const resolvedParams = await params;
  const slugPath = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug.join("/")
    : resolvedParams.slug || "";

  const post = getPosts(["src", "app", "work", "projects"]).find(
    (post) => post.slug === slugPath
  );

  if (!post) {
    notFound();
  }

  const tocStructure = generateTocStructure(post.content);

  // Create a wrapper object that matches the TableOfContents interface
  const tocConfig = {
    tableOfContent: work.tableOfContent || {
      display: false,
      subItems: false,
    },
  };

  return (
    <>
      <ScrollToHash />
      <TableOfContents structure={tocStructure} about={tocConfig} />
      
      <Column as="section" maxWidth="m" horizontal="center" gap="l">
        <Column gap="m">
          {post.metadata.images && post.metadata.images.length > 0 && (
            <Media
              src={post.metadata.images[0]}
              alt={post.metadata.title}
              aspectRatio="16 / 9"
              radius="l"
            />
          )}
          <Heading variant="display-strong-s">{post.metadata.title}</Heading>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt)}
          </Text>
        </Column>
        <Column as="article" gap="l">
          <CustomMDX source={post.content} />
        </Column>
        <Button
          href={`${work.path}`}
          variant="secondary"
          size="m"
          prefixIcon="chevronLeft"
        >
          Back to projects
        </Button>
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
      </Column>
    </>
  );
}