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

function CardInfo() {
  return (
    <Card maxW="lg" mt={7} >
      <CardBody>
        <Image
          src="https://dragonball-api.com/characters/goku_normal.webp"
          alt="Green double couch with wooden legs"
          h={"400px"}
          transition="0.5s ease"
          _hover={{
            transform: "scale(1.1)", // agrandar
            cursor: "pointer",
          }}
        />
        <Stack mt="6" spacing="3">
          <Heading size="lg">
            Goku{" "}
            <Text fontSize={"xl"} color={"yellow.300"}>
              Saiyan - Male
            </Text>
          </Heading>
          <Heading size="md">
            Base KI{" "}
            <Text fontSize={"lg"} color={"yellow.300"}>
              60.000.000
            </Text>
          </Heading>
          <Heading size="md">
            Total KI{" "}
            <Text fontSize={"lg"} color={"yellow.300"}>
              90 Septillion
            </Text>
          </Heading>
          <Heading size="md">
            Afilliaton{" "}
            <Text fontSize={"lg"} color={"yellow.300"}>
              Z Fighter
            </Text>
          </Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button w={"100%"} variant="solid" colorScheme="blue">
          See more
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardInfo;
