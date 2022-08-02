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
        <Box position="fixed">
          <Box position="absolute" width={1100}>
           <div style={{display: 'flex', justifyContent:'flex-end'}}>
            <Stack direction="collumn" spacing={20} margin={0}>
             <div className='Rightbar'>
                <Card position="fixed">
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
               </Online> <Typography margin={1}>View Profile</Typography> <MessageIcon></MessageIcon>
           </ListItem>
           <ListItem >
           <Online
             overlap="circular"
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             variant="dot">
                     <Avatar alt="Muscle Car" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ford-mustang-boss-429-1970-by-simon-clay-news-photo-1598884238.jpg?crop=1.00xw:0.757xh;0,0.243xh&resize=1200:*" />
               </Online> <Typography margin={1}>View Profile</Typography> <MessageIcon></MessageIcon>
           </ListItem>
           <ListItem >
           <Online
             overlap="circular"
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             variant="dot">
                     <Avatar alt="MUguy2" src="https://mui.com/static/images/avatar/1.jpg" />
               </Online> <Typography margin={1}>View Profile</Typography> <MessageIcon></MessageIcon>
           </ListItem>
           <ListItem >
           <Online
             overlap="circular"
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             variant="dot">
                     <Avatar alt="MUguy3" src="https://mui.com/static/images/avatar/3.jpg" />
               </Online> <Typography margin={1}>View Profile</Typography> <MessageIcon></MessageIcon>
           </ListItem>
           <ListItem >
           <StyledBadge
             overlap="circular"
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             variant="dot">
                     <Avatar alt="Zebra" src="https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK-1200-80.jpg" />
               </StyledBadge> <Typography margin={1}>View Profile</Typography> <MessageIcon></MessageIcon>
           </ListItem>
           <ListItem >
               <StyledBadge
             overlap="circular"
             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
             variant="dot">
                     <Avatar alt="Ultra" src="https://www.bubblypet.com/wp-content/uploads/2021/11/Beautiful-grey-cat-breed-portrait.jpg" />
               </StyledBadge> <Typography margin={1}>View Profile</Typography> <MessageIcon></MessageIcon>
           </ListItem>
</List>
                </Card>
             </div>
            </Stack>
           </div>
          </Box>
        </Box>
    )
}

export default Rightbar