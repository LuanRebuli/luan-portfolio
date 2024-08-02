import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
  Container,
  LoadContainer,
  Menu,
  InputNameLight,
  InputNameDark,
  ButtonGoDark,
  ButtonGoLight,
  Logo,
} from "./styles";

import { LanguageSelection } from "../../components/LanguageSelection";
import { ThemeButton } from "../../components/ThemeButton";

import Seta from "../../assets/seta.png";
import SetaLight from "../../assets/setalight.png";
import apple from "../../assets/logo.png";

export const OfflinePC = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme:light");

    if (savedTheme === true) {
      setIsDarkMode(true);
    } else if (savedTheme === false) {
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = async () => {
    await localStorage.removeItem("theme:light");
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme:light", isDarkMode);
    console.log(isDarkMode);
  };

  const handleSubmit = async () => {
    await localStorage.setItem("user:name", name);
    setLoad(true);
  };

  const goThePc = () => {
    setTimeout(() => {
      navigate("/pc");
    }, 4000);
  };

  return (
    <Container>
      {load ? (
        <LoadContainer>
          <img src={apple}></img>
          {goThePc()}
        </LoadContainer>
      ) : (
        <Menu>
          <LanguageSelection isDarkMode={isDarkMode} />
          <ThemeButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          <Logo src={t("image")} id="logo" alt="logo"></Logo>
          <form onSubmit={handleSubmit}>
            {isDarkMode ? (
              <InputNameDark
                required
                placeholder={t("input.placeholder")}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            ) : (
              <InputNameLight
                required
                placeholder={t("input.placeholder")}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            )}

            {isDarkMode ? (
              <ButtonGoDark>
                <img src={SetaLight} id="seta" />
              </ButtonGoDark>
            ) : (
              <ButtonGoLight>
                <img src={Seta} name="seta" />
              </ButtonGoLight>
            )}
          </form>
        </Menu>
      )}
    </Container>
  );
};
