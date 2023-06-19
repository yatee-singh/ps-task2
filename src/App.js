import logo from './logo.svg';
import './App.css';
import * as React from 'react';

import Grid from '@mui/material/Grid';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Display from './comp';
import Login from './login'
const defaultTheme = createTheme();
 
function App() {
  const [dataS,setData]=React.useState([]);
  const getData=(data)=>{
    console.log(data);
    setData(data);

  }
  return (

    <ThemeProvider theme={defaultTheme}>
      <Grid container>
        <Grid item marginLeft="10vw">
            <Login onSubmit={getData}/>
        </Grid>
        <Grid item sx={6} marginLeft="10vw">
            <Display dataS={dataS}/>
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
}

export default App;
