// pages/Contact.tsx
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Twitter, Send, ArrowLeftIcon } from "lucide-react";

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4 container">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero */}
        <motion.div variants={itemVariants}>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Have a question or feedback? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="space-y-6 mb-12"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-2">
            <Input 
              type="text" 
              placeholder="Your name"
              className="h-12 text-lg"
            />
          </div>
          
          <div className="space-y-2">
            <Input 
              type="email" 
              placeholder="your@email.com"
              className="h-12 text-lg"
            />
          </div>
          
          <div className="space-y-2">
            <Textarea 
              placeholder="Tell me about your idea or question..."
              rows={6}
              className="text-lg resize-none"
            />
          </div>
          
          <motion.div variants={itemVariants}>
            <motion.div
              className="flex w-full justify-center items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                asChild
                size="lg"
                className="py-4 px-10 text-sm font-semibold shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="flex items-center gap-2">
                  Send Message
                  <Send className="w-5 h-5" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Direct Contact */}
        <motion.section 
          className="text-center"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Or reach me directly
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-xl mx-auto">
            <motion.a
              href="mailto:hello@sumittomar.dev"
              className="group flex flex-col items-center p-6 bg-card rounded-2xl border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-3 transition-colors">
                <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground group-hover:text-primary">Email</span>
              <span className="text-sm w-fit text-muted-foreground text-ellipsis block">
                hello@sumittomar.dev
              </span>
            </motion.a>

            <motion.a
              href="https://twitter.com/sumittomar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-card rounded-2xl border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-3 transition-colors">
                <Twitter className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground group-hover:text-primary">Twitter</span>
              <span className="text-sm text-muted-foreground">@sumittomar</span>
            </motion.a>

            <motion.a
              href="https://github.com/sumittomar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-card rounded-2xl border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-3 transition-colors">
                <Github className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground group-hover:text-primary">GitHub</span>
              <span className="text-sm text-muted-foreground">sumittomar</span>
            </motion.a>
          </div>
        </motion.section>

        {/* Back link */}
        <motion.div 
          className="mt-16 pt-12 border-t border-border"
          variants={itemVariants}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors hover:underline-offset-1 hover:underline"
          >
            <ArrowLeftIcon className="w-4 h-4" /> Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
