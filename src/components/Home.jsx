import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./Header";
import Form from "./Form";
import Information from "./Information";

const Home = () => {
  const [result, setResult] = useState("");
  return (
    <>
      <CssBaseline />
      <Container maxWidth="100%">
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Form setResult={setResult} />
          <Information result={result} />
        </Box>
      </Container>
    </>
  );
};

export default Home;
