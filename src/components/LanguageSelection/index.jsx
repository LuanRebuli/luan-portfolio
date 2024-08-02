import * as React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { BoxCustom, SelectCustomDark, SelectCustomLight } from "./styles";

import EUA from "../../assets/image.png";
import Brasil from "../../assets/brasil.jpg";

export const LanguageSelection = ({ isDarkMode }) => {
  const [language, setLanguage] = React.useState("");
  const { i18n } = useTranslation();

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem("language:name");
    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleChange = async (event) => {
    const languageIs = event.target.value;
    setLanguage(languageIs);

    i18n.changeLanguage(languageIs);
    await localStorage.setItem("language:name", languageIs);
  };

  const getFlagImage = (language) => {
    switch (language) {
      case "pt":
        return Brasil;
      case "en":
        return EUA;
      default:
        return null;
    }
  };

  return (
    <BoxCustom sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {isDarkMode ? (
          <SelectCustomDark
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            onChange={handleChange}
          >
            <MenuItem value={"pt"}>
              {getFlagImage("pt") && (
                <img src={getFlagImage("pt")} alt="Brazil Flag" />
              )}
              Português
            </MenuItem>
            <MenuItem value={"en"}>
              {getFlagImage("en") && (
                <img src={getFlagImage("en")} alt="US Flag" />
              )}
              Inglês
            </MenuItem>
          </SelectCustomDark>
        ) : (
          <SelectCustomLight
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            onChange={handleChange}
          >
            <MenuItem value={"pt"}>
              {getFlagImage("pt") && (
                <img src={getFlagImage("pt")} alt="Brazil Flag" />
              )}
              Português
            </MenuItem>
            <MenuItem value={"en"}>
              {getFlagImage("en") && (
                <img src={getFlagImage("en")} alt="US Flag" />
              )}
              Inglês
            </MenuItem>
          </SelectCustomLight>
        )}
      </FormControl>
    </BoxCustom>
  );
};

LanguageSelection.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};
