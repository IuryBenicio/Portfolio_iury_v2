import { IoIosArrowBack, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { ProjetosContainer } from "./styles";
import { VscCircleLargeFilled } from "react-icons/vsc";

import { AnimatePresence, motion } from "framer-motion";

import liturgi from "../../assets/projects/baseQr/PC.png";
import mymovies from "../../assets/projects/Mymovies.png";
import Efood from "../../assets/projects/Efood.svg";
import Portfolio1 from "../../assets/projects/Portfólio1.png";
import Portfolio2 from "../../assets/projects/portfolio2.png";

import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

type Props = {
  onBack: () => void;
};

export default function ProjetosSC({ onBack }: Props) {
  return (
    <ProjetosContainer>
      <a onClick={onBack} className="buttons" href="#">
        <IoIosArrowBack />
        <span>voltar</span>
      </a>
      <div className="content">
        <ul>
          <AnimatePresence>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="dot projeto-5"
            >
              <VscCircleLargeFilled
                style={{ fill: "white", stroke: "black", strokeWidth: "2px" }}
              />
              <div className="data">
                <img src={Portfolio2} />
                <span>Portfólio V2.0</span>
                <div className="desc">
                  <p>
                    Meu portfólio pessoal, atualizado, com um visual mais
                    moderno, de "página única", simulando um cartão de visitas
                  </p>
                  <div className="tecnologias">
                    <ul>
                      <li>
                        <FaReact />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.li>
          </AnimatePresence>
          <AnimatePresence>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="dot projeto-4"
            >
              <div className="data">
                <img src={liturgi} />
                <span>QrLiturgy</span>
                <p>
                  Aplicação feita com o intuito de mostrar a liturgia do culto
                  de forma prática, onde temos tanto a interface para o usúario
                  que acessara o site através de um QrCode, quanto um painel
                  para o administrador fazer toda a customização da programação
                  do culto
                </p>
                <div className="tecnologias">
                  <ul>
                    <li>
                      <FaNodeJs />
                    </li>
                    <li>
                      <DiMongodb />
                    </li>
                    <li>
                      <FaReact />
                    </li>
                  </ul>
                </div>
              </div>
              <VscCircleLargeFilled
                style={{ fill: "white", stroke: "black", strokeWidth: "2px" }}
              />
            </motion.li>
          </AnimatePresence>
          <AnimatePresence>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="dot projeto-3"
            >
              <VscCircleLargeFilled
                style={{ fill: "white", stroke: "black", strokeWidth: "2px" }}
              />
              <div className="data">
                <img src={mymovies} />
                <span>MyMovies</span>
                <p>
                  Aplicação web com sistema de cadastro e autenticação onde você
                  pode criar listar customizadas de filmes, tendo acesso a
                  filmes do mundo inteiro
                </p>
                <div className="tecnologias">
                  <ul>
                    <li>
                      <FaNodeJs />
                    </li>
                    <li>
                      <DiMongodb />
                    </li>
                    <li>
                      <FaReact />
                    </li>
                  </ul>
                </div>
              </div>
            </motion.li>
          </AnimatePresence>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.5 }}
            className="dot projeto-2"
          >
            <div className="data">
              <img src={Efood} />
              <span>EFood</span>
              <p>
                Simula um site com vários restaurantes e cardapios com sistema
                de checkout completo
              </p>
              <div className="tecnologias">
                <ul>
                  <li>
                    <FaHtml5 />
                  </li>
                  <li>
                    <IoLogoCss3 />
                  </li>
                  <li>
                    <IoLogoJavascript />
                  </li>
                </ul>
              </div>
            </div>
            <VscCircleLargeFilled
              style={{ fill: "white", stroke: "black", strokeWidth: "2px" }}
            />
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 4.5 }}
            className="dot projeto-1"
          >
            <VscCircleLargeFilled
              style={{ fill: "white", stroke: "black", strokeWidth: "2px" }}
            />
            <div className="data">
              <img src={Portfolio1} />
              <span>Portfólio V1.0</span>
              <p>
                Simula um site com vários restaurantes e cardapios com sistema
                de checkout completo
              </p>
              <div className="tecnologias">
                <ul>
                  <li>
                    <FaReact />
                  </li>
                </ul>
              </div>
            </div>
          </motion.li>
        </ul>
        <hr />
      </div>
    </ProjetosContainer>
  );
}
