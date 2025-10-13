import { Heading, Text, Column } from "@once-ui-system/core";

export default function PrivacyPage() {
  return (
    <Column
      maxWidth="m"
      gap="xl"
      paddingY="l"
      paddingX="l"
    >
      <Heading variant="display-strong-s">Privacy & Cookie Policy</Heading>

      <Column gap="m">
        <Heading variant="heading-strong-m">1. Who We Are</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Mhitaryan Works is an independent consultancy based in Sweden and operating within the EU
          and internationally. We respect your privacy and are committed to protecting your personal
          data in line with the General Data Protection Regulation (GDPR).
        </Text>
      </Column>

      <Column gap="m">
        <Heading variant="heading-strong-m">2. What Data We Collect</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          We may collect and process:
        </Text>
        <Text as="ul" variant="body-default-m" onBackground="neutral-weak" className="list-disc pl-6 space-y-0">
          <li>Contact information (name, email, message) when you reach out through forms or email.</li>
          <li>Technical data such as IP address, browser type, and device, for website performance and security.</li>
          <li>Cookies for basic analytics and to improve your browsing experience.</li>
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          We do not collect sensitive data or sell personal information to third parties.
        </Text>
      </Column>

      <Column gap="m">
        <Heading variant="heading-strong-m">3. How We Use Your Data</Heading>
        <Text as="ul" variant="body-default-m" onBackground="neutral-weak" className="list-disc pl-6 space-y-1">
          <li>To respond to messages and inquiries.</li>
          <li>To improve site functionality and performance.</li>
          <li>To understand visitor interactions (via anonymized analytics).</li>
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Your data is only stored as long as necessary for these purposes.
        </Text>
      </Column>

      <Column gap="m">
        <Heading variant="heading-strong-m">4. Legal Basis</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          We process data based on:
        </Text>
        <Text as="ul" variant="body-default-m" onBackground="neutral-weak" className="list-disc pl-6 space-y-1">
          <li>Consent (e.g., accepting cookies or submitting a form).</li>
          <li>Legitimate interest (e.g., maintaining website security and performance).</li>
        </Text>
      </Column>

      <Column gap="m">
        <Heading variant="heading-strong-m">5. Sharing of Data</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          We only share limited data with trusted service providers, such as:
        </Text>
        <Text as="ul" variant="body-default-m" onBackground="neutral-weak" className="list-disc pl-6 space-y-1">
          <li>Website hosting provider</li>
          <li>Analytics tools (e.g., Google Analytics or Plausible, anonymized if used)</li>
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          All providers comply with EU data protection standards.
        </Text>
      </Column>

      <Column gap="m">
        <Heading variant="heading-strong-m">6. Cookies</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Cookies are small text files stored on your device. We use:
        </Text>
        <Text as="ul" variant="body-default-m" onBackground="neutral-weak" className="list-disc pl-6 space-y-1">
          <li>
            <Text as="span" variant="body-default-m" onBackground="neutral-weak" className="font-semibold">Essential cookies</Text> – required for the site to function.
          </li>
          <li>
            <Text as="span" variant="body-default-m" onBackground="neutral-weak" className="font-semibold">Analytics cookies</Text> – help us understand traffic and usage patterns.
          </li>
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          You can change or withdraw your cookie consent anytime via your browser settings.
        </Text>
      </Column>

      <Column gap="m">
        <Heading variant="heading-strong-m">7. Your Rights</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Under GDPR, you have the right to access, correct, or delete your personal data, withdraw
          consent at any time, and complain to the Swedish Authority for Privacy Protection (IMY) if
          you believe your data has been mishandled.
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Contact us at{" "}
          <a
            href="mailto:hi@mhitaryan.com"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            hi@mhitaryan.com
          </a>{" "}
          for any privacy-related requests.
        </Text>
      </Column>

      <Column gap="m">
        <Heading variant="heading-strong-m">8. Data Security</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          We use secure hosting and encryption (HTTPS) to protect your information and prevent
          unauthorized access.
        </Text>
      </Column>

      <Column gap="m">
        <Heading variant="heading-strong-m">9. Updates</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          This policy may be updated occasionally to reflect legal or technical changes. The latest
          version will always be available on this page.
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Last updated: October 2025
        </Text>
      </Column>
    </Column>
  );
}