import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

export const BoxCustom = styled(Box)`
    position: absolute;
    top: 20px;
    right: 40px;

`

export const SelectCustomLight = styled(Select)`
    background: #ffff;
    color: black;

    img {
        margin-right: 10px;
    }

`

export const SelectCustomDark = styled(Select)`

    background: #342C2C;
    color: white;

    img {
        margin-right: 10px;
    }

`

