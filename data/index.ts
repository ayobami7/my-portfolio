import { Brain, Code, Database, Github, Globe, Linkedin, Mail, Server, Sparkles } from "lucide-react";


export const navItems = ["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT"];
  

export const aboutPoints = [
    'Software engineer building scalable systems',
    'Reduced LMS bundle size by 30% by migrating from Redux to React Query at Techspertise',
    'Continuous learner exploring AI/ML and distributed systems',
    'Building face recognition fairness evaluation tool for MSc thesis',
    'Currently exploring server-side rendering optimization in Next.js 15',
  ];

  
  export const projects = [
    {
      title: 'BrandNest',
      subtitle: 'AI Branding Snippets Generator',
      description: 'An AI-powered branding snippets generator that creates branding content and keywords based on user input. Built with Python, Groq AI, Next.js, TypeScript, and React.',
      tech: ['PYTHON', 'GROQ_AI', 'NEXT.JS', 'TYPESCRIPT', 'REACT', ],
      link: 'https://brandnest-git-master-ayobami7s-projects.vercel.app/',
      status: 'OPERATIONAL',
      category: 'AI',
      icon: Sparkles
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
    },
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
      subtitle: 'Simplified Financial Solution',
      description: 'A platform designed to provide secure and efficient digital wallet services.',
      tech: ['JAVA', 'SPRINGBOOT', 'DOCKER'],
      link: 'https://digital-wallet.onrender.com/',
      status: 'IN_DEVELOPMENT',
      category: 'AI',
      icon: Globe
    },
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