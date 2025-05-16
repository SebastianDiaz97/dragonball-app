import { Container, SimpleGrid } from "@chakra-ui/react";
import CardInfo from "./components/CardInfo";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import InfoModal from "./components/InfoModal";

function App() {
  return (
    <>
      <Container p={4} maxW="container.xl" mx="auto">
        <Header />
        <SearchForm />

        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          <CardInfo></CardInfo>
          <CardInfo></CardInfo>
          <CardInfo></CardInfo>
          <CardInfo></CardInfo>
          <CardInfo></CardInfo>
          <CardInfo></CardInfo>
        </SimpleGrid>

        <InfoModal></InfoModal>
      </Container>
    </>
  );
}

export default App;
