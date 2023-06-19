import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
 
function Display({dataS}) {
    dataS.map((it)=>{console.log(it.name);});
  
  return (
    
 <Container component="main" maxWidth="xs" sx={6} >
    <CssBaseline />
<Box  component="span"  sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}>
           
  {dataS.map((it)=>{return( <Box  component="span"  sx={{
            width:'40vw',
            p: 2, border: '1px dashed grey',
            marginBottom:2
          }}>
    Name : {it.name}<br/>
    Email : {it.email}<br/>
    Password : {it.password}<br/>
    </Box>)})}

    


    </Box>
</Container>

  );
}

export default Display;
