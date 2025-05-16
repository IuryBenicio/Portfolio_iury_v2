//styles
import { ContatoContainer } from "./styles";

//icons
import { IoIosArrowBack } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

//useRef
import { useEffect, useRef, useState } from "react";

//emailJs
import emailjs from "@emailjs/browser";

//motion
import { AnimatePresence, easeInOut, motion } from "framer-motion";

type Props = {
  onBack: () => void;
};
export default function ContatoSC({ onBack }: Props) {
  const [buttonSend, setButtonSend] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    verificaForm();
  }, [formState]);

  function verificaForm() {
    if (
      formState.email.length === 0 ||
      formState.message.length === 0 ||
      formState.name.length === 0
    ) {
      return setButtonSend(false);
    }
    return setButtonSend(true);
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current === null) return;

    emailjs
      .sendForm("service_7bavao8", "template_rkqsdxt", form.current, {
        publicKey: "AevECFpWN_Z31Tlzf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormState({
            email: "",
            message: "",
            name: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <ContatoContainer>
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
          <span>voltar</span>
        </motion.a>
      </AnimatePresence>
      <AnimatePresence>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          ref={form}
          onSubmit={(e) => sendEmail(e)}
        >
          <span className="title">Entre em contato comigo</span>
          <label htmlFor="nomeInpt">
            <span>Digite o seu nome</span>
            <input
              name="from_name"
              id="nomeInpt"
              type="text"
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, name: e.target.value }))
              }
              value={formState.name}
            />
          </label>
          <label htmlFor="emailInpt">
            <span>Digite o seu email</span>
            <input
              name="from_email"
              id="emailInpt"
              type="email"
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, email: e.target.value }))
              }
              value={formState.email}
            />
          </label>
          <label htmlFor="msgInpt">
            <span>Digite sua mensagem</span>
            <textarea
              name="message"
              id="msgInpt"
              onChange={(e) =>
                setFormState((prev) => ({ ...prev, message: e.target.value }))
              }
              value={formState.message}
            />
          </label>
          <button
            className={buttonSend ? "btn-submit-on" : "btn-submit-off"}
            disabled={!buttonSend}
          >
            Enviar
          </button>
        </motion.form>
        <div className="redes-sociais">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/iurybenicio/">
                <FaLinkedinIn /> <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://iury620@gmail.com">
                <SiGmail /> <span>Gmail</span>
              </a>
            </li>
          </ul>
        </div>
      </AnimatePresence>
    </ContatoContainer>
  );
}
