import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useOneCharacter } from "../hooks/useHttpData";
import { InfoCharacter } from "../types";
import Carousel from "./Carousel";

type Props = {
  personaje: number;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function InfoModal({ personaje, isOpen, onOpen, onClose }: Props) {
  const { data } = useOneCharacter<InfoCharacter>(personaje);
  console.log(data);

  useEffect(() => {
    if (isOpen) {
      onOpen();
    }
  }, [onOpen, isOpen]);

  if (isOpen && data) {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{data?.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Carousel
                images={data.transformations}
                firsImage={data.image}
                firstName={data.name}
                firstKi={data.ki}
              />
              <Text fontWeight="bold" mb="1rem" mt={4}>
                {data.description}
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
}

export default InfoModal;
