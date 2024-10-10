import React from "react";
import "./styles/styles.css";
import Grid from "@mui/material/Grid2";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesComponent from "./components/pages/Routes";
import { useSelector } from "react-redux";
import { loggedOut, loggedInAsync } from "./redux/user/userSlice";
import {clearState, getUserCalculationsAsync} from './redux/calculations/calculationsListSlice';
import {getCalculationDataAsync, clearCalculationState } from './redux/calculations/calculationSlice';


const App = () => {
  const userName = useSelector((AppSelector) => AppSelector.user.name);
  const authorized = useSelector(
    (AppSelector) => AppSelector.user.isAuthorized
  );
  const userId = useSelector((AppSelector) => AppSelector.user.id);

  const userCalculations = useSelector(
    (AppSelector) => AppSelector.calculationsList.calculations
  );

  const currentCalculation = useSelector((AppSelector) => AppSelector.calculation)


  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid size={12}>
          <Header
            userName={userName}
            authorized={authorized}
            loggedOut={loggedOut}
            clearState={clearState}
            clearCalculationState={clearCalculationState}
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
            currentCalculation={currentCalculation}
            getCalculationDataAsync={getCalculationDataAsync}
            getUserCalculationsAsync={getUserCalculationsAsync}
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
