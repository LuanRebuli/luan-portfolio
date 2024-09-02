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
import Docker from "../../assets/docker.png";
import MongoDB from "../../assets/mongodb.webp";
import Sequelize from "../../assets/sequelize.webp";

export const Skills = ({ isDarkMode }) => {
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
              <h1>
                <a className="const">const</a>{" "}
                <a className="consoleText">languages</a>
                Tecnologias/Linguagens que tenho conhecimento
              </h1>
              <div className="tecnologias">
                <a href="https://react.dev" target="_blank">
                  <img src={React} alt="" />
                </a>
                <a
                  href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                  target="_blank"
                >
                  <img src={JS} alt="" />
                </a>
                <a href="https://www.typescriptlang.org" target="_blank">
                  <img src={TS} alt="" />
                </a>
                <a href="https://nodejs.org/pt" target="_blank">
                  <img src={NodeJs} alt="" />
                </a>
                <a href="https://nodejs.org/pt" target="_blank">
                  <img src={Tailwind} alt="" />
                </a>
                <a href="https://styled-components.comv" target="_blank">
                  <img src={StyledComponent} alt="" />
                </a>
                <a href="https://nextjs.org" target="_blank">
                  <img src={Next} alt="" />
                </a>
                <a href="https://vitejs.dev" target="_blank">
                  <img src={Vite} alt="" />
                </a>
                <a href="https://www.postgresql.org" target="_blank">
                  <img src={PostgreSQL} alt="" />
                </a>
                <a href="https://www.i18next.com" target="_blank">
                  <img src={i18n} alt="" />
                </a>
                <a href="https://ui.shadcn.com" target="_blank">
                  <img src={ShadCn} alt="" />
                </a>
                <a href="https://next-auth.js.org" target="_blank">
                  <img src={NextAuth} alt="" />
                </a>
                <a href="https://sequelize.org" target="_blank">
                  <img src={Sequelize} alt="" />
                </a>
                <a href="https://www.mongodb.com" target="_blank">
                  <img src={MongoDB} alt="" />
                </a>
                <a href="https://www.docker.com" target="_blank">
                  <img src={Docker} alt="" />
                </a>
              </div>
            </SecondContainerDark>
          ) : (
            <SecondContainerLight>
              <ThreeBolls>
                <button onClick={CloseWindow}>
                  <img src={ThreeBollsImg} id="bollsimg"></img>
                </button>

                <h1>
                  <a className="const">const</a>{" "}
                  <a className="consoleText">languages</a> =
                  Tecnologias/Linguagens que tenho conhecimento
                </h1>
                <div className="tecnologias">
                  <a href="https://react.dev" target="_blank">
                    <img src={React} alt="" />
                  </a>
                  <a
                    href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                    target="_blank"
                  >
                    <img src={JS} alt="" />
                  </a>
                  <a href="https://www.typescriptlang.org" target="_blank">
                    <img src={TS} alt="" />
                  </a>
                  <a href="https://nodejs.org/pt" target="_blank">
                    <img src={NodeJs} alt="" />
                  </a>
                  <a href="https://nodejs.org/pt" target="_blank">
                    <img src={Tailwind} alt="" />
                  </a>
                  <a href="https://styled-components.comv" target="_blank">
                    <img src={StyledComponent} alt="" />
                  </a>
                  <a href="https://nextjs.org" target="_blank">
                    <img src={Next} alt="" />
                  </a>
                  <a href="https://vitejs.dev" target="_blank">
                    <img src={Vite} alt="" />
                  </a>
                  <a href="https://www.postgresql.org" target="_blank">
                    <img src={PostgreSQL} alt="" />
                  </a>
                  <a href="https://www.i18next.com" target="_blank">
                    <img src={i18n} alt="" />
                  </a>
                  <a href="https://ui.shadcn.com" target="_blank">
                    <img src={ShadCn} alt="" />
                  </a>
                  <a href="https://next-auth.js.org" target="_blank">
                    <img src={NextAuth} alt="" />
                  </a>
                  <a href="https://sequelize.org" target="_blank">
                    <img src={Sequelize} alt="" />
                  </a>
                  <a href="https://www.mongodb.com" target="_blank">
                    <img src={MongoDB} alt="" />
                  </a>
                  <a href="https://www.docker.com" target="_blank">
                    <img src={Docker} alt="" />
                  </a>
                </div>
              </ThreeBolls>
            </SecondContainerLight>
          )}
        </ContainerOpen>
      )}
    </Container>
  );
};

Skills.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
