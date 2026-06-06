"use client";

import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  const firstImage = images[0];
  const isVideo = firstImage?.endsWith(".mp4");

  return (
    <Column fillWidth gap="m">
      {firstImage && (
        <div style={{
          borderRadius: 'var(--radius-l)',
          overflow: 'hidden',
          width: '100%',
          aspectRatio: '16/9',
          background: 'transparent',
        }}>
          {isVideo ? (
            <video
              src={firstImage}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                border: 'none',
                outline: 'none',
              }}
            />
          ) : (
            <img
              src={firstImage}
              alt={title}
              loading="eager"
              fetchPriority="high"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                border: 'none',
                outline: 'none',
              }}
            />
          )}
        </div>
      )}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7}
            gap="16"
            style={{ maxWidth: "60ch" }}
          >
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-m" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {/* Read case study hidden — re-enable when ready
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{
                    margin: "0",
                    width: "fit-content",
                    color: "var(--brand-color)"
                  }}
                  href={href}
                >
                  <Text
                    variant="body-default-s"
                    style={{ color: "var(--brand-color)" }}
                  >
                  Read case study</Text>
                </SmartLink>
              )}
              */}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
