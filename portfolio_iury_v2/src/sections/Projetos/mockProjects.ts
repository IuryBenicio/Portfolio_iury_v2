import liturgi from "../../assets/projects/displau/lit.png";
import mymovies from "../../assets/projects/displau/MyMovies.png";
import Efood from "../../assets/projects/displau/efood.png";
import Portfolio2 from "../../assets/projects/displau/port2.png";

export const projects: Projects[] = [
  {
    id: 1,
    title: "Portfólio V2.0",
    description:
      'Meu portfólio pessoal, atualizado, com um visual maismoderno, de "página única", simulando um cartão de visitas',
    img: Portfolio2,
    tecnologias: ["React"],
    link: "https://iurybeniciov2.vercel.app/",
  },
  {
    id: 2,
    title: "MyMovies",
    description:
      "Aplicação web com sistema de cadastro e autenticação onde vocêpode criar listar customizadas de filmes, tendo acesso a filmes do mundo inteiro",
    img: mymovies,
    tecnologias: ["NodeJS", "MongoDB", "React"],
    link: "https://mymoovies.vercel.app/",
  },
  {
    id: 3,
    title: "QrLiturgy",
    description:
      "Aplicação feita com o intuito de mostrar a liturgia do culto de forma prática, onde temos tanto a interface para o usúario que acessara o site através de um QrCode, quanto um painel para o administrador fazer toda a customização da programação do culto",
    img: liturgi,
    tecnologias: ["NodeJS", "MongoDB", "React"],
    link: "https://baseigrejacristaliturgia.vercel.app/",
  },
  {
    id: 4,
    title: "Efood",
    description:
      "Simula um site com vários restaurantes e cardapios com sistema de checkout completo",
    img: Efood,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    link: "https://efood-atividade.vercel.app/",
  },
];
