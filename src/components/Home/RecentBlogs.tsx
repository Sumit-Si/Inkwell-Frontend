import { cn } from "@/lib/utils";
import React from "react";
import { motion, type Variants } from "motion/react";
import { useLoaderData } from "react-router-dom";
import type { HomeLoaderResponse } from "@/routes/loaders/user/homeLoader";
import BlogCard from "../BlogCard";

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
      ease: "backInOut",
    },
  },
};

const RecentBlogs = ({
  className,
  ...props
}: React.ComponentProps<"section">) => {
    const {recentPosts} = useLoaderData<HomeLoaderResponse>();
    console.log("recentPosts", recentPosts);
    
  return (
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
          Recent blog posts
        </motion.h2>

        <motion.ul
          className="grid gap-4 lg:grid-cols-2 lg:grid-rows-3"
          initial="from"
          whileInView="to"
          viewport={{ once: true }}
          variants={listVariant}
        >
          {recentPosts.data.posts.map(
            ({ slug, bannerImage, title, description, author, postedAt }, index) => (
              <motion.li
                key={slug}
                className={cn(index === 0 && "lg:row-span-3")}
                variants={itemVariant}
              >
                <BlogCard
                  bannerImage={bannerImage}
                //   bannerSize={bannerImage?.size}
                  title={title}
                  description={description || ""}
                  slug={slug}
                  authorName={author?.fullName || ""}
                  postedAt={postedAt}
                  size={index > 0 ? "sm" : "default"}
                />
              </motion.li>
            )
          )}
        </motion.ul>
      </div>
    </section>
  );
};

export default RecentBlogs;
