import { type About, type Blog, type Home, type Newsletter, type Person, type Social, type Work, Services, Contact } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jacqueline Eliana",
  lastName: "Mhitaryan",
  name: "About Mhitaryan Works",
  role: "Strategic Intelligence & Communications",
  avatar: "/images/avatar.jpg", // 1:1 image, e.g. 800x800px
  email: "jackie@mhitaryan.com",
  location: "Europe/Stockholm", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Swedish", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Book a Discovery Call</>,
  description: <>Let&apos;s explore how we can work together - no obligation, no pitch.</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mhitaryan",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:jackie@mhitaryan.com",
  },
    {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/46703245598",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "",
  description: "",
  headline: <>Clarity and Courage When It Matters Most</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
Strategic research and communications at the intersection of power, politics, and people.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: "",
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/mhitaryan-works/15min",
  },

  // SECTION 1: Renamed from 'intro' to 'aboutSection'
  aboutSection: {
    display: true,
    title: "",
    description: (
      <>
        &quot;This is where you can write the main 'About' introduction. Lorem ipsum dolor sit amet, consectetur adipiscing elit.&quot;
      </>
    ),
  },

  // SECTION 2: New Section
  howItStarted: {
    display: true,
    title: "How It Started",
    description: (
      <>
        This is a placeholder for the 'How It Started' section.
      </>
    ),
  },

  // SECTION 3: New Section
  approach: {
    display: true,
    title: "Approach/Values",
    description: (
      <>
        This is a placeholder for the 'Approach/Values' section.
      </>
    ),
  },

  // SECTION 4: New Section
  whyWorkWithUs: {
    display: true,
    title: "Why Work With Us",
    description: (
      <>
        This is a placeholder for the 'Why Work With Us' section.
      </>
    ),
  },

  // SECTION 5: This is your existing 'work' section for Experience
  work: {
    display: true,
    title: "Experience/Background", // Updated title
    experiences: [
      {
        company: "APCO Worldwide",
        timeframe: "2021 - Present",
        role: "Associate",
        images: [],
        achievements: []
      },
      // ... your other experiences
    ],
  },

  // SECTION 6: New Section
  workingTogether: {
    display: true,
    title: "Working Together",
    description: (
      <>
        This is a placeholder for the 'Working Together' section.
      </>
    ),
  },

  // We are removing the old 'studies' and 'technical' sections for now.
  // You can add them back later if you need them.
  studies: { display: false, title: "Studies", institutions: [] },
  technical: { display: false, title: "Skills", skills: [] },
  intro: {
    display: false,
    title: "",
    description: undefined
  }
};

const services = {
  path: "/services",
  label: "Services",
  title: `Services – ${person.name}`,
  description: "Strategic research and communications services",
};

const contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: "Get in touch to discuss how we can help you",
};

const blog: Blog = {
  path: "/blog",
  label: "Insights",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: "",
  description: "",
  tableOfContent: {
    display: true,
    subItems: false,
  },
};

export { person, social, newsletter, home, about, services, contact, blog, work };