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
      id: "projects",
      title: "Projects",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
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
        "Eco Graphene which is a company dedicated to the production of graphene based on recycling products such as PET.",
        tags: [
          {
            name: "js",
            color: "yellow-text-gradient",
          },
          {
            name: "html",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
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
        "Mac Design is a company dedicated to brand design in order to translate art into a marketing proposal.",
        tags: [
          {
            name: "js",
            color: "yellow-text-gradient",
          },
          {
            name: "html",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
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
        "Project that looks for interactive ways to learn the concepts that the Driver's Manual contains, with the aim of preparing for the theoretical driving test and even the practical one.",
        tags: [
          {
            name: "js",
            color: "yellow-text-gradient",
          },
          {
            name: "html",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
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
        "BV is an entity dedicated to advising on different branches of law.",
        tags: [
          {
            name: "js",
            color: "yellow-text-gradient",
          },
          {
            name: "html",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
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
        "Sporting Futsal es un equipo profesional de Futsal aplicado en el crecimiento personal como futbolista de nuestros jugadores.",
      tags: [
        {
          name: "js",
          color: "yellow-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
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
        "ERS system for the registration and manipulation of various internal processes for the company ConstruID",
        tags: [
          {
            name: "js",
            color: "yellow-text-gradient",
          },
          {
            name: "html",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
          },
          {
            name: "firebase",
            color: "orange-text-gradient",
          },
        ],
      image: ersconstruid,
      link: "https://www.behance.net/gallery/176852941/ERS-ConstruID",
      link_icon: behance
    },
    {
      name: "ConstruID",
      description:
        "Company dedicated to the construction, remodeling and repair of homes.",
        tags: [
          {
            name: "js",
            color: "yellow-text-gradient",
          },
          {
            name: "html",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
          },
        ],
      image: construid,
      link: "https://www.behance.net/gallery/176851429/ConstruID",
      link_icon: behance
    },
    {
      name: "Marcapais",
      description:
        "Marcapais is a consulting company that empowers Costa Rican and foreign companies to improve processes, systems and execute successful projects..",
        tags: [
          {
            name: "js",
            color: "yellow-text-gradient",
          },
          {
            name: "html",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
          },
        ],
      image: marcapais,
      link: "https://www.behance.net/gallery/126652023/MarcapaisCR",
      link_icon: behance
    },
    {
      name: "Scholly",
      description:
        "It is a scholarship application system focused on streamlining data collection by those in charge of this process through online forms, which store this data in their offices.",
        tags: [
          {
            name: "js",
            color: "yellow-text-gradient",
          },
          {
            name: "html",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
          },
          {
            name: "nodejs",
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
        " OTIUM is an interface that allows college students to request a lunch in advance at any of the different businesses with the added value that each time the student is at the time of payment the system give you the option to donate the extra change to this same relief fund",
        tags: [
          {
            name: "js",
            color: "yellow-text-gradient",
          },
          {
            name: "html",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
          },
          {
            name: "nodejs",
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
        "Vernun identifies itself as a project that seeks to promote altruistic projects for low-income people, launching two first projects in the area of ​​organizing scholarships and donations for students.",
        tags: [
          {
            name: "js",
            color: "yellow-text-gradient",
          },
          {
            name: "html",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
          },
        ],
      image: vernun,
      link: "https://www.behance.net/gallery/105476819/VERNUN",
      link_icon: behance
    },
    {
      name: "Mr Kreuzung",
      description:
        "Mr.Kreuzung is based on an application and website with the aim of education in advance and constantly during driving to help drivers and aspiring drivers to find guidance towards optimal driving and an overview on the road more suitable.",
        tags: [
          {
            name: "js",
            color: "yellow-text-gradient",
          },
          {
            name: "html",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
          },
          {
            name: "nodejs",
            color: "pink-text-gradient",
          },
        ],
      image: mrkreuzung,
      link: "https://www.behance.net/gallery/103388785/MRKREUZUNG",
      link_icon: behance
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };