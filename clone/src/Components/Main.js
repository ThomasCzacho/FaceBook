import Header from './Header';
import { Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

function Main(){
    
    return(

<Grid sx={{ width: 1000, height: 800 }} alignItems='center' margin={1}>
<Paper sx={{ width: 1000, height: 800 }} alignItems='left'>
 <Grid  margin={1}>
 <Stack direction='row'spacing={1}>
 <Avatar ></Avatar>
 <Stack diretion='column' spacing={0} margin={0}>
 <Typography>Avatar Name</Typography>
 <Typography>Image title </Typography>
 </Stack>
 </Stack>
 </Grid>

 <Grid margin={1}>
 <Avatar sx={{ width: 600, height: 400 }} variant='square' alt="Ultra" src="https://www.bubblypet.com/wp-content/uploads/2021/11/Beautiful-grey-cat-breed-portrait.jpg"  />
 <Typography allign='left'>2/3/2021</Typography>
 </Grid>
 <Divider />
</Paper>
</Grid>

    )
}
export default Main