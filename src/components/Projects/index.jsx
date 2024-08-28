import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ArrowLeft, SquareArrowOutUpRight } from "lucide-react";

import {
  Container,
  SecondContainerLight,
  SecondContainerDark,
  ThreeBolls,
  ContainerClose,
  ContainerOpen,
  ProjectDiv,
  FSWDiv,
} from "./styles";

import ThreeBollsImg from "../../assets/threebolls.png";
import FSW from "../../assets/mockupfsw.png";
import NLW from "../../assets/mockupnlw.png";
import React from "../../assets/react.png";
import TS from "../../assets/typescript.png";
import Vite from "../../assets/vite.png";
import Next from "../../assets/next-js.svg";
import Tailwind from "../../assets/tailwind.png";
import ShadCn from "../../assets/shadcn.png";
import PostgreSQL from "../../assets/postgresql.svg";
import NextAuth from "../../assets/next-auth.png";

export const Projects = ({ isDarkMode }) => {
  const [isClose, setClose] = useState(false);
  const [isOpenFSW, setOpenFSW] = useState(true);
  const [isOpenNLW, setOpenNLW] = useState(true);

  const { t } = useTranslation();

  const parent = {
    VariantB: { scale: 1.2 },
  };

  const CloseWindow = () => {
    setClose(true);
  };

  const handleViewProjectFSW = () => {
    setOpenFSW(false);
    setClose(true);
  };

  const handleBackProjectFSW = () => {
    setOpenFSW(true);
    setClose(false);
  };

  const handleViewProjectNLW = () => {
    setOpenNLW(false);
    setClose(true);
  };

  const handleBackProjectNLW = () => {
    setOpenNLW(true);
    setClose(false);
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

              <ProjectDiv>
                <p>
                  FSW Barber
                  <div className="div-projects"></div>
                </p>
                <p>
                  Nlw Expert
                  <div className="div-projects"></div>
                </p>
                <p>
                  Luan Rebuli Portfolio
                  <div className="div-projects"></div>
                </p>
                <p>
                  Nlw Expert
                  <div className="div-projects"></div>
                </p>
                <p>
                  Nlw Expert
                  <div className="div-projects"></div>
                </p>
                <p>
                  Nlw Expert
                  <div className="div-projects"></div>
                </p>
              </ProjectDiv>
            </SecondContainerDark>
          ) : (
            <SecondContainerLight>
              <ThreeBolls>
                <button onClick={CloseWindow}>
                  <img src={ThreeBollsImg} id="bollsimg"></img>
                </button>
              </ThreeBolls>
              <ProjectDiv>
                <p>
                  FSW Barber
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectFSW}
                  >
                    <img src={FSW} width="340px" height="200px" />
                  </motion.div>
                </p>
                <p>
                  NLW Expert
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectNLW}
                  >
                    <img src={NLW} width="400px" height="270px" />
                  </motion.div>
                </p>
                <p>
                  FSW Barber
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectFSW}
                  >
                    <img src={FSW} width="340px" height="200px" />
                  </motion.div>
                </p>
                <p>
                  FSW Barber
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectFSW}
                  >
                    <img src={FSW} width="340px" height="200px" />
                  </motion.div>
                </p>
                <p>
                  FSW Barber
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectFSW}
                  >
                    <img src={FSW} width="340px" height="200px" />
                  </motion.div>
                </p>
                <p>
                  FSW Barber
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      marginBottom: "10",
                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectFSW}
                  >
                    <img src={FSW} width="340px" height="200px" />
                  </motion.div>
                </p>
              </ProjectDiv>
            </SecondContainerLight>
          )}
        </ContainerOpen>
      )}
      {isOpenFSW ? (
        <></>
      ) : (
        <FSWDiv>
          <div className="esquerda">
            <button className="arrow" onClick={handleBackProjectFSW}>
              <ArrowLeft size={30} />
            </button>
            <img src={FSW} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>FSW Barber</h1>
            <span>
              Este projeto foi desenvolvido durante a Full Stack Week da Full
              Stack Club. Eu gosto de participar de eventos de programação, que
              sempre temos o que aprender e nessa vez não foi diferente e me
              mostrou a importância de commits com padronização, a eficiência do
              next js e do tailwindcss. Fiz a responsabilidade total do projeto
              sozinho. O projeto em si foi de uma barbearia com sistema de
              agendamentos com banco de dados, pesquisa de barbearia e serviços,
              sistema de login com google.
            </span>
            <div className="tecnologias">
              <img src={TS} />
              <img src={Next} />
              <img src={React} />
              <img src={Tailwind} />
              <img src={NextAuth} />
              <img src={ShadCn} />
            </div>

            <div className="buttons">
              <a href="https://fsw-barber-phi.vercel.app/" target="_blank">
                <button>Abra em seu navegador</button>
              </a>

              <a
                href="https://github.com/LuanRebuli/fsw-barber/tree/master"
                target="_blank"
              >
                <button>Repositorio</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}

      {isOpenNLW ? (
        <></>
      ) : (
        <FSWDiv>
          <div className="esquerda">
            <button className="arrow" onClick={handleBackProjectNLW}>
              <ArrowLeft size={30} />
            </button>
            <img src={NLW} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>NLW Expert</h1>
            <span>
              Participei do evento da RocketSeat, junto com o professor Diego
              Fernandes que me ensinou várias coisas. Desenvolvimento de uma
              aplicação front-end em ReactJS, aplicação dos conceitos de
              Propriedades, Estados e Componentes, tipagem com Typescript,
              tooling com Vite, interface responsiva com TailwindCSS, uso de
              APIs da Web como Web Storage e Web Speech.
            </span>
            <div className="tecnologias">
              <img src={TS} />
              <img src={Vite} />
              <img src={React} />
            </div>

            <div className="buttons">
              <a
                href="https://nlw-expert-notes-ndwt.vercel.app/"
                target="_blank"
              >
                <button>Abra em seu navegador</button>
              </a>

              <a
                href="https://github.com/LuanRebuli/nlw-expert-notes"
                target="_blank"
              >
                <button>Repositorio</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}
    </Container>
  );
};

Projects.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
