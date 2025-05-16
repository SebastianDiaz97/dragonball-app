import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { InfoCharacter } from "../types";

type Props = {
  item: InfoCharacter;
  setPersonaje: (id: number) => void;
  onOpen: () => void;
};

function CardInfo({ item, setPersonaje, onOpen }: Props) {
  return (
    <Card w="100%" mt={7} >
      <CardBody>
        <Image
          onClick={() => {
            setPersonaje(item.id);
            onOpen();
          }}
          src={item.image}
          alt={item.name}
          h={"400px"}
          transition="0.5s ease"
          m={"auto"}
          _hover={{
            transform: "scale(1.1)", // agrandar
            cursor: "pointer",
          }}
        />
        <Stack mt="6" spacing="3">
          <Heading size="lg">
            {item.name}
            <Text fontSize={"xl"} color={"yellow.300"}>
              {item.race} - {item.gender}
            </Text>
          </Heading>
          <Heading size="md">
            Base KI{" "}
            <Text fontSize={"lg"} color={"yellow.300"}>
              {item.ki}
            </Text>
          </Heading>
          <Heading size="md">
            Total KI{" "}
            <Text fontSize={"lg"} color={"yellow.300"}>
              {item.maxKi}
            </Text>
          </Heading>
          <Heading size="md">
            Afilliaton{" "}
            <Text fontSize={"lg"} color={"yellow.300"}>
              {item.affiliation}
            </Text>
          </Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          onClick={() => {
            setPersonaje(item.id);
            onOpen();
          }}
          w={"100%"}
          variant="solid"
          colorScheme="blue"
        >
          See more
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardInfo;
