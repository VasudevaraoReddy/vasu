export const cvData = {
  personalInfo: {
    name: "Vasu Deva Rao Reddy",
    title: "Technical Consultant",
    email: "vasudevaraoreddy6@gmail.com", // Placeholder
    phone: "+91 9490177554", // Placeholder
    github: "https://github.com/VasudevaraoReddy",
    linkedin: "https://www.linkedin.com/in/vasu-deva-rao-reddy-5a3777212/", // Placeholder based on name
    location: "Bhimavaram, India",
    image: "https://via.placeholder.com/150", // Placeholder
    resume: "https://flowcv.com/resume/nf4aggs6cg38",
    about: "Full Stack Software Engineer with 4+ years of experience delivering scalable, secure enterprise web applications in agile environments. Strong expertise in front-end development using React and TypeScript, with solid backend experience building RESTful services and working across multiple technology stacks. Proven experience across the full software development lifecycle, including requirement analysis, system design, development, testing, deployment, and production support. Hands-on experience with CI/CD pipelines, cloud platforms, and adherence to architecture and security standards. Recognized for quickly adapting to new technologies, contributing to design discussions, and collaborating effectively with cross-functional technical and business teams."
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "C# (familiarity)"],
    frontend: ["HTML5", "CSS3", "React", "Angular", "Responsive Design", "Figma"],
    backend: ["Node.js", "Nest JS", "RESTful APIs", "Microservices", ".NET (familiarity)"],
    databases: ["SQL", "NoSQL"],
    architecture: ["REST APIs", "Microservices", "System Design"],
    cloudDevOps: ["AWS", "Azure", "CI/CD", "Observability"],
    aiMl: ["Agentic AI", "LangChain", "LangGraph"],
    practices: ["Agile", "SDLC", "Production Support", "Security Best Practices"]
  },
  experience: [
    {
      company: "Ernst & Young (EY)",
      role: "Software Engineer II",
      duration: "Aug 2023 - Present", // inferred
      description: "Leading contributions in CI/CD, Agentic AI, and full-stack development.",
      technologies: ["React", "Node JS", "Nest JS", "TypeScript", "Agentic AI", "CI/CD"],
      details: [
        "Contributed to the analysis, design, development, and delivery of large-scale enterprise web applications following formal SDLC and Agile methodologies.",
        "Designed and developed full-stack solutions using modern front-end frameworks (React, TypeScript) and backend services (Node.js, RESTful APIs) to meet complex business requirements.",
        "Collaborated on system architecture and design decisions, ensuring compliance with security, performance, and scalability standards.",
        "Partnered with UI/UX designers to convert Figma-based designs into reusable, scalable, and responsive front-end components.",
        "Worked with multiple backend technologies and service integrations, demonstrating flexibility across different enterprise stacks.",
        "Led and mentored a 3-member development team, conducting code reviews and ensuring adherence to best practices.",
        "Supported production systems, troubleshooting issues, performing root cause analysis, and implementing fixes.",
        "Implemented and maintained CI/CD pipelines and participated in release management and deployment activities.",
        "Worked closely with product owners, architects, and business stakeholders to translate requirements into technical solutions.",
        "Demonstrated ability to quickly learn and adapt to new technologies through delivery of an Agentic AI-based automation solution."
      ]
    },
    {
      company: "PreludeSys",
      role: "Software Engineer",
      duration: "Jan 2022 - Aug 2023", // inferred
      description: "Full-stack development, backend services, databases, and production support.",
      technologies: ["Full-stack", "Backend Services", "Databases"],
      details: [
        "Developed and maintained backend services for scalable applications.",
        "Provided production support and resolved critical issues.",
        "Collaborated with cross-functional teams to deliver features."
      ]
    }
  ],
  projects: [
    {
      title: "RBAC-Based Kitchen Dashboard",
      role: "Full Stack Developer",
      client: "Haldiram's",
      technologies: ["React.js", "RBAC", "REST API", "Node.js", "Figma"],
      description: "Built a React frontend with role-based access for store managers, cooks, and security staff—each with tailored permissions for item management, status updates, and delivery coordination.",
      details: [
        "Designed role-aware UI flows in React to support multiple operational roles (Store Manager, Cook, Security Desk).",
        "Implemented permission-based routing and components, ensuring each role accessed only relevant actions and data.",
        "Optimized UI for fast interaction in a high-paced kitchen environment.",
        "Integrated REST APIs for real-time order flow monitoring and status updates (e.g., pending → in progress → ready).",
        "Facilitated smooth handoff between kitchen and delivery partners by enabling specific views for Security Desk staff."
      ]
    },
    {
      title: "Enterprise Web Application Enhancement",
      role: "Frontend Developer",
      technologies: ["React.js", "CI/CD", "Git"],
      description: "Enhanced an existing production-grade web application by adding new features, improving UI flows, and supporting continuous delivery through CI/CD pipelines.",
      details: [
        "Developed and integrated new features in an existing React codebase.",
        "Refactored and extended existing components while maintaining code consistency.",
        "Actively participated in CI/CD deployments and build verification.",
        "Improved application stability during releases and reduced manual deployment effort."
      ]
    },
    {
      title: "Confidential Azure Management & Optimization Platform",
      role: "Full Stack Developer / Technical Lead",
      client: "EY (Internal)",
      technologies: [
        "React.js",
        "Nest JS",
        "Node.js",
        "Python",
        "FastAPI",
        "Azure",
        "CI/CD",
        "Automation",
        "Charts"
      ],
      description:
        "Led the development of a confidential internal platform to manage, create, and optimize Azure services using automated workflows, dashboards, and cloud-integrated scripts.",
      details: [
        "Led a team of 3 developers, driving task planning, technical direction, and delivery of the platform.",
        "Designed overall frontend and backend architecture for Azure service management and automation.",
        "Built React-based dashboards with charts and visualizations to monitor and optimize Azure resources.",
        "Developed backend orchestration services using NestJS and Node.js to coordinate cloud operations.",
        "Integrated secure execution of DevOps and infrastructure scripts using Node.js child processes.",
        "Implemented Python FastAPI services for cron jobs, background automation, data collection, and script execution.",
        "Integrated the platform with Microsoft Azure to enable automated resource creation, management, and optimization.",
        "Conducted code reviews, mentored team members, and ensured adherence to enterprise coding and security standards.",
        "Worked within CI/CD pipelines and supported release and deployment activities for the internal platform."
      ]
    }


  ],
  education: [
    {
      institution: "Swarnandhra College of Engineering and Technology",
      degree: "B.Tech/B.E.",
      year: "2022",
      location: "Narsapur"
    }
  ],
  certificates: [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: ""
    }
  ],
  languages: ["Telugu", "English"]
};
