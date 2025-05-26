import { Container } from "@chakra-ui/react";
import Header from "../components/Header";
// import MainContent from "../components/MainContent";
import { Outlet } from "react-router-dom";
// import SearchForm from "./components/SearchForm";
// import { useCharacters } from "../src/hooks/useHttpData";

function App() {
  return (
    <>
      <Container p={4} maxW="container.xl" mx="auto">
        <Header />
        {/* <SearchForm /> */}
        {/* <MainContent /> */}
        <Outlet />
      </Container>
    </>
  );
}

export default App;
