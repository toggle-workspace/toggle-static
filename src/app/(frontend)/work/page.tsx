import Link from "next/link";
import CallToAction from "@/components/call-to-action";
import { PageHeader } from "@/components/ui/page-header";
import { Spacer } from "@/components/ui/grid";
import BlogSection from "@/components/blog-section";
import { featuredPost, posts, categories } from "@/data/blog-posts";
import { caseStudies } from "@/data/case-studies";

export default function WorkPage() {
  return (
    <>
      <section>
        <PageHeader
          title="Results across every industry."
          subtitle="Our Work"
          description="How we've helped brands across Malaysia and Southeast Asia."
        />
      </section>
      <BlogSection featuredPost={featuredPost} posts={posts} categories={categories} />
      <Spacer />
      <CallToAction />
    </>
  );
}
