import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
//a import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from '@mui/material';
//a import Link from '@mui/material/Link';

import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';

import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#E3000B',
    color: '#E3000B',
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '100%',
      
      border: '',
      content: '""',
    },
  },
}));


export default function Header() {
    return (
        <AppBar
        position="absolute"
        color="secondary"
        elevation={0}
        sx={{
          position: 'relative',
          borderTop: (t) => `1px solid ${t.palette.divider}`,
        }}

      >
    
    <Toolbar align="center">
      
<MenuIcon></MenuIcon>
      <Typography>Code Differently</Typography>
    
<Container>
<TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            variant="filled"
            label='Search'
            sx={{backgroundColor:'white', width: 300}}
            size='small'
            
          />
          </Container>
          
          
            <Stack align='right' container direction='rows' spacing={20}
            >
              <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
            <EmailIcon sx={{ width: 28, height: 28 }} ></EmailIcon></StyledBadge>

<StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
<NotificationsIcon sx={{ width: 28, height: 28 }} ></NotificationsIcon></StyledBadge>

<Avatar
        alt="Remy Sharp"
        
        sx={{ width: 28, height: 28 }}
        
        
><PersonIcon></PersonIcon></Avatar>
</Stack>

         
    </Toolbar>
    </AppBar>
    )
}
