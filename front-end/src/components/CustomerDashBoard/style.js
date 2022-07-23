import {blue, blueGrey} from "@material-ui/core/colors";

export const styleSheet={
    navLinks: {
        color: blueGrey["A400"],
        "& :hover , &:hover div": {
            color: blue["A200"],
        },
        " & div": {
            color: blueGrey["A400"],
        },
    },

    activeNavLinks: {
        color: blue["A700"],
        "& div": {
            color: blue["A700"],
        },
    },

    navButton: {
        width: " 100%",
        textTransform: "capitalize",
    },
}