import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@material-ui/core";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BookIcon from "@mui/icons-material/Book";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LogoutIcon from "@mui/icons-material/Logout";
import carImage from '../../assets/contact.jpg'


const listItemData = [
    {image: '../../assets/contact.jpg', link: "/profile", description: 'Toyota Axio' },
    {image: {carImage}, link: "/profile", description: 'Toyota Axio' },
    {image: {carImage}, link: "/profile", description: 'Toyota Axio' },
    {image: {carImage}, link: "/profile", description: 'Toyota Axio' },
    {image: {carImage}, link: "/profile", description: 'Toyota Axio' },
    {image: {carImage}, link: "/profile", description: 'Toyota Axio' },




]

export default function TitleBarImageList() {
    return (
        <Grid sx={{ width: '95%',}} style={{height:'88%',display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'center'}}>

            {listItemData.map((item, index) => (
                <Card style={{width:'20vw'} }>
                    <CardMedia
                        component="img"
                        alt="img"
                        height="130"
                        image={carImage}

                    />
                    <CardContent>
                        <Typography  variant="h6" textAlign={'center'}>
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions style={{display:'flex',justifyContent:'center'}}>

                        <Button size="small"  style={{backgroundColor:'green',color:'white'}}>Book Now</Button>
                    </CardActions>
                </Card>
            ))}
        </Grid>
    );
}

