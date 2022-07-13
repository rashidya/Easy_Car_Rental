import {css, Grid} from "@mui/material";
import {Component} from "react";
import {withStyles} from "@mui/styles";
import Polygon from 'react-polygon';
import {styleSheet as styles, styleSheet} from "./style";

class Home extends Component {
    myRenderPoint(point) {
        return <circle cx={point[0]} cy={point[1]} r={5} />;
    }


    render () {
        const {classes}=this.props;
        return (
            <Grid className={classes.polygon}>

                <svg height="100vh" width="60vw">
                    <polygon
                        points="1000,0 1000,650 350,650 100,150 250,0"

                        fill='purple'
                        stroke-linejoin="round"
                        stroke-width="20"
                        style={{borderRadius:50}}
                    />
                </svg>

                {/*<Polygon points={'500,10 500,350 300,250 200,70 300,10'} style={{fill:'lime'}} />*/}
                {/*<Polygon renderPoint={this.myRenderPoint} className={classes.polygon}/>*/}

            </Grid>

        )
    }
}

export default withStyles(styleSheet)(Home)