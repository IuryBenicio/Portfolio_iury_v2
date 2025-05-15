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

type Props = {
  onBack: () => void;
};

export default function ProjetosSC({ onBack }: Props) {
  // const [hover, setHover] = useState();

  function retornaTec(e: string) {
    if (e === "React") {
      return <FaReact />;
    } else if (e === "HTML") {
      return <FaHtml5 />;
    } else if (e === "NodeJS") {
      return <FaNodeJs />;
    } else if (e === "MongoDB") {
      return <DiMongodb />;
    } else if (e === "JavaScript") {
      return <IoLogoJavascript />;
    } else if (e === "CSS") {
      return <FaCss3Alt />;
    }
  }

  return (
    <ProjetosContainer>
      <a onClick={onBack} className="buttons" href="#">
        <IoIosArrowBack />
        <span>voltar</span>
      </a>
      <div className="content">
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
                  <span className="title">{e.title}</span>
                  <p>{e.description}</p>
                  <div className="tecnologias">
                    {e.tecnologias.map((e) => retornaTec(e))}
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ProjetosContainer>
  );
}
