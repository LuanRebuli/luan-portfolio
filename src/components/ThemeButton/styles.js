import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import Dark from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";

export const IconButtonCustom = styled(IconButton)`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 25px;
    right: 200px;
`

export const DarkCustom = styled(Dark)`
    width: 40px;
    height: 40px;
    color: black;
`

export const LightModeCustom = styled(LightMode)`
    width: 40px;
    height: 40px;
    color: white;
`