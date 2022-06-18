import React from "react";
import { useWindowDimensions } from "react-native";
import { Box, HStack, Heading, Text, Image, VStack } from "native-base";

const InfoFlatList = ({ image, title, title1, bgColor }) => {
  const { width } = useWindowDimensions();
  return (
    <Box
      bgColor={bgColor ? bgColor : "green.300"}
      shadow={4}
      rounded={16}
      mx={1}
      my={6}
    >
      <HStack space={3}>
        <Image source={image} size={100} my={2} alt="image" />
        <VStack>
          <Heading color="white" textAlign="center" mt="auto" mr={6}>
            {title}
          </Heading>
          <Heading color="white" textAlign="center" mb="auto" mr={6}>
            {title1}
          </Heading>
        </VStack>
      </HStack>
    </Box>
  );
};

export default InfoFlatList;
