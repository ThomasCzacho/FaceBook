import * as React from 'react';
import "../App.css"
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import MessageIcon from '@mui/icons-material/Message';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

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

  const Online = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#00FF00',
      color: '#00FF00',
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

function Rightbar(){
    
    return(
        <Box>
          <Box position="absolute" width={1050}>
           <div style={{display: 'flex', justifyContent:'flex-end'}}>
            <Stack direction="collumn" spacing={20} margin={0}>
             <div className='Rightbar'>
                
                <h3>Friends List</h3>
                <h5>4 Online</h5>
                <Divider></Divider>
                <List padding="30" margin="10">
          <ListItem >
          <Online
             overlap="circular"
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             variant="dot">
                     <Avatar alt="MUguy" src="https://mui.com/static/images/avatar/2.jpg" / >
               </Online> <Typography margin={1}>View Profile</Typography> <MessageIcon></MessageIcon><RemoveRedEyeIcon></RemoveRedEyeIcon>
           </ListItem>
           <ListItem >
           <Online
             overlap="circular"
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             variant="dot">
                     <Avatar alt="Muscle Car" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ford-mustang-boss-429-1970-by-simon-clay-news-photo-1598884238.jpg?crop=1.00xw:0.757xh;0,0.243xh&resize=1200:*" />
               </Online> <Typography margin={1}>View Profile</Typography> <MessageIcon></MessageIcon><RemoveRedEyeIcon></RemoveRedEyeIcon>
           </ListItem>
           <ListItem >
           <Online
             overlap="circular"
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             variant="dot">
                     <Avatar alt="MUguy2" src="https://mui.com/static/images/avatar/1.jpg" />
               </Online> <Typography margin={1}>View Profile</Typography> <MessageIcon></MessageIcon><RemoveRedEyeIcon></RemoveRedEyeIcon>
           </ListItem>
           <ListItem >
           <Online
             overlap="circular"
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             variant="dot">
                     <Avatar alt="MUguy3" src="https://mui.com/static/images/avatar/3.jpg" />
               </Online> <Typography margin={1}>View Profile</Typography> <MessageIcon></MessageIcon><RemoveRedEyeIcon></RemoveRedEyeIcon>
           </ListItem>
           <ListItem >
           <StyledBadge
             overlap="circular"
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             variant="dot">
                     <Avatar alt="Zebra" src="https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK-1200-80.jpg" />
               </StyledBadge> <Typography margin={1}>View Profile</Typography> <MessageIcon></MessageIcon><RemoveRedEyeIcon></RemoveRedEyeIcon>
           </ListItem>
           <ListItem >
               <StyledBadge
             overlap="circular"
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             variant="dot">
                     <Avatar alt="Ultra" src="https://www.bubblypet.com/wp-content/uploads/2021/11/Beautiful-grey-cat-breed-portrait.jpg" />
               </StyledBadge> <Typography margin={1}>View Profile</Typography> <MessageIcon></MessageIcon><RemoveRedEyeIcon></RemoveRedEyeIcon>
           </ListItem>
</List>
<Divider></Divider>
<Typography margin={1}>Friend's Photos</Typography>

<Stack direction="column" spacing={2} margin={2}>
<Stack direction="row" spacing={2}>
  <Avatar sx={{ width: 80, height: 80 }} variant='square'  src="https://thumbs.dreamstime.com/b/blanket-food-prepared-summer-picnic-outdoors-125192679.jpg" / >
  <Avatar sx={{ width: 80, height: 80 }} variant='square' src="http://s01.riotpixels.net/data/bf/b5/bfb5b992-e89a-428d-9a6e-e4bdda934b69.jpg/screenshot.multiversus.3840x2160.2021-11-21.4.jpg" />
  <Avatar sx={{ width: 80, height: 80 }} variant='square'  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christmas-tree-ideas-flowers-1598901890.jpg" / >
</Stack>
<Stack direction="row" spacing={2}>
  <Avatar sx={{ width: 80, height: 80 }} variant='square' src="https://imageio.forbes.com/specials-images/imageserve/61dac580de5b7a6101b66374/Hell-s-gate/960x0.jpg?format=jpg&width=960" />
  <Avatar sx={{ width: 80, height: 80 }} variant='square' src="data:image/jpeg;base64,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" />
  <Avatar sx={{ width: 80, height: 80 }} variant='square' src="https://cdn0.weddingwire.com/vendor/634196/3_2/960/jpg/1466872556-f862868b355ef0e7-Barcelona_Inspired_Bridal_Shoot-Barcelona_Inspired_Bridal_Shoot-0025.jpeg" />
</Stack>
</Stack>
                
             </div>
            </Stack>
           </div>
          </Box>
        </Box>
    )
}

export default Rightbar