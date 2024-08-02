import { IconButtonCustom, DarkCustom, LightModeCustom } from "./styles";
import PropTypes from "prop-types";

export function ThemeButton({ isDarkMode, toggleTheme }) {
  return (
    <IconButtonCustom aria-label="Dark Mode" onClick={toggleTheme}>
      {isDarkMode ? <DarkCustom /> : <LightModeCustom />}
    </IconButtonCustom>
  );
}

ThemeButton.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
