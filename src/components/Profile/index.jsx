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

export const Profile = ({ isDarkMode }) => {
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
            </SecondContainerDark>
          ) : (
            <SecondContainerLight>
              <ThreeBolls>
                <button onClick={CloseWindow}>
                  <img src={ThreeBollsImg} id="bollsimg"></img>
                </button>
              </ThreeBolls>
            </SecondContainerLight>
          )}
        </ContainerOpen>
      )}
    </Container>
  );
};

Profile.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
