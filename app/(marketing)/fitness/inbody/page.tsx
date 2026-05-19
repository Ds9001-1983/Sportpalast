import type { Metadata } from "next";
import { TopicPageTemplate } from "@/components/sections/TopicPageTemplate";
import { TOPIC_PAGES } from "@/lib/content/topic-pages";

const data = TOPIC_PAGES["fitness/inbody"];

export const metadata: Metadata = {
  title: data.eyebrow,
  description: data.intro,
};

export default function InbodyPage() {
  return (
    <TopicPageTemplate
      eyebrow={data.eyebrow}
      title={data.title}
      intro={data.intro}
      highlights={data.highlights}
      cta={data.cta}
    />
  );
}
