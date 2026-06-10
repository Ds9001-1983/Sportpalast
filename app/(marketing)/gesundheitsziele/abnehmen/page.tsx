import type { Metadata } from "next";
import { TopicPageTemplate } from "@/components/sections/TopicPageTemplate";
import { TOPIC_PAGES } from "@/lib/content/topic-pages";

const data = TOPIC_PAGES["gesundheitsziele/abnehmen"];

export const metadata: Metadata = {
  title: data.eyebrow,
  description: data.intro,
};

export default function AbnehmenPage() {
  return (
    <TopicPageTemplate page={data} />
  );
}
