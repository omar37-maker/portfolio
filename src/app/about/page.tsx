"use client";

import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building
          modern web applications. With a strong foundation in both frontend and
          backend technologies, I create seamless user experiences and robust
          server-side solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title mb-10 text-center" {...fadeInUp}>
          Skills
        </motion.h2>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            { name: "HTML", icon: "/icons/html5.svg" },
            { name: "CSS", icon: "/icons/css3.svg" },
            { name: "Javascript", icon: "/icons/javascript.svg" },
            { name: "Typescript", icon: "/icons/typescript.svg" },
            { name: "React JS", icon: "/icons/react.svg" },
            { name: "Next JS", icon: "/icons/nextjs.svg" },
            { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
            { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
            { name: "Sass", icon: "/icons/sass.svg" },
            { name: "Shadcn", icon: "/icons/shadcn.svg" },
            { name: "React Query", icon: "/icons/react-query.svg" },
            { name: "React Router Dom", icon: "/icons/react-router.svg" },
            { name: "Redux & Redux toolkit", icon: "/icons/redux.svg" },
            { name: "Github", icon: "/icons/github.svg" },
            { name: "Postman", icon: "/icons/postman.svg" },
            { name: "Figma", icon: "/icons/figma.svg" },
            { name: "Framer Motion", icon: "/icons/framer.svg" },
            { name: "Npm", icon: "/icons/npm.svg" },
            { name: "Vite", icon: "/icons/vite.svg" },
            { name: "Vercel", icon: "/icons/vercel.svg" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transition-transform"
              variants={fadeInUp}
              whileHover={cardHover.whileHover}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-10 w-10 mb-3 object-contain"
              />
              <p className="text-center text-sm font-medium text-secondary">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>


      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHover.whileHover}
            transition={{ type: "spring" as const, stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Front-End Developer</h3>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed and maintained RESTful APIs</li>
              <li>
                Built responsive user interfaces with modern JavaScript
                frameworks
              </li>
              <li>Optimized database queries improving performance by 40%</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            whileHover={cardHover.whileHover}
            transition={{ type: "spring" as const, stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-primary mb-2">
              Arab Open Univeristy • 2019 - 2023
            </p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering and web
              development.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
