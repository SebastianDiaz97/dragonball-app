import { Heading, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import useCharacters from "../hooks/useHttpData";
import { InfoData } from "../types";
import CardInfo from "./CardInfo";
import InfoModal from "./InfoModal";
import { useEffect, useState } from "react";
import NumberPage from "./NumberPage";

function MainContent() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useCharacters<InfoData>(page);
  const [personaje, setPersonaje] = useState<number>(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {});
  if (isLoading) {
    return <Heading>Cargando</Heading>;
  }

  if (error) {
    return <Heading>{error.message}</Heading>;
  }

  if (data) {
    return (
      <>
        <NumberPage
          page={page}
          totalPage={data.meta.totalPages}
          setPage={setPage}
        />
        <SimpleGrid
          spacing={4}
          templateColumns={{ base: "1fr", md: "repeat(auto-fill, minmax(300px, 1fr))" }}
          justifyItems="center" // Centra cada celda
        >
          {data.items.map((item) => (
            <CardInfo
              item={item}
              setPersonaje={setPersonaje}
              key={item.id}
              onOpen={onOpen}
            />
          ))}
        </SimpleGrid>
        <InfoModal
          personaje={personaje}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
        <NumberPage
          page={page}
          totalPage={data.meta.totalPages}
          setPage={setPage}
        />
      </>
    );
  }
}

export default MainContent;
