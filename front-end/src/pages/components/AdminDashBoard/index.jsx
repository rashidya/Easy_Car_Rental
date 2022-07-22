import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import LogoutIcon from '@mui/icons-material/Logout';
import {Grid} from "@material-ui/core";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar/>

            <List>
                {['Dashboard', 'Profile', 'Manage Customer', 'Manage Vehicle', 'Manage Driver', 'Manage Booking', 'Reports', 'Log out'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index == 0 ? <DashboardIcon color={'primary'}/> : index == 1 ?
                                    <AccountBoxIcon color={'success'}/> : index == 2 ?
                                        <CollectionsBookmarkIcon color={'warning'}/> : index == 3 ?
                                            <CollectionsBookmarkIcon color={'warning'}/> : index == 4 ?
                                                <CollectionsBookmarkIcon color={'warning'}/> : index == 5 ?
                                                    <CollectionsBookmarkIcon color={'warning'}/> : index == 6 ?
                                                        <CollectionsBookmarkIcon color={'warning'}/> :
                                                        <LogoutIcon style={{color: '#000000'}}/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
                style={{backgroundColor: 'black'}}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography width={'100%'} variant="h5" noWrap component="div" textAlign={'end'}>
                        Admin DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Toolbar/>

                <Grid style={{
                    width: '81vw',
                    height: '84vh',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'}}>

                <Grid style={{
                    width: '70vw',
                    height: '84vh',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid style={{
                    width: '70vw',
                    height: '84vh',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>
                        <Grid style={{
                            width: '100%',
                            height: '80%',
                            backgroundColor: '#c4c4c4',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>11</Typography>
                        </Grid>

                    </Grid>
                    <Grid style={{
                        width: '20vw',
                        height: '26vh',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Grid style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'black',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography>Registered Users</Typography>
                        </Grid>


                    </Grid>

                </Grid>
            </Grid>

        </Box>
</Box>
);
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
