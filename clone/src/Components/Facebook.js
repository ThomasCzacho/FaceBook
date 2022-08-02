import Header from './Header';
import Rightbar from './Rightbar';
import Sidebar from './Sidebar';
import { Grid, Stack } from '@mui/material';

function Facebook() {
  return (
    <div className="Header">
      <Header />
      <Stack direction='row'>
         <div className="Sidebar">
         <Sidebar />
         </div>
         <div className='Rightbar' style={{display: 'flex', justifyContent:'flex-end'}} >
        <Rightbar />
         </div>
         </Stack>
      </div>
  );
}

export default Facebook;