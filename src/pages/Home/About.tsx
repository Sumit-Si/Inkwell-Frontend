// pages/About.tsx
import Page from "@/components/Page";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <Page>
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          className="text-4xl text-center md:text-5xl font-bold bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent mb-8"
          variants={itemVariants}
        >
          About Inkwell
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg text-muted-foreground mb-4 leading-relaxed"
          variants={itemVariants}
        >
          Inkwell is a modern blog publishing platform built to help writers
          share their stories easily and beautifully.
        </motion.p>

        <motion.p
          className="text-lg text-muted-foreground mb-4 leading-relaxed"
          variants={itemVariants}
        >
          Made by indie creator{" "}
          <span className="font-semibold text-primary">Sumit Tomar</span> in
          2025, Inkwell focuses on simplicity, speed, and an elegant writing
          experience.
        </motion.p>

        <motion.p
          className="text-lg text-muted-foreground mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Thousands of creators trust Inkwell to publish their ideas, connect
          with readers, and grow their voice.
        </motion.p>

        {/* Features Section */}
        <motion.section
          className="text-left mb-12 animate-in fade-in"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.h2
            className="section-title mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            ✨ Features
          </motion.h2>

          <div className="space-y-3">
            {[
              "User Management: Registration, authentication, role-based access control",
              "Blog Post Management: CRUD operations with approval workflow",
              "Admin Approval: Posts require admin approval before publication",
              "Category System: Hierarchical categories with parent-child relationships",
              "Comment System: Nested comments with approval workflow",
              "API Key Management: Secure API access with key-based authentication",
              "File Upload: Cloudinary integration for banner images and user profiles",
              "Rate Limiting: Protection against API abuse",
            ].map((feature, index) => (
              <motion.li
                key={feature}
                className="text-muted-foreground pl-6 relative before:absolute before:left-0 before:w-2 before:h-2 before:bg-primary before:rounded-full before:mt-2 before:animate-ping"
                custom={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: (i: number) => ({
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.5 + i * 0.05 },
                  }),
                }}
                initial="hidden"
                animate="visible"
              >
                <span className="font-medium">{feature.split(":")[0]}:</span>{" "}
                {feature.split(":")[1]}
              </motion.li>
            ))}
          </div>
        </motion.section>

        {/* CTA Button
        <motion.div variants={itemVariants}>
          <motion.a
            href="/signup"
            className="inline-flex items-center text-sm bg-primary text-primary-foreground font-semibold py-2 px-5 rounded-xl shadow-lg hover:shadow-xl border border-transparent transition-all duration-300"
            variants={buttonVariants}
            transition={{ duration: 0.3 }}
          >
            Get Started Free
            <ArrowRight className="ml-2" />
          </motion.a>
        </motion.div> */}
      </motion.div>
    </Page>
  );
};

export default AboutPage;
