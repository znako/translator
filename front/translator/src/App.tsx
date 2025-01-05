import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import { Container, Flex, Row, Text } from "@gravity-ui/uikit";
import { TranslatorContainer, Header } from "./components";
// import "./App.css";

function App() {
  return (
    <Container gutters="10">
      {/* <Row space={2}> */}
      <Header />
      {/* </Row> */}
      {/* <Row space={2}> */}
      <TranslatorContainer />
      {/* </Row> */}
    </Container>
  );
}

export default App;
