import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiFastify, SiPrisma, SiMysql, SiGit, SiDocker, SiNginx, SiHtml5, SiCss3 } from "react-icons/si";
import { ReactElement } from "react";

interface CaseData {
  slug: string;
  title: string;
  description: string[];
  banner: string;
  images: string[];
  videos: string[];
  techs: { name: string; icon: ReactElement }[];
  features: string[];
  date: { from: string; to: string };
  note: string | null;
  demo: { repository: string; preview: string };
  tags: string[];
  challenge: {
    intro: string;
    points: string[];
    mission: string[];
  };
  solution: {
    beforeAfter: { before: string; after: string }[];
  };
}


export const cases: CaseData[] = [
  {
    slug: "chatt-on",
    title: "chatt.on",
    description: [
      "A chat application designed to provide a real-time communication experience between users, offering both private messaging and group chat capabilities.",
      "The platform aims to create a flexible, intuitive, and secure environment where users can interact effortlessly across different contexts and communities.",
      "Additionally, it includes a fully integrated admin panel to manage users, permissions, and app-wide settings, focusing on scalability and ease of use."
    ],
    banner: "/projects/mockups/chat-banner.webp",
    images: [
      "/projects/mockups/chat-mockup-1.webp",
      "/projects/mockups/chat-conversation-mobile.webp",
      "/projects/mockups/chat-profile-mobile.webp",
      "/projects/mockups/chat-menu-mobile.webp"
    ],
    videos: [
      "/projects/videos/chat-dashboard.webm"
    ],
    techs: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Fastify", icon: <SiFastify /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Nginx", icon: <SiNginx /> },
    ],
    date: { from: "03/2024", to: "07/2024" },
    features: [
      "Account creation and authentication",
      "Participation in group conversations in rooms",
      "Private conversations (Whisper)",
      "User profiles with information editing",
      "Switch between light and dark theme",
      "Exclusive administration page",
      "Management of permissions, roles, themes, and chats",
    ],
    note: "is in BETA version",
    demo: {
      repository: "https://github.com/ericzardo/chatt.on",
      preview: "https://chat.mentesmart.com.br/",
    },
    tags: ["Web Applications", "API Integration", "UX/UI"],
    challenge: {
      intro: "The concept behind chatt.on was to create a modern and robust chat platform from scratch, focusing on flexibility, scalability, and an intuitive user experience.",
      points: [
        "Develop an end-to-end real-time communication system with WebSocket.",
        "Ensure smooth handling of private and group conversations within a single app.",
        "Design a responsive and clean UI/UX to ensure easy onboarding and engagement.",
        "Implement a powerful admin panel for full control over user roles, permissions, themes, and chats.",
        "Optimize the backend architecture to support future scalability and high traffic volumes.",
      ],
      mission: [
        "Deliver a fully functional MVP ready for beta testers and client demo.",
        "Develop a scalable and secure system using modern technologies and Dockerized microservices.",
        "Design an interface that feels both professional and user-friendly.",
        "Ensure all features work seamlessly in both light and dark modes.",
      ],
    },
    solution: {
      beforeAfter: [
        {
          before: "The project started from a blank canvas with only a concept.",
          after: "A complete real-time chat app with private/group messages, roles, themes, and admin panel.",
        },
        {
          before: "No infrastructure in place for scalable architecture.",
          after: "Microservices running on Docker containers with Nginx reverse proxy and optimized Fastify APIs.",
        },
        {
          before: "No UI/UX prototype defined.",
          after: "A responsive and accessible interface with a focus on usability and modern design principles.",
        },
      ],
    },
  },
  {
    slug: "ebook-lp",
    title: "Ebook LP",
    description: [
      "The project aimed to create an attractive and functional landing page for the 'Mergulhe nas Profundezas do Conhecimento' (Dive into the Depths of Knowledge) e-book.",
      "The focus was on clearly conveying the value proposition of the e-book while guiding users towards conversion, whether downloading the material or subscribing for future updates.",
      "A minimalist yet impactful design was implemented to enhance readability and increase engagement."
    ],
    banner: "/projects/mockups/ebook-banner.webp",
    images: [
      "/projects/mockups/ebook-mockup-1.webp",
      "/projects/mockups/ebook-hero-mobile.webp",
      "/projects/mockups/ebook-journey-mobile.webp",
      "/projects/mockups/ebook-checkout-mobile.webp"
    ],
    videos: [
      "/projects/videos/ebook-page.webm"
    ],
    techs: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    date: { from: "01/2024", to: "04/2024" },
    features: [
      "Responsive design optimized for all devices",
      "Persuasive copywriting and call-to-actions",
      "SEO best practices implemented",
      "Contact form integration",
      "Smooth scroll and subtle animations",
    ],
    note: null,
    demo: {
      repository: "https://github.com/ericzardo/mentesmart-lp",
      preview: "https://mentesmart.com.br/",
    },
    tags: ["Landing Page", "SEO", "UI Design"],
    challenge: {
      intro: "The key challenge was to create a landing page that could effectively capture leads while showcasing the e-book’s core message in a clean and engaging format.",
      points: [
        "Design a landing page that aligns with modern UI trends and maximizes user retention.",
        "Write concise and persuasive copy to drive conversions.",
        "Ensure full responsiveness and cross-browser compatibility.",
        "Optimize performance and SEO to improve discoverability.",
      ],
      mission: [
        "Create a highly converting landing page from scratch.",
        "Deliver a lightweight and fast-loading product.",
        "Design a structure that could be reused for future campaigns.",
      ],
    },
    solution: {
      beforeAfter: [
        {
          before: "The e-book lacked an online presence.",
          after: "A polished and responsive landing page that effectively promotes the e-book and captures leads.",
        },
        {
          before: "No conversion funnel established.",
          after: "An optimized structure with CTA buttons, form integration, and SEO-friendly content.",
        },
      ],
    },
  },
];
