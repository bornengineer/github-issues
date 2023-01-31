import React from "react";
import { Stack, Box } from "@mui/system";

const HeaderData = ({ icon, text, nums }) => {
  return (
    <Stack
      direction="row"
      sx={{ border: "1px solid #d0cece", borderRadius: "10px" }}
    >
      <Box
        sx={{
          padding: "3px 7px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        {icon} &nbsp; {text}
      </Box>

      {nums && (
        <Box
          sx={{
            padding: "4px 7px",
            borderLeft: "1px solid #d0cece",
            borderRadius: "0px 10px 10px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#fff",
          }}
        >
          {nums}
        </Box>
      )}
    </Stack>
  );
};

export default HeaderData;
