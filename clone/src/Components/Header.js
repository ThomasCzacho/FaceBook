import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
//a import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from '@mui/material';
//a import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
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

const theme = createTheme({
  typography: {
    button: {
      fontSize: '1rem',
    },
  },
});

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
      <Typography variant="body2" color="text.secondary" align="center" padding='10px'>
      {'Copyright © '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    <Avatar
        alt="Remy Sharp"
        src="https://brandpalettes.com/wp-content/uploads/2018/08/LEGO-Logo-300x300.png?ezimgfmt=ng:webp/ngcb1"
        sx={{ width: 28, height: 28 }}
        variant="square"
        
/>
<Container>
<TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            variant="filled"
            label='Search'
            backgroundColor='#ffffff'
            borderColor="#ffffff"
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
