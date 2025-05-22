import { CardContainer } from "./styles";

type props = {
  project: Projects;
  language: string;
};

export default function CardProjectCM({ project, language }: props) {
  function returnDescription(description: string) {
    if (description.length > 250) {
      return description.slice(0, 250) + " ...";
    }
    return description;
  }

  return (
    <CardContainer>
      <div className="image-div">
        <img src={project.img} alt="" />
      </div>
      <div className="text">
        <span>{project.title_pt}</span>
        {language === "Portuguese" ? (
          <p>{returnDescription(project.description_pt)}</p>
        ) : (
          <p>{returnDescription(project.description_eng)}</p>
        )}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-secondary mb-4"
        >
          acessar aplicação
        </a>
      </div>
    </CardContainer>
  );
}
