import { Box, Container } from "@mui/material";
import { footerTitles } from "../utils/constants";

const Footer = () => {
  return (
    <Container>
      <Box>
        {footerTitles[0].map((title) => {
          {
            <span>{title}</span>;
          }
        })}
      </Box>
      <Box>
        {footerTitles[1].map((title) => {
          {
            <span>{title}</span>;
          }
        })}
      </Box>
    </Container>
  );
};

export default Footer;
