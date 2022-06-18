import React from "react";
import { Box, Heading, Text, HStack, Image, Link, theme } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// import { Icon } from "react-native-vector-icons/Icon";

export const HomeBox = (props) => {
  return (
    <>
      <Box>
        <HStack space={2} mr={6}>
          <Link w="46%" ml={2}>
            <Box bgColor="white" w="100%" ml={2} rounded={16}>
              <Box
                bgColor={theme.colors.gray[100]}
                w="25%"
                justifyContent="center"
                alignItems="center"
                ml={2}
                mt={2}
                p={2}
                rounded={16}
              >
                <MaterialCommunityIcons
                  name="doctor"
                  size={26}
                  color={theme.colors.red[900]}
                />
              </Box>
              <Box ml={2} p={3}>
                <Heading>Find a Doctor</Heading>
                <Text color="gray.700">128 doctors</Text>
              </Box>
            </Box>
          </Link>
          <Link w="46%" ml={4}>
            <Box bgColor="white" w="100%" mr={4} rounded={16}>
              <Box
                bgColor={theme.colors.gray[100]}
                w="30%"
                justifyContent="center"
                alignItems="center"
                ml={2}
                mt={2}
                p={2}
                rounded={8}
              >
                <FontAwesome5
                  name="hospital-alt"
                  size={20}
                  color={theme.colors.orange[400]}
                />
              </Box>
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
              <Box
                bgColor={theme.colors.gray[100]}
                w="30%"
                justifyContent="center"
                alignItems="center"
                ml={2}
                mt={2}
                p={2}
                rounded={16}
              >
                <Entypo
                  name="calendar"
                  size={30}
                  color={theme.colors.primary[700]}
                />
              </Box>
              <Box ml={1} p={3}>
                <Heading>Appointment</Heading>
                <Text color="gray.700">04 doctors</Text>
              </Box>
            </Box>
          </Link>
          <Link w="46%" ml={4}>
            <Box bgColor="white" w="100%" mr={4} rounded={16}>
              <Box
                bgColor={theme.colors.gray[100]}
                w="30%"
                justifyContent="center"
                alignItems="center"
                ml={2}
                mt={2}
                p={2}
                rounded={8}
              >
                <Ionicons
                  name="pricetag"
                  size={24}
                  color={theme.colors.gray[600]}
                />
              </Box>

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
