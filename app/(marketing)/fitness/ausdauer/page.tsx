import type { Metadata } from "next";
import { TopicPageTemplate } from "@/components/sections/TopicPageTemplate";
import { TOPIC_PAGES } from "@/lib/content/topic-pages";

const data = TOPIC_PAGES["fitness/ausdauer"];

export const metadata: Metadata = {
  title: data.eyebrow,
  description: data.intro,
};

export default function AusdauerPage() {
  return <TopicPageTemplate page={data} />;
}
