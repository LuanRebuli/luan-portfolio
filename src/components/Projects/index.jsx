import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ArrowLeft } from "lucide-react";

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
import Portfolio from "../../assets/mockupportfolio.png";
import Devburguer from "../../assets/mockupdevburger.png";
import NauticaMidia from "../../assets/nautica.png";
import weather from "../../assets/weather.png";
import Pokedex from "../../assets/pokedex.png";
import TodoList from "../../assets/todolist.png";
import CreateUser from "../../assets/createuser.png";
import JS from "../../assets/javascript.png";
import React from "../../assets/react.png";
import TS from "../../assets/typescript.png";
import Vite from "../../assets/vite.png";
import StyledComponent from "../../assets/styledcomponent.png";
import i18n from "../../assets/i18n.png";
import Next from "../../assets/next-js.svg";
import Tailwind from "../../assets/tailwind.png";
import ShadCn from "../../assets/shadcn.png";
import PostgreSQL from "../../assets/postgresql.svg";
import NextAuth from "../../assets/next-auth.png";
import NodeJs from "../../assets/nodejs.png";

export const Projects = ({ isDarkMode }) => {
  const [isClose, setClose] = useState(false);
  const [isOpenFSW, setOpenFSW] = useState(true);
  const [isOpenNLW, setOpenNLW] = useState(true);
  const [isOpenPortfolio, setOpenPortfolio] = useState(true);
  const [isOpenBurguer, setOpenBurguer] = useState(true);
  const [isOpenNauticaMidia, setOpenNauticaMidia] = useState(true);
  const [isOpenWeather, setOpenWeather] = useState(true);
  const [isOpenPokedex, setOpenPokedex] = useState(true);
  const [isOpenTodoList, setOpenTodoList] = useState(true);
  const [isOpenCreateUser, setOpenCreateUser] = useState(true);

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

  const handleViewProjectPortfolio = () => {
    setOpenPortfolio(false);
    setClose(true);
  };
  const handleBackProjectPortfolio = () => {
    setOpenPortfolio(true);
    setClose(false);
  };

  const handleViewProjectBurguer = () => {
    setOpenBurguer(false);
    setClose(true);
  };
  const handleBackProjectBurguer = () => {
    setOpenBurguer(true);
    setClose(false);
  };

  const handleViewProjectNautica = () => {
    setOpenNauticaMidia(false);
    setClose(true);
  };
  const handleBackProjectNautica = () => {
    setOpenNauticaMidia(true);
    setClose(false);
  };

  const handleViewProjectWeather = () => {
    setOpenWeather(false);
    setClose(true);
  };
  const handleBackProjectWeather = () => {
    setOpenWeather(true);
    setClose(false);
  };

  const handleViewProjectPokedex = () => {
    setOpenPokedex(false);
    setClose(true);
  };
  const handleBackProjectPokedex = () => {
    setOpenPokedex(true);
    setClose(false);
  };

  const handleViewProjectTodoList = () => {
    setOpenTodoList(false);
    setClose(true);
  };
  const handleBackProjectTodoList = () => {
    setOpenTodoList(true);
    setClose(false);
  };

  const handleViewProjectCreateUser = () => {
    setOpenCreateUser(false);
    setClose(true);
  };
  const handleBackProjectCreateUser = () => {
    setOpenCreateUser(true);
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
                      marginBottom: "20px",
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
                      marginBottom: "20px",
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
                  Dev Burguer
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectBurguer}
                  >
                    <img src={Devburguer} width="340px" height="200px" />
                  </motion.div>
                </p>
                <p>
                  Luan PortFolio
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectPortfolio}
                  >
                    <img src={Portfolio} width="340px" height="200px" />
                  </motion.div>
                </p>
                <p>
                  Naútica Mídia
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectNautica}
                  >
                    <img src={NauticaMidia} width="340px" height="200px" />
                  </motion.div>
                </p>
                <p>
                  Weather App
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectWeather}
                  >
                    <img src={weather} width="340px" height="200px" />
                  </motion.div>
                </p>
                <p>
                  PokeDex
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectPokedex}
                  >
                    <img src={Pokedex} width="340px" height="200px" />
                  </motion.div>
                </p>
                <p>
                  Todo List
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectTodoList}
                  >
                    <img src={TodoList} width="340px" height="200px" />
                  </motion.div>
                </p>
                <p>
                  Create User
                  <motion.div
                    style={{
                      width: 150,
                      height: 210,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={"VariantB"}
                    onClick={handleViewProjectCreateUser}
                  >
                    <img src={CreateUser} width="340px" height="200px" />
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
              <img src={PostgreSQL} />
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
              <img src={Tailwind} />
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

      {isOpenBurguer ? (
        <></>
      ) : (
        <FSWDiv>
          <div className="esquerda">
            <button className="arrow" onClick={handleBackProjectBurguer}>
              <ArrowLeft size={30} />
            </button>
            <img src={Devburguer} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>Dev Burguer</h1>
            <span>
              Criado como trabalho de conclusão do curso Dev Club, este projeto
              full stack simula uma hamburgueria online completa. Com um
              carrinho de compras intuitivo, sistema de login protegido por
              senha criptografada e diversas opções de pagamento, oferece uma
              experiência de compra completa.
            </span>
            <div className="tecnologias">
              <img src={JS} />
              <img src={Vite} />
              <img src={React} />
              <img src={StyledComponent} />
              <img src={PostgreSQL} />
              <img src={NodeJs} />
            </div>

            <div className="buttons">
              <a href="" target="_blank">
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

      {isOpenPortfolio ? (
        <></>
      ) : (
        <FSWDiv>
          <div className="esquerda">
            <button className="arrow" onClick={handleBackProjectPortfolio}>
              <ArrowLeft size={30} />
            </button>
            <img src={Portfolio} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>Luan Portfolio</h1>
            <span>
              Criei esse meu portfólio pessoal inspirado no design do MacBook.
              Utilizando React JS e Styled Components, cada seção funciona como
              um aplicativo independente, proporcionando uma experiência
              inovadora para o usuário. Com a opção de escolher entre temas
              claro e escuro e usei o i18 para possibilidade de alternar entre
              português e inglês. Este projeto me permitiu explorar minha
              criatividade e foi realizador fazer esse codigo e muito divertido,
              o principal eu diria.
            </span>
            <div className="tecnologias">
              <img src={JS} />
              <img src={Vite} />
              <img src={React} />
              <img src={StyledComponent} />
              <img src={i18n} />
            </div>

            <div className="buttons">
              <a href="" target="_blank">
                <button>Abra em seu navegador</button>
              </a>

              <a
                href="https://github.com/LuanRebuli/luan-portfolio"
                target="_blank"
              >
                <button>Repositorio</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}

      {isOpenNauticaMidia ? (
        <></>
      ) : (
        <FSWDiv>
          <div className="esquerda">
            <button className="arrow" onClick={handleBackProjectNautica}>
              <ArrowLeft size={30} />
            </button>
            <img src={NauticaMidia} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>Naútica Mídia</h1>
            <span>
              Como freelancer, desenvolvi um site para uma empresa de
              comunicação visual, utilizando React JS, Next-JS, TypeScript,
              Tailwind CSS e Shadcn. Criei uma plataforma personalizada e
              dinâmica, capaz de apresentar uma ampla variedade de designs de
              placas e faixadas de forma visualmente impactante. A combinação
              dessas tecnologias permitiu construir uma solução robusta e
              escalável, atendendo às necessidades específicas do cliente.
            </span>
            <div className="tecnologias">
              <img src={TS} />
              <img src={Next} />
              <img src={React} />
              <img src={Tailwind} />
              <img src={ShadCn} />
            </div>

            <div className="buttons">
              <a href="" target="_blank">
                <button>Abra em seu navegador</button>
              </a>

              <a href="" target="_blank">
                <button>Repositorio</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}

      {isOpenTodoList ? (
        <></>
      ) : (
        <FSWDiv>
          <div className="esquerda">
            <button className="arrow" onClick={handleBackProjectTodoList}>
              <ArrowLeft size={30} />
            </button>
            <img src={TodoList} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>Todo List</h1>
            <span>
              Este projeto tem um marcador de tarefas, exclua e salve a última
              lista feita após recarregar ou sair do site.
            </span>
            <div className="tecnologias">
              <img src={JS} />
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
      {isOpenWeather ? (
        <></>
      ) : (
        <FSWDiv>
          <div className="esquerda">
            <button className="arrow" onClick={handleBackProjectWeather}>
              <ArrowLeft size={30} />
            </button>
            <img src={weather} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>Weather App</h1>
            <span>Vamos conhecer o Clima.</span>
            <div className="tecnologias">
              <img src={JS} />
            </div>

            <div className="buttons">
              <a
                href="https://luanrebuli.github.io/weather-app/"
                target="_blank"
              >
                <button>Abra em seu navegador</button>
              </a>

              <a
                href="https://github.com/LuanRebuli/weather-app"
                target="_blank"
              >
                <button>Repositorio</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}
      {isOpenCreateUser ? (
        <></>
      ) : (
        <FSWDiv>
          <div className="esquerda">
            <button className="arrow" onClick={handleBackProjectCreateUser}>
              <ArrowLeft size={30} />
            </button>
            <img src={CreateUser} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>CreateUser</h1>
            <span>
              Projeto do curso Dev-Club para React e Node para aprender a usar
              front-end e backend juntamente com professor Rodolfo Mori.
            </span>
            <div className="tecnologias">
              <img src={JS} />
              <img src={NodeJs} />
              <img src={React} />
            </div>

            <div className="buttons">
              <a
                href="https://github.com/LuanRebuli/create-user-react"
                target="_blank"
              >
                <button>Abra em seu navegador</button>
              </a>

              <a
                href="https://github.com/LuanRebuli/create-user-react"
                target="_blank"
              >
                <button>Repositorio</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}

      {isOpenPokedex ? (
        <></>
      ) : (
        <FSWDiv>
          <div className="esquerda">
            <button className="arrow" onClick={handleBackProjectPokedex}>
              <ArrowLeft size={30} />
            </button>
            <img src={Pokedex} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>PokeDex</h1>
            <span>
              Desenvolvi uma Pokédex simples utilizando JavaScript para consumir
              a PokéAPI. A aplicação permite pesquisar por Pokémon e exibir
              informações como nome, tipo, habilidades e sprite. Este projeto
              foi fundamental para consolidar meus conhecimentos em JavaScript e
              me introduziu ao mundo das APIs.
            </span>
            <div className="tecnologias">
              <img src={TS} />
              <img src={Vite} />
              <img src={React} />
            </div>

            <div className="buttons">
              <a href="https://pokedex-two-murex.vercel.app/" target="_blank">
                <button>Abra em seu navegador</button>
              </a>

              <a href="https://github.com/LuanRebuli/pokedex" target="_blank">
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
