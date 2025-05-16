import { Button, Input, Flex } from "@chakra-ui/react";

function SearchForm() {
  return (
    <>
      <Flex mt={7}>
        <Input />
        <Button>Buscar</Button>
      </Flex>
    </>
  );
}

export default SearchForm;
