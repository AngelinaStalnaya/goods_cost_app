import React from "react";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./styles/theme";
import { Typography, Input, Divider } from "@mui/material";
import CommonBtn from "./components/buttons/ComonBtn";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <Divider />

      <Typography>Text is here...</Typography>
      <CommonBtn>Click me</CommonBtn>
      <Input placeholder="input smthg"></Input>
      
      
      <Divider />
      <Footer />
    </div>
    // </ThemeProvider>
  );
};

export default App;
