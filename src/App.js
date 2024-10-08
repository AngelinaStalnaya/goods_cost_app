import React from "react";
import "./styles/styles.css";
import Grid from "@mui/material/Grid2";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesComponent from "./components/pages/Routes";
import { useSelector } from "react-redux";
import { loggedOut, loggedInAsync } from "./redux/user/userSlice";
import {clearState} from './redux/calculations/calculationsSlice';

const App = () => {
  const userName = useSelector((AppSelector) => AppSelector.user.name);
  const authorized = useSelector(
    (AppSelector) => AppSelector.user.isAuthorized
  );
  const userId = useSelector((AppSelector) => AppSelector.user.id);

  const userCalculations = useSelector(
    (AppSelector) => AppSelector.calculations.calculations
  );

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid size={12}>
          <Header
            userName={userName}
            authorized={authorized}
            loggedOut={loggedOut}
            clearState={clearState}
          />
        </Grid>

        <Grid size={12}>
          <RoutesComponent
            userName={userName}
            authorized={authorized}
            loggedOut={loggedOut}
            loggedInAsync={loggedInAsync}
            userId={userId}
            userCalculations={userCalculations}
          />
        </Grid>

        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
