import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import {
  Container,
  SecondContainerLight,
  SecondContainerDark,
  ThreeBolls,
  LeftContainer,
  RightContainer,
  ContainerClose,
  ContainerOpen,
} from "./styles";

import ThreeBollsImg from "../../assets/threebolls.png";

export const Profile = ({ isDarkMode }) => {
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
              <LeftContainer>
                <ThreeBolls>
                  <button onClick={CloseWindow}>
                    <img src={ThreeBollsImg} id="bollsimg"></img>
                  </button>
                </ThreeBolls>
              </LeftContainer>

              <RightContainer>
                <p>Profile</p>
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
              </LeftContainer>

              <RightContainer></RightContainer>
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
