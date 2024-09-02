import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import {
  Container,
  SecondContainerLight,
  SecondContainerDark,
  ThreeBolls,
  ContainerClose,
  ContainerOpen,
} from "./styles";

import ThreeBollsImg from "../../assets/threebolls.png";
import Luan from "../../assets/luan.png";

export const Abouth = ({ isDarkMode }) => {
  const [isClose, setClose] = useState(false);
  const { t } = useTranslation();

  const CloseWindow = () => {
    setClose(true);
  };

  return (
    <Container>
      {isClose ? (
        <ContainerClose>
          <p></p>
        </ContainerClose>
      ) : (
        <ContainerOpen>
          {isDarkMode ? (
            <SecondContainerDark>
              <ThreeBolls>
                <button onClick={CloseWindow}>
                  <img src={ThreeBollsImg} id="bollsimg"></img>
                </button>
              </ThreeBolls>
              <h1 id="constabouth">
                <a className="const">const</a>{" "}
                <a className="consoleText">abouth</a> = Tecnologias/Linguagens
                que tenho conhecimento
              </h1>
              <div className="infos"></div>
            </SecondContainerDark>
          ) : (
            <SecondContainerLight>
              <ThreeBolls>
                <button onClick={CloseWindow}>
                  <img src={ThreeBollsImg} id="bollsimg"></img>
                </button>
                <h1 id="constabouth">
                  <a className="const">const</a>{" "}
                  <a className="consoleText">abouth</a> = Tecnologias/Linguagens
                  que tenho conhecimento
                </h1>

                <div className="infos">
                  <img src={Luan} />
                  <div className="texts">
                    <h2 id="constname">
                      <a className="const">const</a>{" "}
                      <a className="consoleText">history</a> = E aí, developers!
                      Sou o Luan, um gamer de carteirinha que se apaixonou por
                      programação. Comecei com 4 anos de vida, jogando e após
                      uns anos nesse mundo quadrado, comecei a desenvolver
                      plugins no Minecraft e depois fui além, desenvolvendo
                      scripts para deixar o GTA RP ainda mais divertido. Hoje,
                      vivo escrevendo código em React e me divertindo muito com
                      isso! Mas, quando não estou na frente do computador, você
                      pode me encontrar pegando onda 🌊, mandando umas tricks no
                      skate 🛹 ou dunkando no basquete, um fanatico por
                      competir. Ah, e claro, não deixo de lado a academia para
                      manter o corpo em forma. Vida de programador que ama a
                      vida, né?
                    </h2>
                    <br />
                    <h2 id="constname">
                      <a className="const">const</a>{" "}
                      <a className="consoleText">info</a> = Tenho desejo de ser
                      um renomado desenvolvedor e cursar Analise e
                      Desenvolvimento de Sistemas na UFPR. Estou trabalhando
                      duro para conseguir minha vaga na federal, atualmente faço
                      freelancers em FrontEnd e continuo a estudar para evoluir
                      minhas habilidades e conseguir minha primeira vaga
                      oficial.
                    </h2>
                    <br />
                    <h2 id="constname">
                      <a className="const">const</a>{" "}
                      <a className="consoleText">languages</a> = Sou nascido em
                      Campinas, São Paulo e me mudei com 1 ano para o Litoral
                      Paranaense, sou fluênte em português e tenho nivel
                      intermediario de inglês. oficial.
                    </h2>
                  </div>
                </div>
              </ThreeBolls>
            </SecondContainerLight>
          )}
        </ContainerOpen>
      )}
    </Container>
  );
};

Abouth.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
