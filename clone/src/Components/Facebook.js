import Header from './Header';
import Rightbar from './Rightbar';
import Sidebar from './Sidebar';
import Main from './Main';
import { Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
function Facebook() {
  return (
    
    <div>
    <div className="Header">
      <Header />
      </div>
      <Stack direction='row' spacing={2} maxWidth={200}>
         <div className="Sidebar">
         <Sidebar />
         </div>
         
         <Main />
        
         
         <div className='Rightbar' style={{display: 'flex', justifyContent:'flex-end'}} >
        <Rightbar />
         </div>
         </Stack>
         </div>
         
  );
}

export default Facebook;