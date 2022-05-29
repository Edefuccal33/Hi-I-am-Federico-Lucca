import { VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {

  return (
    <VStack p={5}>
      <Navbar/>
      <Header/>
      <Social/>
      <Profile/>
    </VStack>
  );
}

export default App;
