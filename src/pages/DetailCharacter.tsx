import { useParams } from "react-router-dom";
import { useOneCharacter } from "../hooks/useHttpData";
import { InfoCharacter } from "../types";
import Carousel from "../components/Carousel";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function DetailCharacter() {
  const params = useParams();
  const { data } = useOneCharacter<InfoCharacter>(Number(params.id));
  console.log(data);
  if (data) {
    return (
      <>
        <Heading textAlign={"center"} my={7}>
          {data?.name}
        </Heading>
        <Carousel
          images={data.transformations}
          firsImage={data.image}
          firstName={data.name}
          firstKi={data.ki}
        />
        <Text fontWeight="bold" mb="1rem" mt={7} fontSize={"xl"}>
          {data.description}
        </Text>

        <Box mt={7}>
          <Heading>Planeta</Heading>
          <Flex
            mt={4}
            gap={6}
            flexDirection={{ base: "column", md: "row" }}
            // flexDir={"column"}
            alignItems={"center"}
          >
            <Image
              src={data.originPlanet.image}
              maxW={"300px"}
              objectFit="contain"
            />
            <Box>
              <Text fontWeight="bold" fontSize={"xl"}>
                {data.originPlanet.description}
              </Text>
              <Text
                fontWeight="bold"
                fontSize={"xl"}
                mt={4}
              >{`Planeta destruido: ${
                data.originPlanet.isDestroyed ? " Si" : "No"
              }`}</Text>
            </Box>
          </Flex>
        </Box>
      </>
    );
  }
}

export default DetailCharacter;
