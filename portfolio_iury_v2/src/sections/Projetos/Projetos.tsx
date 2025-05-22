import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { projects } from "./mockProjects";
import { ProjetosContainer } from "./styles";
import { IoIosArrowBack, IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import CardProjectCM from "../../components/cardProjects/cardProjects";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

type Props = {
  onBack: () => void;
  language: string;
};

export default function ProjetosSC({ onBack, language }: Props) {
  const { innerWidth: width } = window;

  function retornaTec(e: string) {
    switch (e) {
      case "React":
        return <FaReact />;
      case "HMTL":
        return <FaHtml5 />;
      case "NodeJS":
        return <FaNodeJs />;
      case "MongoDB":
        return <DiMongodb />;
      case "JavaScript":
        return <IoLogoJavascript />;
      case "CSS":
        return <FaCss3Alt />;
    }
  }

  function retornaInitialMotion(index: number) {
    if (index % 2 === 0) {
      return -100;
    } else {
      return 100;
    }
  }

  return (
    <ProjetosContainer>
      <AnimatePresence>
        <motion.a
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          onClick={onBack}
          className="buttons"
        >
          <IoIosArrowBack />
          <span>{language === "Portuguese" ? "voltar" : "back"}</span>
        </motion.a>
      </AnimatePresence>
      <div className="content">
        {width < 450 ? (
          <div className="div-mobile">
            {projects.map((e, index) => (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, x: retornaInitialMotion(index) }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    ease: easeInOut,
                    duration: 0.6,
                    delay: index - 0.5,
                  }}
                  className="motion-div"
                >
                  <CardProjectCM language={language} project={e} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        ) : (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={"auto"}
            initialSlide={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {projects.map((e) => (
              <SwiperSlide className="swiper-slide" key={e.id}>
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                >
                  <div className="img-div">
                    <img src={e.img} />
                  </div>
                  <div className="body">
                    <span className="title">{e.title_pt}</span>
                    {language === "Portuguese" ? (
                      <p>{e.description_pt}</p>
                    ) : (
                      <p>{e.description_eng}</p>
                    )}
                    <div className="tecnologias">
                      {e.tecnologias.map((e) => retornaTec(e))}
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </ProjetosContainer>
  );
}
