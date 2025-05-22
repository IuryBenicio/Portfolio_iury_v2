import liturgi from "../../assets/projects/displau/lit.png";
import mymovies from "../../assets/projects/displau/MyMovies.png";
import Efood from "../../assets/projects/displau/efood.png";
import Portfolio2 from "../../assets/projects/displau/port2.png";

export const projects: Projects[] = [
  {
    id: 1,
    title_pt: "Portfólio V2.0",
    description_pt:
      "Versão atualizada do meu portfólio pessoal, com um layout moderno e responsivo em formato de página única, simulando um cartão de visitas digital.",
    description_eng:
      "An updated version of my personal portfolio with a modern and responsive layout in a single-page format, simulating a digital business card.",
    img: Portfolio2,
    tecnologias: ["React"],
    link: "https://iurybenicio.vercel.app/",
  },
  {
    id: 2,
    title_pt: "MyMovies",
    description_pt:
      "Aplicação web com sistema de autenticação e gerenciamento de listas personalizadas de filmes, com acesso a uma base de dados global de títulos.",
    description_eng:
      "A web application with an authentication system and management of personalized movie lists, with access to a global movie database.",
    img: mymovies,
    tecnologias: ["NodeJS", "MongoDB", "React"],
    link: "https://mymoovies.vercel.app/",
  },
  {
    id: 3,
    title_pt: "QrLiturgy",
    description_pt:
      "Sistema web para visualização de liturgia de cultos via QR Code, com um painel administrativo para personalização em tempo real da programação.",
    description_eng:
      "A web system for viewing worship liturgies via QR Code, featuring an admin panel for real-time customization of the service schedule.",
    img: liturgi,
    tecnologias: ["NodeJS", "MongoDB", "React"],
    link: "https://baseigrejacristaliturgia.vercel.app/",
  },
  {
    id: 4,
    title_pt: "Efood",
    description_pt:
      "Simulação de uma plataforma de delivery com listagem de restaurantes, cardápios dinâmicos e sistema completo de checkout.",
    description_eng:
      "A delivery platform simulation with restaurant listings, dynamic menus, and a complete checkout system.",
    img: Efood,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "https://efood-atividade.vercel.app/",
  },
];
