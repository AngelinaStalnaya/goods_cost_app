import React from "react";
import './styles/styles.css';
import Grid from "@mui/material/Grid2";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesComponent from './components/pages/Routes';


const App = () => {
  return (
    <div className='App'>
    <Grid container spacing={2}>
      <Grid size={12}>
        <Header/>
      </Grid>

     <Grid size={12}>
        <RoutesComponent />
      </Grid>

      <Grid size={12}>
      <Footer />
      </Grid>

    </Grid>
    </div>
  );
};

export default App;
