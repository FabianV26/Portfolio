import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    cedesDonBosco,
    construID,
    cenfotec,
    cecropia,
    ecographene,
    macdesign,
    carcheck,
    bv,
    sporting,
    ersconstruid,
    construid,
    marcapais,
    scholly,
    vernun,
    otium,
    mrkreuzung,
    webicon,
    jobit,
    tripguide,
    threejs,
    behance,
    github
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Bachelor's Degree in Software Engineering",
      company_name: "Cenfotec University",
      icon: cenfotec,
      iconBg: "#016aea",
      date: "Feb 2021 - Actuality",
      points: [
        "Ability to build quality software applications, local, web-based and for mobile devices, applying the disciplines used for software production, using proprietary and open tools and platforms, using iterative-evolutionary, iterative-incremental software development processes and agile processes and using techniques for written and oral expression, and teamwork techniques.",
      ],
    },
    {
      title: "Junior Software Developer",
      company_name: "Cecropia Solutions",
      icon: cecropia,
      iconBg: "#383E56",
      date: "May 2022 - Sep 2022",
      points: [
        "Program development using React.js.",
        "Use of Node.js for databases.",
        "The projects were worked through git using bitbucket.",
        "The projects were worked with the Scrum framework.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Eventour and ConstruID",
      icon: construID,
      iconBg: "#ffff",
      date: "Nov 2020 - May 2022",
      points: [
        "Web development using HTML, CSS , jQuery and JavaScript.",
        "Development of programs and apps using MongoDB, Node.js, and Firebase.",
        "Basic mobile application development using React Native and Android Studio.",
        "UI/UX design for websites and program interfaces.",
      ],
    },
    {
      title: "Mid-level technician in Computer Software Development",
      company_name: "Don Bosco Technical High School",
      icon: cedesDonBosco,
      iconBg: "#383E56",
      date: "2018 - 2020",
      points: [
        "Train a resource capable of establishing processes of assertive communication with different users to know their needs and be able to offer different specific solutions to solve tasks through the technology.",
        "Administration of data communication resources with development, monitoring and security capabilities",
        "Resolution of computer problems Knowledge of cloud platforms",
        "Professionals with the ability to adapt and resilient",
        "Suitable for teamwork.",
        "Values ​​training Self learning",
      ],
    },
    
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecographene",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecographene, 
      link: "https://github.com/FabianV26/Ecographene",
      another_link: "https://fabianv26.github.io/Ecographene/",
      link_icon: github,
      another_link_icon: webicon
    },
    {
      name: "Mac Design",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: macdesign,
      link: "https://github.com/FabianV26/MacDesign",
      another_link: "https://fabianv26.github.io/MacDesign/",
      link_icon: github,
      another_link_icon: webicon
    },
    {
      name: "Car Check",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carcheck,
      link: "https://github.com/FabianV26/Car-Check",
      another_link: "https://fabianv26.github.io/Car-Check/",
      link_icon: github,
      another_link_icon: webicon

    },
    {
      name: "BV",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: bv,
      link: "https://github.com/FabianV26/BV",
      another_link: "https://fabianv26.github.io/BV/",
      link_icon: github,
      another_link_icon: webicon
    },
    {
      name: "Sporting FutSal",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: sporting,
      link: "https://github.com/FabianV26/Sportingfs",
      another_link: " https://fabianv26.github.io/Sportingfs/",
      link_icon: github,
      another_link_icon: webicon
    },
    {
      name: "ERS ConstruID",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: ersconstruid,
      source_code_link: "https://github.com/",
    },
    {
      name: "ConstruID",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: construid,
      source_code_link: "https://github.com/",
    },
    {
      name: "Marcapais",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: marcapais,
      link: "https://www.behance.net/gallery/126652023/MarcapaisCR",
      link_icon: behance
    },
    {
      name: "Scholly",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: scholly,
      link: "https://www.behance.net/gallery/105477443/SCHOLLY",
      link_icon: behance
    },
    {
      name: "Otium",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: otium,
      link: "https://www.behance.net/gallery/105477885/OTIUM",
      link_icon: behance
    },
    {
      name: "Vernun",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: vernun,
      link: "https://www.behance.net/gallery/105476819/VERNUN",
      link_icon: behance
    },
    {
      name: "Mr Kreuzung",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: mrkreuzung,
      link: "https://www.behance.net/gallery/103388785/MRKREUZUNG",
      link_icon: behance
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };