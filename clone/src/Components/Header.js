import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
//a import Box from '@mui/material/Box';
//a import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from '@mui/material';
//a import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

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
<Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="contained"
          />
        </Grid>
    </Toolbar>
    </AppBar>
    )
}