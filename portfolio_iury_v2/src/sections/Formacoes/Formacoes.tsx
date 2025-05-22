import { IoIosArrowBack } from "react-icons/io";
import { FormacoesContainer } from "./styles";
import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

type Props = {
  onBack: () => void;
  language?: string;
};

type textState = {
  type: "formação" | "sobre-mim";
};

export default function FormacoesSC({ language, onBack }: Props) {
  const [text, setText] = useState<textState>({
    type: "sobre-mim",
  });
  return (
    <FormacoesContainer>
      <AnimatePresence>
        <motion.a
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: easeInOut }}
          onClick={onBack}
          className="buttons"
          href="#"
        >
          <IoIosArrowBack />
          <span>{language === "Portuguese" ? "voltar" : "back"}</span>
        </motion.a>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: easeInOut, duration: 0.5 }}
          className="formacoes"
        >
          <ul className="header">
            <AnimatePresence>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: easeInOut, duration: 0.5, delay: 0.8 }}
                onClick={() => setText({ type: "sobre-mim" })}
              >
                {language === "Portuguese" ? "Sobre mim" : "About me"}
              </motion.li>
            </AnimatePresence>
            <AnimatePresence>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: easeInOut, duration: 0.5, delay: 1 }}
                onClick={() => setText({ type: "formação" })}
              >
                {language === "Portuguese" ? "Formações" : "Qualifications"}
              </motion.li>
            </AnimatePresence>
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
                    {language === "Portuguese"
                      ? "Olá. Sou o Iury Benicio, tenho 24 anos e sou um desenvolvedor web full-stack com foco em projetos modernos utilizando tecnologias como React, Vue.js, Node.js e TypeScript. Em formação contínua em Engenharia de Software (Unicesumar) e cursos complementares. Perfil comunicativo, proativo e colaborativo, com sólida base em front-end, back-end e integração entre ambos. Busco sempre soluções eficientes e bem estruturadas."
                      : "Hello. I'm Iury Benicio, I'm 24 years full-stack web developer focused on modern projects using technologies like React, Vue.js, Node.js, and TypeScript. I'm currently pursuing a degree in Software Engineering (Unicesumar) and taking complementary courses. I have a communicative, proactive, and collaborative profile, with a solid foundation in front-end, back-end, and the integration between both. I'm always looking for efficient and well-structured solutions."}
                    <br />
                    <br />
                    <AnimatePresence>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1.5 }}
                      >
                        {language === "Portuguese"
                          ? "Atualmente estou estudando: Java, Docker, Spring e SQL"
                          : "I’m currently studying: Java, Docker, Spring, and SQL"}
                      </motion.span>
                    </AnimatePresence>
                  </p>
                ) : (
                  <ul className="formacao-div">
                    <li className="formacoes-item">
                      <span className="instuicao">Unicesumar</span>
                      <p className="curso">
                        {language === "Portuguese"
                          ? "Engenharia de software"
                          : "software engineer"}
                      </p>
                      <p className="progresso">
                        {language === "Portuguese"
                          ? "em andamento"
                          : "in progress"}
                      </p>
                    </li>
                    {/* <li className="formacoes-item">
                    <span className="instuicao">EBAC</span>
                    <p className="curso">Desenvolvimento full stack</p>
                    <p className="progresso">em andamento</p>
                  </li> */}
                  </ul>
                )}
              </motion.li>
            </AnimatePresence>
          </ul>
        </motion.div>
      </AnimatePresence>
    </FormacoesContainer>
  );
}
