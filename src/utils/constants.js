import CodeIcon from "@mui/icons-material/Code";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import DataThresholdingOutlinedIcon from "@mui/icons-material/DataThresholdingOutlined";

export const navs = [
  { name: "Code", icon: <CodeIcon sx={{ fontSize: "19px" }} /> },
  {
    name: "Issues",
    icon: <ModeStandbyIcon sx={{ fontSize: "19px" }} />,
    num: 625,
  },
  {
    name: "Pull request",
    icon: <AccountTreeOutlinedIcon sx={{ fontSize: "19px" }} />,
    num: 208,
  },
  {
    name: "Actions",
    icon: <PlayCircleOutlineIcon sx={{ fontSize: "19px" }} />,
  },
  {
    name: "Projects",
    icon: <InsertChartOutlinedRoundedIcon sx={{ fontSize: "19px" }} />,
  },
  { name: "Wiki", icon: <MenuBookIcon sx={{ fontSize: "19px" }} /> },
  {
    name: "Security",
    icon: <PrivacyTipOutlinedIcon sx={{ fontSize: "19px" }} />,
  },
  {
    name: "Insights",
    icon: <DataThresholdingOutlinedIcon sx={{ fontSize: "19px" }} />,
  },
];

export const filters = [
  { name: "Author" },
  { name: "Label" },
  { name: "Projects" },
  { name: "Milestones" },
  { name: "Assignee" },
  { name: "Sort" },
];

// export const links = [
//   { facebook: "https://github.com/facebook" },
//   { react: "https://github.com/facebook/react" },
//   { react_code: "https://github.com/facebook/react" },
//   { react_issues: "https://github.com/facebook/react/issues" },
//   { react_prs: "https://github.com/facebook/react/pulls" },
//   { react_actions: "https://github.com/facebook/react/actions" },
//   { react_projects: "https://github.com/facebook/react/projects" },
//   { react_wiki: "https://github.com/facebook/react/wiki" },
//   { react_security: "https://github.com/facebook/react/security" },
//   { react_insights: "https://github.com/facebook/react/pulse" },
// ];

export const footerTitles = [
  ["Terms", "Privacy", "Security", "Status", "Docs"],
  ["Contact GitHub", "Pricing", "API", "Training", "Blog", "About"],
];
