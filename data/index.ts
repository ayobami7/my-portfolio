import { Brain, Code, Database, Github, Globe, Linkedin, Mail, Server, Sparkles } from "lucide-react";


export const navItems = ["HOME", "ABOUT", "SERVICES", "PROJECTS", "WRITING", "CONTACT"];
  

export const aboutPoints = [
    'Software engineer building scalable systems',
    'Reduced LMS bundle size by 30% by migrating from Redux to React Query at Techspertise',
    'Built microservices digital wallet with Kafka and PostgreSQL handling distributed transactions',
    'Researching bias in face recognition models using SHAP and LIME for MSc thesis',
    'Currently exploring server-side rendering optimization in Next.js 15',
    'Strong advocate for writing readable, maintainable code and comprehensive documentation'
  ];

  
  export const projects = [
    {
      title: 'Social Distance Monitor',
      subtitle: 'AI-Powered Safety Solution',
      description: 'A platform designed to monitor social distancing in real-time using computer vision techniques.',
      tech: ['PYTHON', 'OPEN-CV', 'FLASK', 'ML', 'YOLOv8'],
      link: 'https://social-distance-monitor.onrender.com/',
      status: 'OPERATIONAL',
      category: 'AI',
      icon: Globe
    },
    {
      title: 'Digital Wallet',
      subtitle: 'Microservices Architecture',
      description: 'Built a distributed transaction system using Saga pattern with Spring Boot, Kafka, and PostgreSQL. Handles 500+ transactions/second with eventual consistency.',
      tech: ['JAVA', 'SPRINGBOOT', 'DOCKER', 'KAFKA', 'POSTGRESQL'],
      link: 'https://digital-wallet.onrender.com/',
      status: 'IN_DEVELOPMENT',
      category: 'DEVOPS',
      icon: Globe,
      blogPost: '/writing/digital-wallet-microservices'
    },
    {
      title: 'Face Recognition Fairness',
      subtitle: 'ML Bias Analysis',
      description: 'Evaluating demographic bias in FaceNet using SHAP and LIME. Research project analyzing fairness across 10,000+ images for MSc thesis.',
      tech: ['PYTHON', 'TENSORFLOW', 'SHAP', 'LIME', 'JUPYTER'],
      link: 'https://github.com/ayobami7/face_recognition_model',
      status: 'IN_DEVELOPMENT',
      category: 'AI',
      icon: Brain
    },
    {
      title: 'BrandNest',
      subtitle: 'AI Branding Snippets Generator',
      description: 'An AI-powered branding snippets generator that creates branding content and keywords based on user input. Built with Python, Groq AI, Next.js, TypeScript, and React.',
      tech: ['PYTHON', 'GROQ_AI', 'NEXT.JS', 'TYPESCRIPT', 'REACT', ],
      link: 'https://brandnest-git-master-ayobami7s-projects.vercel.app/',
      status: 'OPERATIONAL',
      category: 'AI',
      icon: Sparkles,
    },
    {
      title: 'Excite Trade',
      subtitle: 'Agricultural Platform',
      description: 'A platform designed to digitize information sharing among agricultural stakeholders, facilitating seamless communication from farmers to intermediaries.',
      tech: ['NEXT.JS', 'TYPESCRIPT', 'TAILWIND_CSS'],
      link: 'https://excite-trade-1.vercel.app/',
      status: 'OPERATIONAL',
      category: 'WEB',
      icon: Globe
    }
  ];

  
  export const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web applications with modern frameworks and best practices',
      skills: ['React', 'Next.js', 'Node.js', 'TypeScript']
    },
    {
      icon: Brain,
      title: 'AI/ML Solutions',
      description: 'Machine learning models and AI-powered applications for business automation',
      skills: ['Python', 'TensorFlow', 'NLP', 'Computer Vision']
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Scalable APIs, microservices, and database architecture design',
      skills: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker']
    },
    // {
    //   icon: Server,
    //   title: 'DevOps & Cloud',
    //   description: 'CI/CD pipelines, cloud infrastructure, and deployment automation',
    //   skills: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions']
    // }
  ];

  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer",
      desc: "Developed and maintained user-facing features and enhancing interactivity using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    }
  ];
  
  
  export const socialMedia = [
    {
      id: 1,
      icon: Github,
      img: "/git.svg",
      url: "https://github.com/ayobami7",
      label: "GitHub"
    },
    {
      id: 1,
      icon: Mail,
      img: "/git.svg",
      url: "mailto:adeyemoayobami47@gmail.com",
      label: "Email"
    },
    {
      id: 3,
      icon: Linkedin,
      img: "/link.svg",
      url: "https://www.linkedin.com/in/adeyemoayobamipaul",
      label: "LinkedIn"
    },
  ];