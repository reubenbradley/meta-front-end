import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      borderRadius="lg"
      boxShadow="md"
    >
      <Box backgroundColor="#f5f5f5" borderRadius="xl" margin={2} padding={0}>
        <Image src={imageSrc} borderRadius="lg" />
        <Heading as="h3" size="md" color="#000" padding={4}>{title}</Heading>
        <Text color="#000" padding={4}>{description}</Text>
        <Text color="#000" padding={4}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </Box>
    </VStack>
  );
};

export default Card;
