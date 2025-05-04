import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import SectionTitle from "../atoms/SectionTitle";
import ContactForm from "../organisms/ContactFrom";
export default function Contact() {
  return (
    <DefaultLayout>
      <section className="py-12">
        <SectionTitle text="Contact Me" />
        <p className="text-gray-600 mb-6 max-w-xl">
          궁금한 점이 있거나 협업 제안이 있다면 아래 폼을 통해 메시지를
          보내주세요. 혹은 아래 링크를 통해 GitHub나 블로그를 방문하실 수
          있습니다.
        </p>

        <div className="flex items-center gap-4 mb-8">
          <a
            href="https://github.com/kgs4787"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://velog.io/@kks478743"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
          >
            Velog
          </a>
        </div>

        <ContactForm />
      </section>
    </DefaultLayout>
  );
}
