/*
import * as React  from "react";
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Home from "./home";



const useStyles = makeStyles({
    drawer: {
        width: "190px"
    }
});

const Drawer = props => {
    console.log(props);
    const {history} = props;

    const classes = useStyles();
    const itemsList = [
        {
            text: "Home",
            onClick: () => { history.push("/")}
        },
        {
            text: "About",
            onClick: () => history.push("/about")
        },
        {
            text: "Contact",
            onClick: () => history.push("/contact")
        }
    ];
    return (
        <MUIDrawer variant="permanent" className={classes.drawer}>
            <List>
                {itemsList.map((item, index) => {
                    const {text,onClick} = item;
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>
    );
};

export default withRouter(Drawer);*/
