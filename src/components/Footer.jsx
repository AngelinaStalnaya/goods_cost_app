import React from "react";
import { Typography, Box, SvgIcon, Link } from "@mui/material";
import * as Svgs from "../images/svg/SvgIcons";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer__contacts">
        <Typography sx={{ fontSize: ["15px", "20px"] }}>
          ©2024 Angelina Stalnaya
        </Typography>
        <Box className='footer__contacts_icons'>
          <Link
            href="https://www.linkedin.com/in/angelina-stalnaya-30712b2ba/"
            target="_blank"
            rel="noreferrer"
          >
            <SvgIcon
              aria_label="Linkedin contact"
              component={Svgs.Linkedincon}
              inheritViewBox
              className="footer__icon contact__icon"
            />
          </Link>
          <Link
            href="mailto:angelinastalnaya.feb@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SvgIcon
              aria_label="Email contact"
              component={Svgs.EmailIcon}
              inheritViewBox
              className="footer__icon contact__icon"
            />
          </Link>

          <Link
            href="https://github.com/AngelinaStalnaya"
            target="_blank"
            rel="noreferrer"
          >
            <SvgIcon
              aria_label="GitHub icon"
              component={Svgs.GitHubIcon}
              inheritViewBox
              className="footer__icon contact__icon"
            />
          </Link>
        </Box>
      </Box>
      <Box className="footer__additional">
        <Typography>Made with:</Typography>
        <SvgIcon
          aria_label="React icon"
          component={Svgs.ReactIcon}
          inheritViewBox
          className="footer__icon"
        />
        <SvgIcon
          aria_label="Redux icon"
          component={Svgs.ReduxIcon}
          inheritViewBox
          className="footer__icon"
        />
        <SvgIcon
          aria_label="Mui icon"
          component={Svgs.MUIIcon}
          inheritViewBox
          className="footer__icon"
        />
        <SvgIcon
          aria_label="ExpressJs icon"
          component={Svgs.ExpressIcon}
          inheritViewBox
          className="footer__icon"
        />
        <SvgIcon
          component={Svgs.MongoIcon}
          inheritViewBox
          className="footer__icon"
        />
      </Box>
    </Box>
  );
};
export default Footer;
