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
import FSW from "../../assets/mockupfsw.svg";
import NLW from "../../assets/mockupnlw.svg";
import Portfolio from "../../assets/mockupportfolio.svg";
import Devburguer from "../../assets/mockupdevburger.svg";
import NauticaMidia from "../../assets/nautica.svg";
import weather from "../../assets/weather.svg";
import Pokedex from "../../assets/pokedex.svg";
import TodoList from "../../assets/todolist.svg";
import CreateUser from "../../assets/createuser.svg";
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
                  <motion.div
                    style={{
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
          <button className="arrow" onClick={handleBackProjectFSW}>
            <ArrowLeft size={30} />
          </button>
          <div className="esquerda">
            <img src={FSW} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>FSW Barber</h1>
            <span>{t("Projects.FSWBarber.Text")}</span>
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
                <button>{t("Projects.Navigator")}</button>
              </a>

              <a
                href="https://github.com/LuanRebuli/fsw-barber/tree/master"
                target="_blank"
              >
                <button>{t("Projects.GitHub")}</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}

      {isOpenNLW ? (
        <></>
      ) : (
        <FSWDiv>
          <button className="arrow" onClick={handleBackProjectNLW}>
            <ArrowLeft size={30} />
          </button>
          <div className="esquerda">
            <img src={NLW} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>NLW Expert</h1>
            <span>{t("Projects.NlwExpert.Text")}</span>
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
                <button>{t("Projects.Navigator")}</button>
              </a>

              <a
                href="https://github.com/LuanRebuli/nlw-expert-notes"
                target="_blank"
              >
                <button>{t("Projects.GitHub")}</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}

      {isOpenBurguer ? (
        <></>
      ) : (
        <FSWDiv>
          <button className="arrow" onClick={handleBackProjectBurguer}>
            <ArrowLeft size={30} />
          </button>
          <div className="esquerda">
            <img src={Devburguer} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>Dev Burguer</h1>
            <span>{t("Projects.DevBurguer.Text")}</span>
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
                <button>{t("Projects.Navigator")}</button>
              </a>

              <a
                href="https://github.com/LuanRebuli/nlw-expert-notes"
                target="_blank"
              >
                <button>{t("Projects.GitHub")}</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}

      {isOpenPortfolio ? (
        <></>
      ) : (
        <FSWDiv>
          <button className="arrow" onClick={handleBackProjectPortfolio}>
            <ArrowLeft size={30} />
          </button>
          <div className="esquerda">
            <img src={Portfolio} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>Luan Portfolio</h1>
            <span>{t("Projects.LuanPortfolio.Text")}</span>
            <div className="tecnologias">
              <img src={JS} />
              <img src={Vite} />
              <img src={React} />
              <img src={StyledComponent} />
              <img src={i18n} />
            </div>

            <div className="buttons">
              <a href="" target="_blank">
                <button>{t("Projects.Navigator")}</button>
              </a>

              <a
                href="https://github.com/LuanRebuli/luan-portfolio"
                target="_blank"
              >
                <button>{t("Projects.GitHub")}</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}

      {isOpenNauticaMidia ? (
        <></>
      ) : (
        <FSWDiv>
          <button className="arrow" onClick={handleBackProjectNautica}>
            <ArrowLeft size={30} />
          </button>
          <div className="esquerda">
            <img src={NauticaMidia} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>Naútica Mídia</h1>
            <span>{t("Projects.NauticaMidia.Text")}</span>
            <div className="tecnologias">
              <img src={TS} />
              <img src={Next} />
              <img src={React} />
              <img src={Tailwind} />
              <img src={ShadCn} />
            </div>

            <div className="buttons">
              <a href="" target="_blank">
                <button>{t("Projects.Navigator")}</button>
              </a>

              <a href="" target="_blank">
                <button>{t("Projects.GitHub")}</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}

      {isOpenTodoList ? (
        <></>
      ) : (
        <FSWDiv>
          <button className="arrow" onClick={handleBackProjectTodoList}>
            <ArrowLeft size={30} />
          </button>
          <div className="esquerda">
            <img src={TodoList} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>Todo List</h1>
            <span>{t("Projects.TodoList.Text")}</span>
            <div className="tecnologias">
              <img src={JS} />
            </div>

            <div className="buttons">
              <a
                href="https://nlw-expert-notes-ndwt.vercel.app/"
                target="_blank"
              >
                <button>{t("Projects.Navigator")}</button>
              </a>

              <a
                href="https://github.com/LuanRebuli/nlw-expert-notes"
                target="_blank"
              >
                <button>{t("Projects.GitHub")}</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}
      {isOpenWeather ? (
        <></>
      ) : (
        <FSWDiv>
          <button className="arrow" onClick={handleBackProjectWeather}>
            <ArrowLeft size={30} />
          </button>
          <div className="esquerda">
            <img src={weather} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>Weather App</h1>
            <span>{t("Projects.WeatherApp.Text")}</span>
            <div className="tecnologias">
              <img src={JS} />
            </div>

            <div className="buttons">
              <a
                href="https://luanrebuli.github.io/weather-app/"
                target="_blank"
              >
                <button>{t("Projects.Navigator")}</button>
              </a>

              <a
                href="https://github.com/LuanRebuli/weather-app"
                target="_blank"
              >
                <button>{t("Projects.GitHub")}</button>
              </a>
            </div>
          </div>
        </FSWDiv>
      )}
      {isOpenCreateUser ? (
        <></>
      ) : (
        <FSWDiv>
          <button className="arrow" onClick={handleBackProjectCreateUser}>
            <ArrowLeft size={30} />
          </button>
          <div className="esquerda">
            <img src={CreateUser} width={600} height={300} />
          </div>
          <div className="direita">
            <h1>CreateUser</h1>
            <span>{t("Projects.CreateUser.Text")}</span>
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
                <button>{t("Projects.Navigator")}</button>
              </a>

              <a
                href="https://github.com/LuanRebuli/create-user-react"
                target="_blank"
              >
                <button>{t("Projects.GitHub")}</button>
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
            <span>{t("Projects.PokeDex.Text")}</span>
            <div className="tecnologias">
              <img src={TS} />
              <img src={Vite} />
              <img src={React} />
            </div>

            <div className="buttons">
              <a href="https://pokedex-two-murex.vercel.app/" target="_blank">
                <button>{t("Projects.Navigator")}</button>
              </a>

              <a href="https://github.com/LuanRebuli/pokedex" target="_blank">
                <button>{t("Projects.GitHub")}</button>
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
