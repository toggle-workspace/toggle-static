import CallToAction from "@/components/call-to-action";
import { PageHeader } from "@/components/ui/page-header";
import { Spacer } from "@/components/ui/grid";
import BlogSection from "@/components/blog-section";
import { featuredPost, posts, categories } from "@/data/blog-posts";

export default function WorkPage() {
  return (
    <>
      <section>
        <PageHeader
          title="Results across every industry."
          subtitle="Our Work"
          description="How we've helped brands around the world."
        />
      </section>
      <BlogSection
        featuredPost={featuredPost}
        posts={posts}
        categories={categories}
      />
      <Spacer />
      <CallToAction />
    </>
  );
}
