import { IoIosArrowBack } from "react-icons/io";
import { FormacoesContainer } from "./styles";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  onBack: () => void;
};

type textState = {
  type: "formação" | "sobre-mim";
};

export default function FormacoesSC({ onBack }: Props) {
  const [text, setText] = useState<textState>({
    type: "sobre-mim",
  });
  return (
    <FormacoesContainer>
      <a onClick={onBack} className="buttons" href="#">
        <IoIosArrowBack />
        <span>voltar</span>
      </a>
      <div className="formacoes">
        <ul className="header">
          <li onClick={() => setText({ type: "sobre-mim" })}>Sobre mim</li>
          <li onClick={() => setText({ type: "formação" })}>Formações</li>
        </ul>
        <ul className="body">
          <AnimatePresence mode="wait">
            <motion.li
              key={text.type}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ overflow: "hidden" }}
            >
              {text.type === "sobre-mim" ? (
                <p className="sobre-div">
                  Olá. Sou o Iury Benicio, tenho 24 anos e sou um desenvolvedor
                  web full-stack com foco em projetos modernos utilizando
                  tecnologias como React, Vue.js, Node.js e TypeScript. Em
                  formação contínua em Engenharia de Software (Unicesumar) e
                  cursos complementares. Perfil comunicativo, proativo e
                  colaborativo, com sólida base em front-end, back-end e
                  integração entre ambos. Busco sempre soluções eficientes e bem
                  estruturadas.
                  <br />
                  <br />
                  <AnimatePresence>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      Atualmente estou estudando: Java, Docker, Spring e SQL
                    </motion.span>
                  </AnimatePresence>
                </p>
              ) : (
                <ul className="formacao-div">
                  <li className="formacoes-item">
                    <span className="instuicao">Unicesumar</span>
                    <p className="curso">Engenharia de software</p>
                    <p className="progresso">em andamento</p>
                  </li>
                  <li className="formacoes-item">
                    <span className="instuicao">EBAC</span>
                    <p className="curso">Desenvolvimento full stack</p>
                    <p className="progresso">em andamento</p>
                  </li>
                </ul>
              )}
            </motion.li>
          </AnimatePresence>
        </ul>
      </div>
    </FormacoesContainer>
  );
}
