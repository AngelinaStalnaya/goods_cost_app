import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import { Typography, Input } from "@mui/material";
import CommonBtn from './components/buttons/ComonBtn'



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Typography>Text is here</Typography>
        <CommonBtn sx={{marginRight: '10px'}} variant='outlined' handleBtnClick={() =>  alert('click')}>
            Click me
        </CommonBtn>
        <Input placeholder='input smthg'></Input>
      </div>
    </ThemeProvider>
  );
};

export default App;
