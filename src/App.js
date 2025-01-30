import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ReactTyped } from "react-typed";
import {
  BriefcaseIcon, CalendarIcon, EnvelopeIcon, PhoneIcon,
  LinkIcon, CodeBracketIcon, CogIcon, GlobeAltIcon, CloudIcon, WrenchIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Extracurricular />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let active = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          active = section.id;
        }
      });

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Olivia Tseng</h1>
        <ul className="flex space-x-6 items-center">
          {[
            { id: "home", label: "Home" },
            { id: "education", label: "Education" },
            { id: "skills", label: "Skills" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "extracurricular", label: "Extracurricular" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-gray-700 hover:text-accent ${activeSection === item.id ? "text-primary font-bold" : ""
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="CV_Olivia Tseng.pdf"
              className="bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-secondary transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}


function Home() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-gray-600 via-primary to-secondary text-white py-20 px-6 text-center"
    >
      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Building <span className="text-blue-200">Reliable</span> Software Solutions
        </h1>

        {/* Dynamic Typing Animation */}
        <h2 className="text-3xl font-semibold mb-6">
          <ReactTyped
            strings={["Hi, I’m Olivia Tseng!"]}
            typeSpeed={50}
            backSpeed={30}
            loop={false}
          />
        </h2>

        <p className="text-lg font-light mb-8 leading-relaxed">
          A Master’s student in <span className="font-semibold">Computer Science </span>
          at UBC, with a strong foundation in <span className="font-semibold">software engineering</span>,
          <span className="font-semibold"> AI</span>, and <span className="font-semibold">Machine Learning</span>.
          <br />I specialize in designing efficient and scalable systems to tackle real-world challenges effectively.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-10">
          <a
            href="#education"
            className="inline-block bg-accent text-primary font-semibold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-secondary hover:shadow-xl transition-transform transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="relative mt-10">
        <svg
          className="absolute -bottom-10 left-10 w-32 opacity-30 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0l3.09 6.26L22 7.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 12.14 2 7.27l6.91-1.01L12 0z" />
        </svg>
        <svg
          className="absolute -top-10 right-10 w-32 opacity-30 text-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0l3.09 6.26L22 7.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 12.14 2 7.27l6.91-1.01L12 0z" />
        </svg>
      </div>
    </section>
  );
}

function Education() {
  const educationList = [
    {
      school: "The University of British Columbia (UBC)",
      degree: "Master’s Degree in Computer Science",
      date: "SEP 2023 – JUN 2025",
      details: [
        "GPA: 3.75",
        "Scholarship: UBC Okanagan Graduate Research Scholarships",
        "Key Modules: Advanced Algorithms, Applied Machine Learning, Computer Vision, Computer Graphics, HCI, Unity",
      ],
      logo: "images/ubc_logo.png",
    },
    {
      school: "National Chung Cheng University (CCU)",
      degree: "Bachelor’s Degree in Information Management",
      date: "SEP 2019 – JUN 2023",
      details: [
        "GPA: 3.87",
        "Awards: Fall 2022 Dean's List, 1st Place in CCU Global Elite Program",
        "Key Modules: Data Structures, SQL Database, System Analysis & Design, Computer Networks, Web App Development",
      ],
      logo: "images/ccu_logo.png",
    },
  ];

  return (
    <section id="education" className="bg-gray-50 py-20">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">Education</h2>
      <div className="max-w-5xl mx-auto space-y-10">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6"
          >
            <img
              src={edu.logo}
              alt={`${edu.school} Logo`}
              className="w-20 h-20 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-gray-700 italic">{edu.school}</p>
              <p className="text-gray-600 mb-4">{edu.date}</p>
              <ul className="list-disc text-gray-700 text-sm space-y-2 pl-5">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function Skills() {
  return (
    <section id="skills" className="bg-gray-200 py-20">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary flex items-center mb-4">
            <CodeBracketIcon className="h-6 w-6 mr-2" /> Programming Languages
          </h3>
          <ul className="list-disc text-gray-700 text-sm space-y-2">
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>C#</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary flex items-center mb-4">
            <CogIcon className="h-6 w-6 mr-2" /> Frameworks & Libraries
          </h3>
          <ul className="list-disc text-gray-700 text-sm space-y-2">
            <li>TensorFlow, PyTorch</li>
            <li>Scikit-learn, NumPy</li>
            <li>Keras, OpenCV</li>
            <li>React, D3.js</li>
            <li>RPA Tools</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary flex items-center mb-4">
            <CloudIcon className="h-6 w-6 mr-2" /> Cloud & Platforms
          </h3>
          <ul className="list-disc text-gray-700 text-sm space-y-2">
            <li>AWS</li>
            <li>Azure</li>
            <li>Linux, Unix</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary flex items-center mb-4">
            <WrenchIcon className="h-6 w-6 mr-2" /> Tools & Development
          </h3>
          <ul className="list-disc text-gray-700 text-sm space-y-2">
            <li>Git, GitHub</li>
            <li>Docker</li>
            <li>Unity</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary flex items-center mb-4">
            <GlobeAltIcon className="h-6 w-6 mr-2" /> Languages
          </h3>
          <ul className="list-disc text-gray-700 text-sm space-y-2">
            <li>Mandarin (Native)</li>
            <li>English (Highly Proficient)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const experienceList = [
    {
      position: "Machine Learning Intern",
      company: "BC Cancer",
      date: "SEP 2023 – Present",
      details: [
        "Conducted AI bias analysis on 2.5M+ images.",
        "Developed 3+ deep learning models for ethnic feature recognition with Grad-CAM transparency.",
      ],
    },
    {
      position: "AI Data Trainer",
      company: "Outlier",
      date: "OCT 2024 – JAN 2025",
      details: [
        "Improved AI-generated code quality by providing feedback and testing models.",
        "Completed 5+ Python-based projects to evaluate and improve coding tasks for generative AI systems.",
      ],
    },
    {
      position: "Teaching Assistant",
      company: "UBC",
      date: "SEP 2024 – DEC 2024",
      details: [
        "Led Java programming labs for 30+ students, helping them develop problem-solving skills.",
        "Mentored students on research-based projects to enhance their academic development.",
      ],
    },
    {
      position: "System Development Intern",
      company: "MIRDC Taiwan",
      date: "JUL 2021 – DEC 2021",
      details: [
        "Developed a platform to manage CSR data for 147 companies, improving workflow efficiency by 25%.",
        "Integrated systems for ESG compliance, increasing data accuracy and reducing processing time.",
      ],
    },
    {
      position: "Software Development Intern",
      company: "Coretronic Co.",
      date: "JUL 2021 – AUG 2021",
      details: [
        "Automated testing processes using RPA tools, reducing manual processing times by 95%.",
        "Simplified bug-handling workflows, cutting turnaround times from 180 to 15 minutes.",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-50 py-20">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">Experience</h2>
      <div className="max-w-7xl mx-auto relative px-6">
        <div className="absolute left-4 top-0 w-1 bg-primary h-full"></div>

        <div className="space-y-12">
          {experienceList.map((exp, index) => (
            <div key={index} className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <BriefcaseIcon className="h-4 w-4 text-white" />
                </div>
                {index !== experienceList.length - 1 && (
                  <div className="flex-1 w-px bg-primary mt-2"></div>
                )}
              </div>

              <div className="ml-6 bg-white shadow-lg rounded-lg p-6 w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                  <div className="flex items-center text-gray-600">
                    <CalendarIcon className="h-5 w-5 mr-1" />
                    <span>{exp.date}</span>
                  </div>
                </div>
                <p className="text-gray-700 italic mt-2">{exp.company}</p>
                <ul className="list-disc text-gray-700 text-sm space-y-2 mt-4 pl-5">
                  {exp.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Projects() {
  const projectList = [
    {
      title: "AI Ethnicity in Medical Images",
      description: "AI models to identify racial features in 2.5M+ medical images.",
      link: "https://github.com/Ollivvt/AI-ethnicity-med-image",
      tags: ["AI", "ML", "Model Development"],
    },
    {
      title: "Home Monitoring Security System",
      description: "Real-time detection with TensorFlow and OpenCV.",
      link: "https://github.com/Ollivvt/home-monitoring-sys",
      tags: ["AIOT", "Tensorflow", "OpenCV"],
    },
    {
      title: "Big Data Visualization",
      description: "Visualizations using D3.js. through Apache Spark.",
      link: "https://github.com/martin0310/Travel_Vision",
      tags: ["D3.js", "Web Crawling", "Data Visualization"],
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-100 via-gray-300 to-gray-100 py-20">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            {/* Tag Section */}
            <div className="flex flex-wrap space-x-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-accent text-white text-xs font-semibold py-1 px-3 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-3 text-primary">{project.title}</h3>

            {/* Project Description */}
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* View on GitHub */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3.5v0M15 12a3 3 0 01-6 0 3 3 0 016 0zm-1.7-3.1l-1.6 1.2-1.6-1.2M3 12h1m1.64-4.25l-.48-.69m0 0l.48-.69a9 9 0 0112.2 0m-.48.69-.48.69M21 12h-1m-1.64 4.25l.48.69m0 0-.48.69a9 9 0 01-12.2 0m.48-.69.48-.69"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}



function Extracurricular() {
  const activities = [
    {
      title: "National Digital Humanities Big Data Competition",
      description: "Top 12 Finalist/100 teams – Designed app architecture and led proposal.",
      image: "images/competition.jpg"
    },
    {
      title: "Microsoft Intern Program (2022 Coding Angels)",
      description: "Led ~4 teammates to integrate Face API for facial recognition.",
      image: "images/microsoft.jpg"
    },
    {
      title: "CCU Career Fair 2021",
      description: "Organized 5 events and led a 9-member team.",
      image: "images/careerfair.jpg"
    }
  ];

  return (
    <section id="extracurricular" className="bg-white py-20">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">Extracurricular</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all group"
          >
            <img src={activity.image} alt={activity.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-3">{activity.title}</h3>
            <p className="text-gray-600 mb-4">{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-primary text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Contact</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center space-x-4">
          <EnvelopeIcon className="h-6 w-6 text-accent" />
          <p>
            Email:{" "}
            <a
              href="mailto:yutingtseng0203@gmail.com"
              className="underline hover:text-accent"
            >
              yutingtseng0203@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <PhoneIcon className="h-6 w-6 text-accent" />
          <p>Phone: +12363383149</p>
        </div>
        <div className="flex items-center space-x-4">
          <LinkIcon className="h-6 w-6 text-accent" />
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/olivia-tseng-yuting/"
              className="underline hover:text-accent"
            >
              Olivia Tseng
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-4">
      <p>© 2025 Olivia Tseng. All Rights Reserved.</p>
    </footer>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
