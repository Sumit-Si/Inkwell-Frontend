import { cn } from "@/lib/utils";
import React from "react";
import {motion, type Variants} from "motion/react";
import { Link, useLoaderData } from "react-router-dom";
import type { HomeLoaderResponse } from "@/routes/loaders/user/homeLoader";
import BlogCard from "../BlogCard";
import { Button } from "../ui/button";

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

const AllPosts = ({ className, ...props }: React.ComponentProps<"section">) => {
    const {allPosts} = useLoaderData<HomeLoaderResponse>();

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
          All blog posts
        </motion.h2>

        <motion.ul
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4"
          initial="from"
          whileInView="to"
          viewport={{ once: true }}
          variants={listVariant}
        >
          {allPosts.data.posts.map(
            ({ id,slug, bannerImage, title, description, author, postedAt }, index) => (
              <motion.li key={slug} variants={itemVariant}>
                <BlogCard
                  id={id}
                  bannerImage={bannerImage}
                  title={title}
                  description={description || ""}
                  slug={slug}
                  authorName={author?.fullName || ""}
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
            <Link to={"/posts"} viewTransition>
              See all Posts
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AllPosts;
