import React from "react";
import { Box, Center, Heading, Text, HStack, VStack, theme } from "native-base";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const PatientsData = () => {
  let [temperature, setTemperature] = React.useState(0);
  let [pulse, setPulse] = React.useState(0);
  let [ecg, setEcg] = React.useState(0);
  let [spo2, setSpo2] = React.useState(0);

  React.useEffect(() => {
    const getTemperature = async () => {
      try {
        const temperature = await axios.get(
          "http://192.168.100.211/temperature"
        );
        const pulse = await axios.get("");
        const ecg = await axios.get("");
        const spo2 = await axios.get("");
        setTemperature(temperature["data"]);
        setPulse(pulse["data"]);
        setEcg(ecg["data"]);
        setSpo2(spo2["data"]);
        console.log("the temperature is ", temperature["data"]);
        console.log("the pulse is ", pulse["data"]);
        console.log("the ecg is ", ecg["data"]);
        console.log("the spo2 is ", spo2["data"]);
      } catch {
        (error) => {
          console.log("error ", error);
        };
      }
    };
    getTemperature();
  }, []);

  return (
    <Box mt={4} mx={2}>
      <HStack justifyContent="space-between">
        <VStack>
          <Heading fontSize="sm" color={theme.colors.primary[700]}>
            Temperature
          </Heading>
          <Center>
            <HStack mt={1}>
              <Heading fontSize="xl" color={theme.colors.green[400]}>
                {temperature}
              </Heading>
              <Text fontSize="xs" color={theme.colors.green[400]}>
                0
              </Text>
              <Heading fontSize="xl" color={theme.colors.green[400]}>
                C
              </Heading>
            </HStack>
          </Center>
        </VStack>
        <VStack>
          <Heading fontSize="sm" color={theme.colors.primary[700]}>
            Pulse
          </Heading>
          <Center>
            <HStack mt={1}>
              <Heading fontSize="xl" color={theme.colors.green[400]}>
                {pulse}
              </Heading>
              <Text fontSize="xs" color={theme.colors.green[400]}>
                0
              </Text>
              <Heading fontSize="xl" color={theme.colors.green[400]}>
                C
              </Heading>
            </HStack>
          </Center>
        </VStack>
        <VStack>
          <Heading fontSize="sm" color={theme.colors.primary[700]}>
            ECG
          </Heading>
          <Center>
            <HStack mt={1}>
              <Heading fontSize="xl" color={theme.colors.green[400]}>
                {pulse}
              </Heading>
              <Text fontSize="xs" color={theme.colors.green[400]}>
                0
              </Text>
              <Heading fontSize="xl" color={theme.colors.green[400]}>
                C
              </Heading>
            </HStack>
          </Center>
        </VStack>
        <VStack>
          <Heading fontSize="sm" color={theme.colors.primary[700]}>
            SPO2
          </Heading>
          <Center>
            <HStack mt={1}>
              <Heading fontSize="xl" color={theme.colors.green[400]}>
                {pulse}
              </Heading>
              <Text fontSize="xs" color={theme.colors.green[400]}>
                0
              </Text>
              <Heading fontSize="xl" color={theme.colors.green[400]}>
                C
              </Heading>
            </HStack>
          </Center>
        </VStack>
      </HStack>
    </Box>
  );
};
