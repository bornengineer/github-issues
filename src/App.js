import { Container } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IssuesContainer from "./components/IssuesContainer";

function App() {
  return (
    <Container
      maxWidth="xl"
      className="box-center"
      sx={{
        background: "#fff",
        height: "100vh",
        paddingLeft: "0 !important",
        paddingRight: "0 !important",
      }}
    >
      <Header />
      <IssuesContainer />
      <div style={{ height: "18vh" }}></div>
      <Footer />
    </Container>
  );
}

export default App;
