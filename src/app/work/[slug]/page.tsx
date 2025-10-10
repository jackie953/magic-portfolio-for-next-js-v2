import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Button,
  Column,
  Flex,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Line,
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
  params: { slug: string | string[] };
}): Promise<Metadata> {
  const slugPath = Array.isArray(params.slug)
    ? params.slug.join("/")
    : params.slug || "";

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
  params: { slug: string | string[] };
}) {
  const slugPath = Array.isArray(params.slug)
    ? params.slug.join("/")
    : params.slug || "";

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
      {/* ✅ TOC IS HERE - This will show on the left side on desktop */}
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
      </Column>
    </>
  );
}