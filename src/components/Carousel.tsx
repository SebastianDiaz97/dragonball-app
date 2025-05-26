import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Transformations } from "../types";

type Props = {
  images: Transformations[];
  firsImage: string;
  firstName: string;
  firstKi: string;
};

const MotionImage = motion(Image);

function Carousel({ images, firsImage, firstName, firstKi }: Props) {
  const arrayImages: [{ name: string; img: string; ki: string }] = [
    { name: firstName, img: firsImage, ki: firstKi },
  ];
  images.forEach((i) => {
    arrayImages.push({ name: i.name, img: i.image, ki: i.ki });
  });

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev: number) =>
      prev === 0 ? arrayImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev: number) =>
      prev === arrayImages.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <Box w="full" maxW="500px" mx="auto" position="relative">
      <AnimatePresence mode="wait">
        <MotionImage
          key={current}
          src={arrayImages[current].img}
          alt={`Imagen ${current}`}
          borderRadius="lg"
          objectFit="contain"
          boxSize="300px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          m={"auto"}
        />
      </AnimatePresence>

      {images.length > 0 ? (
        <Flex
          justify="space-between"
          position="absolute"
          top="50%"
          w="full"
          px={4}
        >
          <Button onClick={prevSlide} bg={'transparent'} size="lg">
            ◀
          </Button>
          <Button onClick={nextSlide} bg={'transparent'} size="lg">
            ▶
          </Button>
        </Flex>
      ) : null}

      <Text fontSize={20} textAlign={"center"}>
        {arrayImages[current].name} - {arrayImages[current].ki}
      </Text>
    </Box>
  );
}

export default Carousel;
