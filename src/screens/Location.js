import React from "react";
import { View } from "react-native";
import { Avatar, Box, ScrollView } from "native-base";
import { useWindowDimensions } from "react-native";
import { HomeBox } from "../components/HomeBox";
import MapView, { MarkerAnimated, AnimatedRegion } from "react-native-maps";
import axios from "axios";

const user = "Patient";
const hostpitals = [
  {
    name: "Mount Mary's Hospital",
    location: {
      latitude: 3.135308,
      longitude: 101.685729,
    },
  },
  {
    name: "Declan's Hospital",
    location: {
      latitude: 3.195843,
      longitude: 102.0544,
    },
  },
  {
    name: "Solidarity Hospital",
    location: {
      latitude: 4.157707,
      longitude: 9.2379898,
    },
  },
];
const patient = {
  name: "Patient's name",
  location: {
    latitude: 3.135308,
    longitude: 101.685729,
  },
};

const Location = (props) => {
  const getTemperature = async () => {
    try {
      const temperature = await axios.get("http://192.168.100.211/temperature");
      console.log("the temperature is ", temperature["data"]);
    } catch {
      (error) => {
        console.log("error ", error);
      };
    }
  };

  getTemperature();

  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        region={{
          latitude: 3.3135662,
          longitude: 102.687128,
          latitudeDelta: 5,
          longitudeDelta: 2,
        }}
        // initialRegion={{
        //   latitude: 3.3135662,
        //   longitude: 102.687128
        // }}
      >
        {user === "Patient" &&
          hostpitals.map((hospital) => {
            console.log("hospital location ", hospital.location);
            return (
              <MarkerAnimated
                key={hospital.name}
                coordinate={hospital.location}
                identifier={hospital.name}
              />
            );
          })}
        {user !== "Patient" && (
          <MarkerAnimated
            coordinate={patient.location}
            identifier={patient.name}
          />
        )}
      </MapView>
    </View>
  );
};
export default Location;
