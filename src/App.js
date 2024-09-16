import React from "react";
import './styles/styles.css';
import Grid from "@mui/material/Grid2";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import RoutesComponent from './components/pages/Routes';



const App = () => {
  return (
    <Grid container className="App" spacing={2}>
      <Grid size={12}>
        <Header />
      </Grid>

      <Grid size={4}>
        <Sidebar />
      </Grid>
      <Grid size={8}>
        <RoutesComponent />
      </Grid>

      <Grid size={12}>
      <Footer />
      </Grid>

    </Grid>
  );
};

export default App;
