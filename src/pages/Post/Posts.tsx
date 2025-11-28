import BlogCard from "@/components/BlogCard";
import Page from "@/components/Page";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PaginatedResponse, Posts } from "@/types";
import { motion, type Variants } from "motion/react";
import { useLoaderData } from "react-router-dom";

const listVariant: Variants = {
  to: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariant: Variants = {
  from: { opacity: 0 },
  to: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'backInOut',
    },
  },
};

const Posts = ({ className, ...props }: React.ComponentProps<"section">) => {
    const {data} = useLoaderData() as PaginatedResponse<"Posts">;
    console.log("data",data);
    
  return (
    <Page>
      <section className={cn("section", className)} {...props}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            }}
          >
            All Posts
          </motion.h2>

          <motion.ul
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4"
            initial="from"
            whileInView="to"
            viewport={{ once: true }}
            variants={listVariant}
          >
            {data?.posts.map(
              (
                { id,slug, bannerImage, title, description, author, postedAt }
              ) => (
                <motion.li key={slug} variants={itemVariant}>
                  <BlogCard
                    id={id}
                    bannerImage={bannerImage}
                    // bannerWidth={banner.width}
                    // bannerHeight={banner.height}
                    title={title}
                    description={description}
                    slug={slug}
                    authorName={author.fullName}
                    postedAt={postedAt}
                  />
                </motion.li>
              )
            )}
          </motion.ul>

          <motion.div
            className="mt-8 flex justify-center md:mt-10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "backInOut",
              },
            }}
          >
            <Button size={"lg"} asChild>
              See all Posts
            </Button>
          </motion.div>
        </div>
      </section>
    </Page>
  );
};

export default Posts;
