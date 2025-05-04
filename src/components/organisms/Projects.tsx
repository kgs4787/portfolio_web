import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: '포트폴리오 웹사이트',
    description: 'React와 TypeScript를 사용하여 만든 개인 포트폴리오 웹사이트',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/project1.jpg',
    link: '#',
  },
  {
    title: '쇼핑몰 웹사이트',
    description: 'Next.js를 사용하여 만든 반응형 쇼핑몰 웹사이트',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    image: '/project2.jpg',
    link: '#',
  },
  {
    title: '투두 리스트 앱',
    description: 'React와 Firebase를 사용하여 만든 실시간 투두 리스트 앱',
    technologies: ['React', 'Firebase', 'Material UI'],
    image: '/project3.jpg',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-200">
                {/* 프로젝트 이미지 */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 