import * as React from 'react';
import "../App.css"
import { SidebarData } from './SidebarData';
import { Stack } from '@mui/material';
import Switch from '@mui/material/Switch';
import NightlightIcon from '@mui/icons-material/Nightlight';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    flexDirection: 'column',
    justifyContent: 'space-between'
  });
  
const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Sidebar(){
    
    return(
        
        <Stack direction="collumn" spacing={20}>
        <div className='Sidebar'>
        <Container maxWidth="sm" >
            <ul className='SidebarList'>
                {SidebarData.map((val,key)=> {
                    return(
                        
                        <li key ={key}
                        className='row'
                        onClick={() => {window.location.pathname = val.link}}>
                            {" "}
                            <Stack direction="row" spacing={2} margin={0}>
                            <div id="icon">{val.icon}</div>{" "}
                            <div id="title">
                                {val.title}
                            </div>
                            </Stack>
                        </li>
                        
                    )
                })}
            </ul>
            </Container>
            <Stack direction="row" spacing={2} margin={2}>
                <NightlightIcon />
            <Switch {...label} defaultChecked />
            </Stack>
            <Grid sx={{ width: 28, height: 328 }}></Grid>
    <Stack direction="row" spacing={2} margin={2}>
    <Avatar>
       <IconButton aria-label="Add">
           <AddIcon />
       </IconButton>
    </Avatar>
    </Stack>
    <Grid sx={{ width: 28, height: 128 }}></Grid>

        </div>
        
        </Stack>
    )
}

export default Sidebar