import React from "react";
import { Box, Center, Heading, Text } from "native-base";

export const PatientsData = ({ reading }) => {
  let tempValue = [37, 36, 35.5, 37.9, 38];
  return (
    <Box>
      <Heading>Temperature</Heading>
      {tempValue.map((t) => (
        <Text>
          {reading}:{t}
        </Text>
      ))}
    </Box>
  );
};
