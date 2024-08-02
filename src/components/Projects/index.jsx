import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, px } from "framer-motion";
import PropTypes from "prop-types";

import {
  Container,
  SecondContainerLight,
  SecondContainerDark,
  ThreeBolls,
  ContainerClose,
  ContainerOpen,
  ProjectDiv,
} from "./styles";

import ThreeBollsImg from "../../assets/threebolls.png";
import Nlw from "../../assets/nlw.svg";

export const Projects = ({ isDarkMode }) => {
  const [isClose, setClose] = useState(false);
  const [openDiv1, setOpenDiv1] = useState(true);
  const [openDiv2, setOpenDiv2] = useState(true);
  const [openDiv3, setOpenDiv3] = useState(true);
  const [openDiv4, setOpenDiv4] = useState(true);
  const [openDiv5, setOpenDiv5] = useState(true);
  const [openDiv6, setOpenDiv6] = useState(true);
  const [openDiv7, setOpenDiv7] = useState(true);
  const { t } = useTranslation();

  const parent = {
    VariantA: { scale: 1 },
    VariantB: { scale: 1.25 },
    VariantC: { width: 500, height: 400 },
  };

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

              <ProjectDiv>
                <p>
                  Nlw Expert
                  <img src={Nlw}></img>
                  <div></div>
                </p>
                <p>
                  Nlw Expert
                  <div></div>
                </p>
                <p>
                  Nlw Expert
                  <div></div>
                </p>
                <p>
                  Nlw Expert
                  <div></div>
                </p>
                <p>
                  Nlw Expert
                  <div></div>
                </p>
                <p>
                  Nlw Expert
                  <div></div>
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
                  Nlw Expert
                  <motion.div
                    style={{
                      width: openDiv1 ? 400 : 1180,
                      height: openDiv1 ? 300 : 550,
                      position: openDiv1 ? "" : "absolute",
                      margin: 10,
                      top: 302,
                      right: 610,
                      background: "rgb(0, 0, 0)",
                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={openDiv1 ? "VariantB" : ""}
                    onClick={() => setOpenDiv1(!openDiv1)}
                  >
                    <img src={Nlw}></img>
                  </motion.div>
                </p>
                <p>
                  Nlw Expert
                  <motion.div
                    style={{
                      width: openDiv2 ? 400 : 1180,
                      height: openDiv2 ? 300 : 550,
                      position: openDiv2 ? "" : "absolute",
                      margin: 10,
                      top: 302,
                      right: 610,
                      background: "rgb(0, 0, 0)",

                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={openDiv2 ? "VariantB" : ""}
                    onClick={() => setOpenDiv2(!openDiv2)}
                  >
                    <img src={Nlw}></img>
                  </motion.div>
                </p>
                <p>
                  Nlw Expert
                  <motion.div
                    style={{
                      width: openDiv3 ? 400 : 1180,
                      height: openDiv3 ? 300 : 550,
                      position: openDiv3 ? "" : "absolute",
                      margin: 10,
                      top: 302,
                      right: 610,
                      background: "rgb(0, 0, 0)",

                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={openDiv3 ? "VariantB" : ""}
                    onClick={() => setOpenDiv3(!openDiv3)}
                  >
                    <img src={Nlw}></img>
                  </motion.div>
                </p>
                <p>
                  Nlw Expert
                  <motion.div
                    style={{
                      width: openDiv4 ? 400 : 1180,
                      height: openDiv4 ? 300 : 550,
                      position: openDiv4 ? "" : "absolute",
                      margin: 10,
                      top: 302,
                      right: 610,
                      background: "rgb(0, 0, 0)",

                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={openDiv4 ? "VariantB" : ""}
                    onClick={() => setOpenDiv4(!openDiv4)}
                  >
                    <img src={Nlw}></img>
                  </motion.div>
                </p>
                <p>
                  Nlw Expert
                  <motion.div
                    style={{
                      width: openDiv5 ? 400 : 1180,
                      height: openDiv5 ? 300 : 550,
                      position: openDiv5 ? "" : "absolute",
                      margin: 10,
                      top: 302,
                      right: 610,
                      background: "rgb(0, 0, 0)",

                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={openDiv5 ? "VariantB" : ""}
                    onClick={() => setOpenDiv5(!openDiv5)}
                  >
                    <img src={Nlw}></img>
                  </motion.div>
                </p>
                <p>
                  Nlw Expert
                  <motion.div
                    style={{
                      width: openDiv6 ? 400 : 1180,
                      height: openDiv6 ? 300 : 550,
                      position: openDiv6 ? "" : "absolute",
                      margin: 10,
                      top: 302,
                      right: 610,
                      background: "rgb(0, 0, 0)",

                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={openDiv6 ? "VariantB" : ""}
                    onClick={() => setOpenDiv6(!openDiv6)}
                  >
                    <img src={Nlw}></img>
                  </motion.div>
                </p>
                <p>
                  Nlw Expert
                  <motion.div
                    style={{
                      width: openDiv7 ? 400 : 1180,
                      height: openDiv7 ? 300 : 550,
                      position: openDiv7 ? "" : "absolute",
                      margin: 10,
                      top: 302,
                      right: 610,
                      background: "rgb(0, 0, 0)",
                      borderRadius: 20,
                      cursor: "pointer",
                    }}
                    variants={parent}
                    initial="VariantA"
                    whileHover={openDiv7 ? "VariantB" : ""}
                    onClick={() => setOpenDiv7(!openDiv7)}
                  >
                    <img src={Nlw}></img>
                  </motion.div>
                </p>
              </ProjectDiv>
            </SecondContainerLight>
          )}
        </ContainerOpen>
      )}
    </Container>
  );
};

Projects.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
