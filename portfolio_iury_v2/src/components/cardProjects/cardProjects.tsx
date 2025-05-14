import { CardContainer } from "./styles";

export default function CardProjectCM() {
  return (
    <CardContainer>
      <div className="image-div">
        <img src="https://placehold.co/1000x1000" alt="" />
      </div>
      <div className="text">
        <span>NOME</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente pariatur vel quae voluptate delectus ipsam possimus veniam
          nulla, saepe culpa rem! Voluptatem, illo mollitia obcaecati
          exercitationem totam itaque voluptas!
        </p>
      </div>
    </CardContainer>
  );
}
