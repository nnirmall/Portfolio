'use-client';
import '@/app/globals.css';
import Image from 'next/image';
import React from "react";
import ProjectShowcase from './project/page';
import About from './about/page';

export default async function Landing() {
    async function getProjects() {
        // Fetch your projects data here
        return  [
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
        
        
        
        // Add more project objects here
      ];
    }
    const projects = await getProjects();
  return (
    
    <>
    {/* <div style={{backgroundImage: "url('/back.png')"}} className='container bg-cover bg-center bg-no-repeat mx-auto px-4 py-8 min-h-screen'>
        <div className='flex flex-col mt-5 md:flex-row items-center rounded-lg shadow-lg justify-between  overflow-hidden'>
            <div className='w-full md:w-2/3 p-8 '>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                    Hi,
                </h1>
                <div className='flex items-center mb-4'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                        I am <span className='text-blue-800'>Nirmal Bhandari</span>
                    </h1>
                    <Image
                    src='/hand.jpg'
                    height={40}
                    width={40}
                    alt='Waving hand'
                    className='object-contain'
                    />
                </div>
               
                
                <p className='text-lg mb-6'>
                    Full-Stack Developer | Specialize in Java/J2EE and Spring ecosystem, Microservices 
                    Proficient in Frontend frameworks:<span className='text-blue-800'> Reactjs, Nextjs and Angular </span>
                </p>
                <div className='flex  ml-10 mx-auto'>
               <div className='flex flex-row space-x-4'>
               <button className="bg-purple-600 text-white px-4 py-2 rounded">Get in touch</button>
               <button className="border border-gray-300 px-4 py-2 rounded ml-4">Download CV</button>
                </div>
        </div>
            </div>
            
            <div className='w-full md:w-1/3 p-8'>
                <Image
                    src='/Nirmal_Bhandari.jpg'
                    height={300}
                    width={300}
                    alt='Picture of user'
                    className='mx-auto rounded-full object-cover'
                />
            </div>
        </div>
       
    </div> */}
    <div style={{backgroundImage: "url('/try.png')"}} className="bg-cover bg-center bg-no-repeat min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-lg flex flex-col md:flex-row items-center justify-between p-8 space-y-8 md:space-y-0">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, <br />
            I am <span className="text-blue-600">Nirmal Bhandari</span>
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Full-Stack Developer | Specialize in Java/J2EE and Spring ecosystem, Microservices<br />
            Proficient in Frontend frameworks: <span className="text-blue-600">Reactjs, Nextjs and Angular</span>
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300 text-lg">
              Get in touch
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300 text-lg">
              Download CV
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 md:ml-8">
          <Image
           height={300}
           width={300}
            src="/asd.png" 
            alt="Nirmal Bhandari" 
            
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>

   <div id='about'>
    <About></About>
   </div>

    {/* <section style={{backgroundImage: "url('/HeroBack.png')"}}className="bg-cover bg-center bg-no-repeat hero flex items-center justify-between p-10 ">
        
      <div className="hero-content" >
        
        <h1 className="text-4xl font-bold">Hi, I am Your Name</h1>
        <p>Your profession and specialization</p>
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Get in touch</button>
        <button className="border border-gray-300 px-4 py-2 rounded ml-4">Download CV</button>
      </div>
      <div className="hero-image">
      <Image
                    src='/asd.png'
                    height={700}
                    width={700}
                    alt='Picture of user'
                 
                />
      </div>
    </section>  */}
  
    <div id='project'>
        <ProjectShowcase projects={projects} />;
    </div>
    </>
  )
}
