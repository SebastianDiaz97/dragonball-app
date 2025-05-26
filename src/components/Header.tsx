import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%" // se adapta al ancho del padre
      >
        <Image
          src="../src/assets/logo dragon ball.png"
          alt="Logo Dragon Ball"
          w={"400px"} // base, sm, md+
          maxW="100%" // nunca se desborda
          height="auto"
          onClick={() => navigate("/")}
          _hover={{cursor: 'pointer'}}
        />
      </Box>
    </>
  );
}

export default Header;
