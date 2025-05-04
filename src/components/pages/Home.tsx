import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import SectionTitle from "../atoms/SectionTitle";
import ProjectList from "../organisms/ProjectList";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/motionVariants";

export default function Home() {
  return (
    <DefaultLayout>
      <section
        id="home"
        className="text-center py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
            안녕하세요, 김강산입니다.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Frontend Developer with a passion for scalable UI
          </p>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            React + TypeScript 기반의 실무 경험을 통해 재사용 가능한 UI
            컴포넌트를 설계하고, Redux를 이용한 상태 관리, 반응형 웹 구현 경험을
            갖춘 프론트엔드 개발자입니다. 문제 해결과 학습을 즐기며, 사용자
            중심의 UI/UX를 추구합니다.
          </p>
        </motion.div>
      </section>

      <section id="projects" className="py-16">
        <SectionTitle text="주요 프로젝트" />
        <ProjectList />
      </section>
    </DefaultLayout>
  );
}
