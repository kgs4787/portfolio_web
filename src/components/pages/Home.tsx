import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import SectionTitle from "../atoms/SectionTitle";
import ProjectList from "../organisms/ProjectList";

export default function Home() {
  return (
    <DefaultLayout>
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-gray-600 text-lg">
          Frontend Developer | React | TypeScript
        </p>
      </section>

      <ProjectList />
    </DefaultLayout>
  );
}
