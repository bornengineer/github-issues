import CodeIcon from "@mui/icons-material/Code";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import DataThresholdingOutlinedIcon from "@mui/icons-material/DataThresholdingOutlined";

export const navs = [
  { name: "Code", icon: <CodeIcon /> },
  { name: "Issues", icon: <ModeStandbyIcon />, num: 625 },
  { name: "Pull request", icon: <AccountTreeOutlinedIcon />, num: 208 },
  { name: "Actions", icon: <PlayCircleOutlineIcon /> },
  { name: "Projects", icon: <InsertChartOutlinedRoundedIcon /> },
  { name: "Wiki", icon: <MenuBookIcon /> },
  { name: "Security", icon: <PrivacyTipOutlinedIcon /> },
  { name: "Insights", icon: <DataThresholdingOutlinedIcon /> },
];

export const filters = [
  { name: "Author" },
  { name: "Label" },
  { name: "Projects" },
  { name: "Milestones" },
  { name: "Assignee" },
  { name: "Sort" },
];
