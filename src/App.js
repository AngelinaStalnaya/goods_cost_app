import React, { useEffect, Suspense } from "react";
import "./styles/styles.css";
import Grid from "@mui/material/Grid2";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesComponent from "./components/pages/Routes";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loggedInAsync } from "./redux/user/userSlice";
import Loader from "./components/loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const userName = useSelector((AppSelector) => AppSelector.user.name);
  const authorized = useSelector(
    (AppSelector) => AppSelector.user.isAuthorized
  );
  const userId = useSelector((AppSelector) => AppSelector.user.id);
  const userCalculations = useSelector(
    (AppSelector) => AppSelector.calculationsList.calculations
  );

  const currentCalculation = useSelector(
    (AppSelector) => AppSelector.calculation
  );

  useEffect(() => {
    let cookies = document.cookie
      .split(";")
      .filter((el) => el.includes("HGCA"));
    if (cookies.length > 0) {
      const id = cookies[0].substring(5);
      dispatch(loggedInAsync(id));
    }
  });

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid size={12}>
          <Header authorized={authorized} userId={userId} />
        </Grid>
        <Suspense fallback={<Loader />}>
          <Grid size={12} className='main_grid'>
            <RoutesComponent
              userName={userName}
              authorized={authorized}
              userCalculations={userCalculations}
              currentCalculation={currentCalculation}
            />
          </Grid>
        </Suspense>

        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
