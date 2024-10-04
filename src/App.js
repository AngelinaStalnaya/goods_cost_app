import React from "react";
import './styles/styles.css';
import Grid from "@mui/material/Grid2";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesComponent from './components/pages/Routes';
import {useSelector } from "react-redux";
import {loggedOut, loggedInAsync} from './redux/user/userSlice';


const App = () => {
  const userName = useSelector((AppSelector) => AppSelector.user.name)
  const authorized = useSelector(
    (AppSelector) => AppSelector.user.isAuthorized
  );

  return (
    <div className='App'>
    <Grid container spacing={2}>
      <Grid size={12}>
        <Header userName={userName} authorized={authorized}  loggedOut={loggedOut}/>
      </Grid>

     <Grid size={12}>
        <RoutesComponent username={userName} authorized={authorized}  loggedOut={loggedOut} loggedInAsync={loggedInAsync}/>
      </Grid>

      <Grid size={12}>
      <Footer />
      </Grid>

    </Grid>
    </div>
  );
};

export default App;
