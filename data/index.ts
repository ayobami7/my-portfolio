import { Brain, Code, Database, Github, Globe, Linkedin, Mail, Server, Sparkles } from "lucide-react";


export const navItems = ["HOME", "ABOUT", "SERVICES", "PROJECTS", "CONTACT"];
  

export const aboutPoints = [
    'Software engineer passionate about building scalable systems',
    'System design enthusiast with focus on clean architecture',
    'Continuous learner exploring AI/ML and distributed systems',
    'Building projects with passion, commitment, and determination',
    'Strong advocate for code quality and best practices',
    'Enjoying the creative process while solving real problems'
  ];


  export const gridItems = [
    {
      id: 1,
      title: "I am an adaptable and approachable software engineer, committed to creating positive first impressions and fostering effective collaborations.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[30vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I offer flexible communication across various time zones to accommodate global collaborations.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "I am dedicated to continually expanding and refining my technical skill set.",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "A technology enthusiast passionate about developing innovative solutions and advancing the field.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Actively developing a JavaScript library to contribute to the developer community and enhance coding efficiency.",
      description: "",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Interested in collaborating on a project? Let's connect to discuss potential opportunities.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
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
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
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