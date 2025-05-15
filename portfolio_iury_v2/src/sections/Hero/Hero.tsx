import { HeroContainer } from "./styles";

//Logo Techs
import vue_icon from "../../assets/logo/vue-svgrepo-com.svg";
import react_icon from "../../assets/logo/react-svgrepo-com.svg";
import type_icon from "../../assets/logo/typescript-svgrepo-com.svg";
import Git from "../../assets/logo/github-142-svgrepo-com.svg";
import Css from "../../assets/logo/css3-01-svgrepo-com.svg";
import Html from "../../assets/logo/html5-01-svgrepo-com.svg";
import JS from "../../assets/logo/js01-svgrepo-com.svg";
import SASS from "../../assets/logo/sass-svgrepo-com.svg";
import styledComponents from "../../assets/logo/styled-components-svgrepo-com.svg";
import redux from "../../assets/logo/redux-fill-svgrepo-com.svg";
import mongoDB from "../../assets/logo/mongodb-svgrepo-com.svg";
import nodeJs from "../../assets/logo/node-16-svgrepo-com.svg";
import perfil from "../../assets/perfil.png";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "../../../node_modules/swiper/swiper.css";

//Framer
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSC() {
  const { innerWidth: width } = window;
  //tecnologias
  const dataTecnologias: Tecnologias[] = [
    { id: "1", image: vue_icon },
    { id: "2", image: react_icon },
    { id: "3", image: type_icon },
    { id: "4", image: Git },
    { id: "5", image: Css },
    { id: "6", image: Html },
    { id: "7", image: SASS },
    { id: "8", image: JS },
    { id: "9", image: styledComponents },
    { id: "10", image: redux },
    { id: "11", image: mongoDB },
    { id: "12", image: nodeJs },
  ];

  return (
    <HeroContainer>
      <div className="data">
        <div className="image">
          <img src={perfil} />
        </div>
        <div className="text">
          <h1>Meu nome é Iury Benicio</h1>
          <span>e esse é o meu portfólio</span>
          <AnimatePresence mode="wait">
            <motion.div
              className="slide"
              key={"slide"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.9 }}
            >
              <div className="degrade" />
              <Swiper
                // install Swiper modules
                modules={[Autoplay, Navigation, Pagination, Scrollbar]}
                spaceBetween={width < 430 ? 0 : 50}
                slidesPerView={width < 430 ? 2 : 6}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                loop={true}
              >
                {dataTecnologias.map((e) => (
                  <SwiperSlide className="slide-item" key={e.id}>
                    <img src={e.image} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </HeroContainer>
  );
}
