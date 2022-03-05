import "./App.css";
import Home from "./components/Home";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Home />
    </ChakraProvider>
  );
}

export default App;
