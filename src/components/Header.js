import React from "react";
import { Container, Stack, Box } from "@mui/system";
import { Typography } from "@mui/material";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import HeaderData from "./HeaderData";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ForkLeftIcon from "@mui/icons-material/ForkLeft";

import { navs } from "../utils/constants";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        background: "#f6f8fa",
        padding: "0px",
        color: "gray",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{
          height: "8vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "16vw",
          }}
        >
          <CollectionsBookmarkIcon sx={{ fontSize: "20px" }} />
          <Typography variant="h6" sx={{ color: "#2d8ffb" }}>
            facebook / <strong>react</strong>
          </Typography>
          <div
            className="box-center"
            style={{
              border: "1px solid #d0cece",
              borderRadius: "20px",
              width: "50px",
            }}
          >
            Public
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "14px",
          }}
          gap={2}
        >
          <HeaderData icon={<NotificationsNoneIcon />} text={"Notifications"} />
          <HeaderData icon={<StarBorderIcon />} text={"Star"} nums={"175K"} />
          <HeaderData icon={<ForkLeftIcon />} text={"Fork"} nums={"35.3K"} />
        </Box>
      </Stack>
      <Stack direction="row" gap={3} sx={{ margin: "0px 0px 0px 20px" }}>
        {navs.map((nav) => {
          return (
            <NavItem
              key={nav.name}
              name={nav.name}
              icon={nav.icon}
              num={nav.num}
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default Header;
