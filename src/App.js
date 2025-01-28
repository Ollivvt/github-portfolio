import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BriefcaseIcon, CalendarIcon, EnvelopeIcon, PhoneIcon,
          LinkIcon, CodeBracketIcon, CogIcon, GlobeAltIcon, CloudIcon, WrenchIcon 
        } from '@heroicons/react/24/outline';

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
      <Resume />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Olivia Tseng</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#education" className="text-gray-700 hover:text-blue-500">Education</a></li>
          <li><a href="#skills" className="text-gray-700 hover:text-blue-500">Skills</a></li>
          <li><a href="#experience" className="text-gray-700 hover:text-blue-500">Experience</a></li>
          <li><a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a></li>
          <li><a href="#extracurricular" className="text-gray-700 hover:text-blue-500">Extracurricular</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
          <li><a href="#resume" className="text-gray-700 hover:text-blue-500">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-extrabold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl font-light mb-6">As a Master's student in Computer Science at UBC, 
        I specialize in Artificial Intelligence, Machine Learning, and Computer Vision with a particular 
        focus on real-world challenges. With hands-on experience in developing intelligent platforms and 
        automation tools, I have consistently enhanced data processing efficiency and accuracy, driving 
        performance improvements. I am eager to apply my expertise in machine learning, software 
        development, and data science to create impactful, innovative solutions across industries. 
        Open to connecting with professionals in AI, machine learning, and software engineering to 
        collaborate on cutting-edge technologies.</p>
      <a
        href="#education"
        className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100"
      >
        Explore My Journey
      </a>
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
        "Key Modules: Advanced Algorithms, Applied Machine Learning, Computer Vision, Computer Graphics, HCI, Unity"
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
        "Key Modules: Data Structures, SQL Database, System Analysis & Design, Computer Networks, Web App Development"
      ],
      logo: "images/ccu_logo.png",
    }
  ];

  return (
    <section id="education" className="bg-gray-50 py-20">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Education</h2>
      <div className="max-w-5xl mx-auto space-y-10">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6"
          >
            {/* Logo */}
            <img
              src={edu.logo}
              alt={`${edu.school} Logo`}
              className="w-20 h-20 object-contain"
            />
            {/* Content */}
            <div>
              <h3 className="text-xl font-bold text-blue-600">{edu.degree}</h3>
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
    <section id="skills" className="bg-gray-100 py-20">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-600 flex items-center mb-4">
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
          <h3 className="text-xl font-bold text-blue-600 flex items-center mb-4">
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
          <h3 className="text-xl font-bold text-blue-600 flex items-center mb-4">
            <CloudIcon className="h-6 w-6 mr-2" /> Cloud & Platforms
          </h3>
          <ul className="list-disc text-gray-700 text-sm space-y-2">
            <li>AWS</li>
            <li>Azure</li>
            <li>Linux, Unix</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-600 flex items-center mb-4">
            <WrenchIcon className="h-6 w-6 mr-2" /> Tools & Development
          </h3>
          <ul className="list-disc text-gray-700 text-sm space-y-2">
            <li>Git, GitHub</li>
            <li>Docker</li>
            <li>Unity</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-600 flex items-center mb-4">
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
      position: "AI Data Trainer",
      company: "Outlier",
      date: "OCT 2024 – Present",
      details: [
        "Improved AI-generated code quality by providing feedback and testing models.",
        "Completed 5+ Python-based projects to evaluate and improve coding tasks for generative AI systems."
      ]
    },
    {
      position: "Machine Learning Intern",
      company: "BC Cancer",
      date: "SEP 2023 – Present",
      details: [
        "Conducted AI bias analysis on 2.5M+ images.",
        "Developed 3+ deep learning models for ethnic feature recognition with Grad-CAM transparency."
      ]
    },
    {
      position: "Teaching Assistant",
      company: "UBC",
      date: "SEP 2024 – DEC 2024",
      details: [
        "Led Java programming labs for 30+ students, helping them develop problem-solving skills.",
        "Mentored students on research-based projects to enhance their academic development."
      ]
    },
    {
      position: "System Development Intern",
      company: "MIRDC Taiwan",
      date: "JUL 2021 – DEC 2021",
      details: [
        "Developed a platform to manage CSR data for 147 companies, improving workflow efficiency by 25%.",
        "Integrated systems for ESG compliance, increasing data accuracy and reducing processing time."
      ]
    },
    {
      position: "Software Development Intern",
      company: "Coretronic Co.",
      date: "JUL 2021 – AUG 2021",
      details: [
        "Automated testing processes using RPA tools, reducing manual processing times by 95%.",
        "Simplified bug-handling workflows, cutting turnaround times from 180 to 15 minutes."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50 py-20">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Experience</h2>
      <div className="max-w-7xl mx-auto relative px-6">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 w-1 bg-blue-600 h-full"></div>

        <div className="space-y-12">
          {experienceList.map((exp, index) => (
            <div key={index} className="flex items-start">
              {/* Timeline Dot */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10">
                  <BriefcaseIcon className="h-4 w-4 text-white" />
                </div>
                {/* Connector Line */}
                {index !== experienceList.length - 1 && (
                  <div className="flex-1 w-px bg-blue-600 mt-2"></div>
                )}
              </div>

              {/* Experience Card */}
              <div className="ml-6 bg-white shadow-lg rounded-lg p-6 w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-blue-600">{exp.position}</h3>
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
    { title: "AI Ethnicity in Medical Images", description: "AI models to identify racial features in 2.5M+ medical images.", link: "#" },
    { title: "Home Monitoring Security System", description: "Real-time detection with TensorFlow and OpenCV.", link: "#" },
    { title: "Big Data Visualization", description: "Visualizations using D3.js.", link: "#" },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-20">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all group"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4 group-hover:text-blue-500 transition-all">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline font-medium"
            >
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
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Extracurricular</h2>
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
    <section id="contact" className="bg-blue-500 text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Contact</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center space-x-4">
          <EnvelopeIcon className="size-6" />
          <p>Email: <a href="mailto:yutingtseng0203@gmail.com" className="underline">yutingtseng0203@gmail.com</a></p>
        </div>
        <div className="flex items-center space-x-4">
          <PhoneIcon className="size-6" />
          <p>Phone: +12363383149</p>
        </div>
        <div className="flex items-center space-x-4">
          <LinkIcon className="size-6" />
          <p>LinkedIn: <a href="https://www.linkedin.com/in/olivia-tseng-yuting/" className="underline">Olivia Tseng</a></p>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="bg-gray-100 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Resume</h2>
      <div className="text-center">
        <a
          href="public/Olivia Tseng_250123.pdf"
          download
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600"
        >
          Download My Resume
        </a>
      </div>
      <iframe
        src="public/Olivia Tseng_250123.pdf"
        className="w-full h-screen mt-10 border rounded-lg"
        title="Olivia Tseng's Resume"
      ></iframe>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-4">
      <p>© 2025 Olivia Tseng. Created by create-react-app. All Rights Reserved.</p>
    </footer>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
