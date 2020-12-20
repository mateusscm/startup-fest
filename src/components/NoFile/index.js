import React from "react";
import Carousel from "../../assets/svg/Carousel";
import StyledNoFile from "./NoFile.style";

export default function NoFile() {
  return (
    <StyledNoFile>
      <div className="content">
        <>
          <section>
            <b>Por enquanto nenhuma startup foi selecionada!</b>
            <br />

            <span>
              Escolha acima uma startup e faça a avaliação de desempenho no
              nosso evento!
            </span>
            <br />
            <span>Sua opinião é muito importante para nós!!</span>
          </section>
        </>
        <Carousel />
      </div>
    </StyledNoFile>
  );
}
