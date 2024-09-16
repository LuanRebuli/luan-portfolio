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
                <h1 id="constabouth">
                  <a className="const">const</a>{" "}
                  <a className="consoleText">{t("Abouth.ConstAbouth")}</a>
                  {t("Abouth.Tittle")}
                </h1>

                <div className="infos">
                  <div className="texts">
                    <h2 id="constname">
                      <a className="const">const</a>
                      <a className="consoleText">{t("Abouth.ConstHistory")}</a>
                      {t("Abouth.History")}
                    </h2>
                    <br />
                    <h2 id="constname">
                      <a className="const">const</a>
                      <a className="consoleText">
                        {t("Abouth.ConstLinguages")}
                      </a>
                      {t("Abouth.Languages")}
                    </h2>
                  </div>
                </div>
              </ThreeBolls>
            </SecondContainerDark>
          ) : (
            <SecondContainerLight>
              <ThreeBolls>
                <button onClick={CloseWindow}>
                  <img src={ThreeBollsImg} id="bollsimg"></img>
                </button>
                <h1 id="constabouth">
                  <a className="const">const</a>{" "}
                  <a className="consoleText">{t("Abouth.ConstAbouth")}</a>
                  {t("Abouth.Tittle")}
                </h1>

                <div className="infos">
                  <div className="texts">
                    <h2 id="constname">
                      <a className="const">const</a>
                      <a className="consoleText">{t("Abouth.ConstHistory")}</a>
                      {t("Abouth.History")}
                    </h2>
                    <br />
                    <h2 id="constname">
                      <a className="const">const</a>
                      <a className="consoleText">
                        {t("Abouth.ConstLinguages")}
                      </a>
                      {t("Abouth.Languages")}
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
