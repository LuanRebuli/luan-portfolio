import { useEffect, useState } from "react";
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

  useEffect(() => {}, []);

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

                <h1>Tecnologias/Linguagens que tenho conhecimento</h1>
                <div className="tecnologias">
                  <img src={React} alt="" />
                  <img src={JS} alt="" />
                  <img src={TS} alt="" />
                  <img src={NodeJs} alt="" />
                  <img src={Tailwind} alt="" />
                  <img src={StyledComponent} alt="" />
                  <img src={Next} alt="" />
                  <img src={Vite} alt="" />
                  <img src={PostgreSQL} alt="" />
                  <img src={i18n} alt="" />
                  <img src={ShadCn} alt="" />
                  <img src={NextAuth} alt="" />
                  <img src={Sequelize} alt="" />
                  <img src={MongoDB} alt="" />
                  <img src={Docker} alt="" />
                </div>
              </ThreeBolls>
            </SecondContainerDark>
          ) : (
            <SecondContainerLight>
              <ThreeBolls>
                <button onClick={CloseWindow}>
                  <img src={ThreeBollsImg} id="bollsimg"></img>
                </button>

                <h1>Tecnologias/Linguagens que tenho conhecimento</h1>
                <div className="tecnologias">
                  <img src={React} alt="" />
                  <img src={JS} alt="" />
                  <img src={TS} alt="" />
                  <img src={NodeJs} alt="" />
                  <img src={Tailwind} alt="" />
                  <img src={StyledComponent} alt="" />
                  <img src={Next} alt="" />
                  <img src={Vite} alt="" />
                  <img src={PostgreSQL} alt="" />
                  <img src={i18n} alt="" />
                  <img src={ShadCn} alt="" />
                  <img src={NextAuth} alt="" />
                  <img src={Sequelize} alt="" />
                  <img src={MongoDB} alt="" />
                  <img src={Docker} alt="" />
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
