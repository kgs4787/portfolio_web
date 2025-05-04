import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import SectionTitle from "../atoms/SectionTitle";
import ProjectCard from "../molecules/ProjectCard";

const projects = [
  {
    title: "UI/UX 플랫폼 개발",
    description:
      "사내 플랫폼 개발에 참여, Atomic Design Pattern 기반 UI 컴포넌트 구축 및 Redux 상태 관리",
    imageUrl: "", // 향후 이미지 추가 가능
    link: "https://github.com/kgs4787",
    techStack: ["React", "TypeScript", "Next.js", "Redux"],
  },
  {
    title: "생활 안전 지도 앱 (캡스톤)",
    description:
      "대학생 대상 안전 정보 제공 모바일 앱. 센서와 API 연동, Node.js 백엔드 포함",
    imageUrl: "", // 향후 이미지 추가 가능
    link: "https://github.com/kgs4787",
    techStack: ["Java", "Node.js", "MySQL", "지도 API"],
  },
];

export default function Projects() {
  return (
    <DefaultLayout>
      <section className="py-12">
        <SectionTitle text="Projects" />
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
