// import { useDisclosure } from "@mantine/hooks";
import "./App.css";
import Landing from "./Pages/Landing";
// import Header from "./components/Header";
import { Box } from "@mantine/core";

function App() {
  // const [opened, { toggle }] = useDisclosure(false);
  return (
    <Box>
      {/* <Header opened={opened} toggle={toggle} /> */}
      <Landing />
    </Box>
  );
}

export default App;
