import { Container } from "@mui/material";
import Issue from "./Issue";
import IssuesHeader from "./IssuesHeader";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const IssuesContainer = () => {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    fetchFromAPI().then((data) => {
      console.log("data :>> ", data);
      setIssues(data);
    });
  }, []);
  return (
    <Container
      sx={{
        border: "1px solid #d0cece",
        marginTop: "40px",
        borderRadius: "6px",
        paddingLeft: "0 !important",
        paddingRight: "0 !important",
      }}
    >
      <IssuesHeader />
      {issues.map((issue) => {
        return <Issue key={issue.number} issue={issue} />;
      })}
    </Container>
  );
};

export default IssuesContainer;
