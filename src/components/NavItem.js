import { NumbersSharp } from "@mui/icons-material";
import { Box } from "@mui/system";
import Nums from "./Nums";

const NavItem = ({ name, icon, num }) => {
  const borderBottom = name === "Issues" ? "3px solid orange" : "";
  const fontWeight = name === "Issues" ? "bold" : "normal";
  const color = name === "Issues" ? "#4d4c4c" : "gray";
  return (
    <Box
      gap={0.7}
      sx={{
        height: "50px",
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 10px",
        borderBottom,
        fontWeight,
        color,
      }}
    >
      {icon} {name} {num && <Nums num={num} />}
    </Box>
  );
};

export default NavItem;
