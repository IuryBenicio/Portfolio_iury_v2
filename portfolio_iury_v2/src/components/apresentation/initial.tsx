import { useState } from "react";
import { InitialContainer } from "./styled";

type styleType = {
  width: string;
  height: string;
  display?: string;
};

type props = {
  onBack: () => void;
};

export default function InitialPage({ onBack }: props) {
  const [unSpawn, setUnSpawm] = useState<styleType>({
    width: "100dvw",
    height: "100dvh",
    display: "flex",
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

  return (
    <InitialContainer style={unSpawn}>
      <div className="data">
        <h2>Olá bem vindo ao meu portfólio</h2>
        <a
          onClick={() => {
            hidePage();
            onBack();
          }}
        >
          CLIQUE AQUI PARA VER SOBRE MIM
        </a>
      </div>
    </InitialContainer>
  );
}
