import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import { Container } from "@gravity-ui/uikit";
import { TranslatorContainer, Header } from "./components";

function App() {
  return (
    <Container gutters="10">
      <Header />
      <TranslatorContainer />
    </Container>
  );
}

export default App;
