import { IoIosArrowForward } from "react-icons/io";
import InitialPage from "./components/apresentation/initial";
import HeroSC from "./sections/Hero/Hero";
import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import ProjetosSC from "./sections/Projetos/Projetos";
import { Draw } from "./styles";
import FormacoesSC from "./sections/Formacoes/Formacoes";
import ContatoSC from "./sections/Contato/Contato";

function App() {
  const [language, setLanguage] = useState("Portuguese");

  const [buttons, setButtons] = useState({
    active: false,
  });

  function changeLanguage(language: string) {
    setLanguage(language);
  }

  const [activePage, setActivePage] = useState("initial"); // ou "projetos", "tecnologias", "contato"

  function handleBackToMenu() {
    setActivePage("none"); // desmonta a página primeiro
    setTimeout(() => {
      setButtons((prev) => ({ ...prev, active: true }));
    }, 600);
    setTimeout(() => {
      setActivePage("menu");
    }, 500); // tempo da animação de saída
  }

  return (
    <Draw>
      <AnimatePresence>
        {buttons.active && activePage === "menu" && (
          <motion.div
            key="buttons-menu"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.5 }}
            className="buttons-menu"
          >
            <a id="First-button" onClick={() => setActivePage("projetos")}>
              {language === "Portuguese" ? "Projetos" : "Projects"}
              <IoIosArrowForward />
            </a>
            <a id="Second-button" onClick={() => setActivePage("formações")}>
              {language === "Portuguese" ? "Sobre mim" : "About me"}
              <IoIosArrowForward />
            </a>
            <a id="Third-button" onClick={() => setActivePage("contato")}>
              {language === "Portuguese" ? "Fale comigo" : "Contact me"}
              <IoIosArrowForward />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {activePage === "projetos" && (
          <motion.div
            key="projetos"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <ProjetosSC language={language} onBack={handleBackToMenu} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {activePage === "menu" && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="menu"
          >
            <HeroSC language={language} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {activePage === "formações" && (
          <motion.div
            key="formaçcoes"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <FormacoesSC language={language} onBack={handleBackToMenu} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {activePage === "contato" && (
          <motion.div
            key="contato"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <ContatoSC language={language} onBack={handleBackToMenu} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          key="initial"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: 100 }}
          transition={{ duration: 1.7, delay: 0.2, ease: easeInOut }}
          className="initial"
        >
          <InitialPage
            setLanguage={(a: string) => changeLanguage(a)}
            language={language}
            onBack={handleBackToMenu}
          />
        </motion.div>
      </AnimatePresence>
    </Draw>
  );
}

export default App;
