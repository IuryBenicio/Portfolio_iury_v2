import liturgi from "../../assets/projects/displau/lit.png";
import mymovies from "../../assets/projects/displau/MyMovies.png";
import Efood from "../../assets/projects/displau/efood.png";
import Portfolio2 from "../../assets/projects/displau/port2.png";

export const projects: Projects[] = [
  {
    id: 1,
    title: "Portfólio V2.0",
    description:
      "Versão atualizada do meu portfólio pessoal, com um layout moderno e responsivo em formato de página única, simulando um cartão de visitas digital.",
    img: Portfolio2,
    tecnologias: ["React"],
    link: "https://iurybenicio.vercel.app/",
  },
  {
    id: 2,
    title: "MyMovies",
    description:
      "Aplicação web com sistema de autenticação e gerenciamento de listas personalizadas de filmes, com acesso a uma base de dados global de títulos.",
    img: mymovies,
    tecnologias: ["NodeJS", "MongoDB", "React"],
    link: "https://mymoovies.vercel.app/",
  },
  {
    id: 3,
    title: "QrLiturgy",
    description:
      "Sistema web para visualização de liturgia de cultos via QR Code, com um painel administrativo para personalização em tempo real da programação.",
    img: liturgi,
    tecnologias: ["NodeJS", "MongoDB", "React"],
    link: "https://baseigrejacristaliturgia.vercel.app/",
  },
  {
    id: 4,
    title: "Efood",
    description:
      "Simulação de uma plataforma de delivery com listagem de restaurantes, cardápios dinâmicos e sistema completo de checkout.",
    img: Efood,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "https://efood-atividade.vercel.app/",
  },
];
