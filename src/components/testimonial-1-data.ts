export interface Testimonial {
  id: number
  content: string
  attribution: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Professional and attentive to detail, with a perceptive grasp of client interests and needs. Trained quickly on projects and consistently met stringent deadlines.",
    attribution: "Noam I., Public Affairs Director, APCO",
  },
  {
    id: 2,
    content:
      "A capable strategist and an experienced solution-finder. A methodical writer who can convey large ideas in approachable terms, with the ability to get a community to rally behind a shared goal while managing difficult situations with grace and clarity.",
    attribution: "Dalida S., CEO, BIC Colorado",
  },
  {
    id: 3,
    content:
      "Advanced language skills across multiple languages were a significant asset to the research team, strengthening the organization's ability to analyze and prepare documents from varied sources. Also brings experience in community leadership, campaign-building, and working with a wide range of people.",
    attribution: "Becca W., Research Director, CIJA",
  },
]
