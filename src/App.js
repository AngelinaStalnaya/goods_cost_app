import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import colors from "./styles/colors";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header color={colors.purple[200]}>2345678</header>
      </div>
    </ThemeProvider>
  );
};

export default App;
