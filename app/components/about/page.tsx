import React from 'react';
import { SquareCode , Monitor, SquareTerminal } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="bg-[#082f49] text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-center mb-12">
        Full Stack Java Developer with 6+ years of experience, specializing in enterprise-level application development using Java/J2EE and Spring ecosystem. Proficient in microservices architecture, design patterns, and object-oriented principles. Skilled in optimizing application performance, implementing security measures, and ensuring code quality.
        Experienced in API management and documentation using Swagger. Strong communicator and team player, adept at delivering scalable, high-performance solutions in fast-paced environments.
        </p>
        
        {/* <div className="flex justify-center space-x-16 mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-yellow-400">6</h2>
            <p className="text-gray-400">Years of Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-yellow-400">125+</h2>
            <p className="text-gray-400">Client Served</p>
          </div>
        </div> */}
        
        <h2 className="text-2xl font-bold text-center mb-8">Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<SquareCode size={48} />}
            title="Back-End "
            color="bg-lime-300"
            description = "On the server side, I handle everything from server configuration to database management. I work with languages like Node.js, Python, PHP, and Ruby on Rails to ensure your application runs smoothly and securely. My focus is on creating robust back-end systems that support your front-end functionality."
          />
          
           <ServiceCard
            icon={<SquareTerminal size={48} />}
            title="API Development & Integration "
            color="bg-pink-300"
            description = "I develop custom APIs tailored to your needs and integrate third-party APIs for functionalities like payments or social media sharing. This allows for seamless interactions between different parts of your application."
          />
          <ServiceCard
            icon={<Monitor size={48} />}
            title="Front-End "
            color="bg-teal-300"
            description = "I specialize in creating responsive and interactive user interfaces that engage users and enhance their experience. Using technologies like HTML, CSS, JavaScript, and frameworks such as React, Angular, or Vue.js, I build visually appealing designs tailored to your brand."
          />
          {/* <ServiceCard
            icon={<Smartphone size={48} />}
            title="Mobile"
            color="bg-pink-300"
            description = "In addition to web applications, I create native and hybrid mobile apps for both iOS and Android platforms. Utilizing frameworks like React Native or Flutter, I ensure your app is accessible on various devices while maintaining a consistent user experience."
          /> */}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, color, description}: { icon: any; title: string; color: string; description: string}) => {
  return (
    <div className={`${color} text-gray-900 p-6 rounded-lg text-center`}>
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>
      {description}
      </p>
    </div>
  );
};

export default AboutMe;