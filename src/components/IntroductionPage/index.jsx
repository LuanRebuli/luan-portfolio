import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import {
  Container,
  SecondContainerLight,
  SecondContainerDark,
  ThreeBolls,
  InputSearchDark,
  InputSearchLight,
  IntrodutionOrnamentLight,
  IntrodutionOrnamentDark,
  ProfileLight,
  ProfileDark,
  LeftContainer,
  RightContainer,
  ContainerClose,
  ContainerOpen,
} from "./styles";

import ThreeBollsImg from "../../assets/threebolls.png";
import FolderIcon from "../../assets/folder.png";
import ProfileImg from "../../assets/profile.png";

export const IntroductionPage = ({ isDarkMode }) => {
  const [isClose, setClose] = useState(false);
  const { t } = useTranslation();

  const name = localStorage.getItem("user:name");

  useEffect(() => {
    setClose(false);
    localStorage.setItem("isclose:projects", false);
  }, []);

  const CloseWindow = () => {
    setClose(true);
    localStorage.setItem("isclose:projects", true);
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
              <LeftContainer>
                <ThreeBolls>
                  <button onClick={CloseWindow}>
                    <img src={ThreeBollsImg} id="bollsimg"></img>
                  </button>
                </ThreeBolls>

                <div>
                  <InputSearchDark
                    placeholder={t("Introduction.placeholder")}
                  ></InputSearchDark>

                  <IntrodutionOrnamentDark>
                    <img src={FolderIcon}></img>
                    <p id="text">{t("Introduction.IntroductionOrnament")}</p>
                    <p id="number">1</p>
                  </IntrodutionOrnamentDark>
                </div>

                <ProfileDark>
                  <img src={ProfileImg}></img>
                  <p>
                    Luan de Sordi Rebuli <br />
                    Developer Front-End
                  </p>
                </ProfileDark>
              </LeftContainer>

              <RightContainer>
                <p id="console">
                  <a className="consoleText">Console</a>
                  <a className="Log">.log</a>
                  <a className="barra">(</a>
                  <a className="barra">"</a>
                  {t("Message.Hello")}
                  <a> {name}</a>
                  <a className="barra">"</a>
                  <a className="barra">)</a>
                </p>
                <p id="constname">
                  <a className="const">const</a>{" "}
                  <a className="consoleText">{t("Message.ConstName")}</a> =
                  “Luan de Sordi Rebuli”
                </p>
                <p id="constage">
                  <a className="const">const</a>{" "}
                  <a className="consoleText">{t("Message.ConstAge")}</a> = 17
                </p>
                <p id="message">
                  <a className="const">const</a>{" "}
                  <a className="consoleText">{t("Message.ConstAbouth")}</a>{" "}
                  {t("Message.MessageComplet")}
                </p>
              </RightContainer>
            </SecondContainerDark>
          ) : (
            <SecondContainerLight>
              <LeftContainer>
                <ThreeBolls>
                  <button onClick={CloseWindow}>
                    <img src={ThreeBollsImg} id="bollsimg"></img>
                  </button>
                </ThreeBolls>

                <div>
                  <InputSearchLight
                    placeholder={t("Introduction.placeholder")}
                  ></InputSearchLight>

                  <IntrodutionOrnamentLight>
                    <img src={FolderIcon}></img>
                    <p id="text">{t("Introduction.IntroductionOrnament")}</p>
                    <p id="number">1</p>
                  </IntrodutionOrnamentLight>
                </div>

                <ProfileLight>
                  <img src={ProfileImg}></img>
                  <p>
                    Luan de Sordi Rebuli <br />
                    Developer Front-End
                  </p>
                </ProfileLight>
              </LeftContainer>

              <RightContainer>
                <p id="console">
                  <a className="consoleText">Console</a>
                  <a className="Log">.log</a>
                  <a className="barra">(</a>
                  <a className="barra">"</a>
                  {t("Message.Hello")}
                  <a> {name}</a>
                  <a className="barra">"</a>
                  <a className="barra">)</a>
                </p>
                <p id="constname">
                  <a className="const">const</a>{" "}
                  <a className="consoleText">{t("Message.ConstName")}</a> =
                  “Luan de Sordi Rebuli”
                </p>
                <p id="constage">
                  <a className="const">const</a>{" "}
                  <a className="consoleText">{t("Message.ConstAge")}</a> = 17
                </p>
                <p id="message">
                  <a className="const">const</a>{" "}
                  <a className="consoleText">{t("Message.ConstAbouth")}</a>{" "}
                  {t("Message.MessageComplet")}
                </p>
              </RightContainer>
            </SecondContainerLight>
          )}
        </ContainerOpen>
      )}
    </Container>
  );
};

IntroductionPage.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
