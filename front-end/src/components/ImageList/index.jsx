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

const listItemData = [
    {image: "Profile", text: "/profile", description: 'ggggggggg' },
    {image: "Profile", text: "/profile", description: 'ggggggggg' },
    {image: "Profile", text: "/profile", description: 'ggggggggg' },
    {image: "Profile", text: "/profile", description: 'ggggggggg' },

]

export default function TitleBarImageList() {
    return (
        <Grid sx={{ width: '95%', height: '100%' }}>
           {/* <ImageListItem key="Subheader" cols={3}>
                <ListSubheader component="div">December</ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                            >
                                <BookIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}*/}
            {listItemData.map((item, index) => (
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={item.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.text}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Book Now</Button>
                    </CardActions>
                </Card>
            ))}
        </Grid>
    );
}

