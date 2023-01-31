import { NumbersSharp } from "@mui/icons-material";
import { Box } from "@mui/system";
import Nums from "./Nums";

const NavItem = ({ name, icon, num }) => {
  const borderBottom = name === "Issues" ? "3px solid orange" : "";
  return (
    <Box
      gap={0.7}
      sx={{
        height: "50px",
        // minWidth: "100px",
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom,
        padding: "0px 10px",
      }}
    >
      {icon} <strong>{name}</strong> {num && <Nums num={num} />}
    </Box>
  );
};

export default NavItem;
