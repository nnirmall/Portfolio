'use client'
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Project {
  id: string | number;
  image: string | StaticImageData;
  title: string;
  description: string;
  category: string;
  link: string;
}

const ProjectShowcase = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'Design', 'Mobile'];

  // Simulating data fetch. Replace this with your actual data-fetching logic.
  useEffect(() => {
    // Here you would fetch the projects from an API or data source.
    const fetchedProjects: Project[] = [
      // Replace with actual data
      {
        id: 1,
        title: "Portfolio",
        description: "A Personal portfolio website with Next.js ",
        category: "Design",
        image: "/Port.png",
        link: "https://portfolio-nirmals-projects-4c7d83e3.vercel.app/"
      },
      {
          id: 2,
          title: "E-commerce Platform",
          description: "A full-stack e-commerce solution with React and Node.js",
          category: "Web",
          image: "/Dash.png",
          link: "https://coral_qui_gon_jinn_light_termite.toddle.site/"
        },
        {
          id: 3,
          title: "Advanced Automated Attendance System",
          description: "A full-stack attendance system solution with React and C#,.NET",
          category: "Web",
          image: "/A3S.png",
          link: "https://github.com/nnirmall/Advanced-Automated-Attendance-System-A3S-?tab=readme-ov-file"
        },
        {
          id: 4,
          title: "Dashboard",
          description: "A Dashboard website with Next.js ",
          category: "Design",
          image: "/dashboard.png",
          link: "https://nextjs-dashboard-five-blond-21.vercel.app/dashboard"
        },
        {
          id: 5,
          title: "TheZoo",
          description: "Simple Android Application that allows users to view images of different animals that can be found in a zoo. Java, Android Studio",
          category: "Mobile",
          image: "/zoo.png",
          link: "https://github.com/nnirmall/TheZoo?tab=readme-ov-file"
        },
        {
          id: 6,
          title: "Task Organizer",
          description: "Developed RESTful APIs using Spring Boot, implementing secure JWT authentication and authorization for user management and task operations.",
          category: "Web",
          image: "/asd.png",
          link: "https://github.com/nnirmall/TaskOrganizer"
        },
    ];
    setProjects(fetchedProjects);
  }, []);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Recent Projects</h2>

        <div className="flex justify-center mb-8">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`mx-2 px-4 py-2 rounded-full ${
                activeFilter === filter
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-500">{project.category}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:text-blue-500"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
