import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProjectsSection from "./ProjectsSection";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to

  return (
    <VStack
      // borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      textColor="black"
      bg="white"
      align="start"
    >
      <Image src={imageSrc} alt={title} objectFit="cover" />

      <VStack spacing={2} align="start" padding="10px">
        <Heading>{title}</Heading>

        <Text>{description}</Text>
      </VStack>

      <HStack mt={4} spacing={2} padding="10px">
        {/* <p>See more</p>
        <FontAwesomeIcon icon={faArrowRight} size="1x" /> */}
      </HStack>
    </VStack>
  );
};

export default Card;
