import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import SectionTitle from "../atoms/SectionTitle";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/motionVariants";

const techStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Redux",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "Slack",
  "Notion",
];

export default function About() {
  return (
    <DefaultLayout>
      <section id="about" className="py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SectionTitle text="About Me" />
          <div className="max-w-3xl text-gray-700 mb-8 space-y-4">
            <p>
              React + TypeScript 기반의 실무 경험을 통해 재사용 가능한 UI
              컴포넌트를 설계하고, Redux를 이용한 상태 관리, 반응형 웹 구현
              경험을 갖춘 프론트엔드 개발자입니다.
            </p>
            <p>
              문제 해결과 학습을 즐기며, 사용자 중심의 UI/UX를 추구합니다.
              실무에서는 협업을 중요하게 여기며, Git, Slack, Notion 등 다양한
              협업 툴을 능숙하게 사용합니다.
            </p>
          </div>

          <SectionTitle text="Skills" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="border border-gray-300 rounded-lg py-3 px-4 text-center text-sm bg-white shadow-sm hover:shadow-md transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
}
