import { Stack, Box } from "@mui/system";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import Label from "./Label";
import Comment from "./Comment";
import moment from "moment/moment";

const Issue = ({
  issue: {
    number,
    labels,
    title,
    comments,
    created_at,
    user: { login },
  },
  innerRef,
}) => {
  const time = moment(created_at).fromNow();
  // console.log("time :>> ", time);
  return (
    <Stack
      direction="row"
      gap={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxHeigt: "50px",
        border: "1px solid #d0cece",
        borderLeft: "none",
        borderRight: "none",
        padding: "10px",
      }}
    >
      <Stack direction="row" gap={2}>
        <ModeStandbyIcon sx={{ color: "green" }} />
        <Stack>
          <Box
            sx={{
              lineHeight: "25px",
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "4px",
            }}
          >
            {title}
            {labels.map((label) => {
              return <Label key={label.id} label={label} />;
            })}
          </Box>
          <span ref={innerRef}>
            #{number} opened {time} by {login}
          </span>
        </Stack>
      </Stack>
      <Box>
        <Comment comments={comments} />
      </Box>
    </Stack>
  );
};

export default Issue;
