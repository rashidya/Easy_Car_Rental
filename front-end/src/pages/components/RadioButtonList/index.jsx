import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';


export default function GroupCheckboxes() {
    return (
        <Box>
            <Typography id="sandwich-group" level="body2" fontWeight="lg" mb={1} style={{fontWeight:'bolder',color:'white'}}>
                Vehicle Category
            </Typography>
            <Box role="group" aria-labelledby="sandwich-group">
                <List size="sm">
                    <ListItem>
                        <Checkbox label="Luxury" variant={'outlined'} style={{color:'white'}}/>
                    </ListItem>
                    <ListItem>
                        <Checkbox  label="Premium" variant={'outlined'} style={{color:'white'}} />
                    </ListItem>
                    <ListItem>
                        <Checkbox  label="Regular"  variant={'outlined'} style={{color:'white'}}/>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}
