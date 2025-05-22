import { useEffect, useState } from "react";
import { InitialContainer } from "./styled";
import USAflag from "../../assets/flags/estados-unidos.png";
import BRAflag from "../../assets/flags/brasil.png";
import { AnimatePresence, motion } from "framer-motion";

type styleType = {
  width: string;
  height: string;
  display?: string;
};

type props = {
  onBack: () => void;
  language: string;
  setLanguage: (a: string) => void;
};

export type languageType = {
  language: "Portuguese" | "English";
};

export default function InitialPage({ onBack, language, setLanguage }: props) {
  const [unSpawn, setUnSpawm] = useState<styleType>({
    width: "100dvw",
    height: "100dvh",
    display: "flex",
  });

  const [Languages, setLanguages] = useState<languageType>({
    language: "Portuguese",
  });

  function hidePage() {
    if (unSpawn.width !== "0") {
      setUnSpawm({
        width: "0",
        height: "0",
      });
      setTimeout(() => {
        setUnSpawm((prev) => ({ ...prev, display: "none" }));
      }, 600);
    } else {
      setUnSpawm({
        width: "100dvw",
        height: "100dvh",
      });
    }
  }
  useEffect(() => {
    setLanguage(Languages.language);
  }, [Languages]);

  return (
    <InitialContainer language={Languages.language} style={unSpawn}>
      <div className="data">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, delay: 0.6 }}
            className="flags"
          >
            <img
              onClick={() => setLanguages({ language: "English" })}
              className="usa-flag"
              src={USAflag}
            />
            <img
              onClick={() => setLanguages({ language: "Portuguese" })}
              className="bra-flag"
              src={BRAflag}
            />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            className="text-div"
            key={language}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
          >
            {language === "Portuguese" ? (
              <>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  Olá bem vindo ao meu portfólio
                </motion.h2>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  onClick={() => {
                    hidePage();
                    onBack();
                  }}
                >
                  CLIQUE AQUI PARA VER SOBRE MIM E MEUS PROJETOS
                </motion.a>
              </>
            ) : (
              <>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  Hello and welcome to my portfolio
                </motion.h2>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  onClick={() => {
                    hidePage();
                    onBack();
                  }}
                >
                  CLICK HERE TO SEE MORE ABOUT ME AND MY PROJECTS
                </motion.a>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </InitialContainer>
  );
}
