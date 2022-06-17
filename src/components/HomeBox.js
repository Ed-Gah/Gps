import React from "react";
import { Box, Heading, Text, HStack, Image, Link } from "native-base";
// import { Icon } from "react-native-vector-icons/Icon";

export const HomeBox = (props) => {
  return (
    <>
      <Box>
        <HStack space={2} mr={6}>
          <Link w="46%" ml={2}>
            <Box bgColor="white" w="100%" ml={2} rounded={16}>
              <Image
                source={require("../../assets/covid19Icon.png")}
                size={12}
                ml={4}
                mt={4}
                alt="Doc"
              />
              <Box ml={2} p={3}>
                <Heading>Find a Doctor</Heading>
                <Text color="gray.700">128 doctors</Text>
              </Box>
            </Box>
          </Link>
          <Link w="46%" ml={4}>
            <Box bgColor="white" w="100%" mr={4} rounded={16}>
              <Image
                source={require("../../assets/covid19Icon.png")}
                size={12}
                ml={4}
                mt={4}
                alt="Hospital"
              />
              <Box ml={2} p={3}>
                <Heading>Find a Hospital</Heading>
                <Text color="gray.700">57 hospitals</Text>
              </Box>
            </Box>
          </Link>
        </HStack>
        <HStack space={2} mr={6} my={4}>
          <Link w="46%" ml={2}>
            <Box bgColor="white" w="100%" ml={2} rounded={16}>
              <Image
                source={require("../../assets/covid19Icon.png")}
                size={12}
                ml={4}
                mt={4}
                alt="covid"
              />

              <Box ml={2} p={3}>
                <Heading>Appointment</Heading>
                <Text color="gray.700">04 doctors</Text>
              </Box>
            </Box>
          </Link>
          <Link w="46%" ml={4}>
            <Box bgColor="white" w="100%" mr={4} rounded={16}>
              <Image
                source={require("../../assets/covid19Icon.png")}
                size={12}
                ml={4}
                mt={4}
                alt="Appoint"
              />

              <Box ml={2} p={3}>
                <Heading>Price Plans</Heading>
                <Text color="gray.700">02 plans</Text>
              </Box>
            </Box>
          </Link>
        </HStack>
      </Box>
    </>
  );
};
