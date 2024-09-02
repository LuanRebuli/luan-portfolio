import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Container, HotBar } from "./styles";

import ProjectIMG from "../../assets/folder.png";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Habilidades from "../../assets/habilidades.png";
import curriculo from "../../assets/curriculo.png";

import { LanguageSelection } from "../../components/LanguageSelection";
import { Abouth } from "../../components/Profile";
import { ThemeButton } from "../../components/ThemeButton";
import { IntroductionPage } from "../../components/IntroductionPage";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";

export const OnlinePC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [closeIntroduction, setCloseIntroduction] = useState(false);
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
  };

  const openWindowProject = () => {
    setOpenProject(!openProject);
    setCloseIntroduction(true);
    setOpenSkills(false);
    setOpenProfile(false);
  };

  const openWindowSkills = () => {
    setOpenSkills(!openSkills);
    setOpenProject(false);
    setCloseIntroduction(true);
    setOpenProfile(false);
  };

  const openWindowProfile = () => {
    setOpenProfile(!openProfile);
    setOpenSkills(false);
    setOpenProject(false);
    setCloseIntroduction(true);
  };

  return (
    <Container>
      <LanguageSelection isDarkMode={isDarkMode} />
      <ThemeButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {openProject ? (
        <Projects isDarkMode={isDarkMode}>Olá</Projects>
      ) : (
        <div></div>
      )}

      {closeIntroduction ? (
        <div></div>
      ) : (
        <IntroductionPage isDarkMode={isDarkMode}></IntroductionPage>
      )}

      {openSkills ? <Skills isDarkMode={isDarkMode}></Skills> : <div></div>}

      {openProfile ? <Abouth isDarkMode={isDarkMode}></Abouth> : <div></div>}

      <HotBar>
        <button onClick={openWindowProject}>
          <img src={ProjectIMG}></img>
          <p>{t("Hotbar.Projects")}</p>
        </button>
        <button onClick={openWindowSkills}>
          <img src={Habilidades}></img>
          <p>{t("Hotbar.Skills")}</p>
        </button>
        <button onClick={openWindowProfile}>
          <img src={curriculo}></img>
          <p>{t("Hotbar.Profile")}</p>
        </button>
        <a href="https://www.linkedin.com/in/luanrebuli/" target="_blank">
          <button>
            <img src={Linkedin}></img>
            <p>Linkedin</p>
          </button>
        </a>
        <a href="https://github.com/LuanRebuli" target="_blank">
          <button>
            <img src={Github}></img>
            <p>Github</p>
          </button>
        </a>
      </HotBar>
    </Container>
  );
};
