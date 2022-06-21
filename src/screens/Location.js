import React from "react";
import { View } from "react-native";
import { Avatar, Box, ScrollView } from "native-base";
import { useWindowDimensions } from "react-native";
import { HomeBox } from "../components/HomeBox";
import MapView, { MarkerAnimated, AnimatedRegion } from "react-native-maps";
import { auth, db } from "../auth/Firebase";
import { doc, getDoc } from "firebase/firestore";
import axios from "axios";

const hostpitals = [
  {
    name: "General Hospital Buea",
    location: {
      latitude: 4.1460814,
      longitude: 9.2283225,
    },
  },
  {
    name: "District Hospital Buea Annex",
    location: {
      latitude: 4.1486188,
      longitude: 9.2348443,
    },
  },
  {
    name: "Mount Mary's Hospital",
    location: {
      latitude: 4.157707,
      longitude: 9.2379898,
    },
  },
];
const patient = {
  name: "Patient's name",
  location: {
    latitude: 4.157707,
    longitude: 9.2379898,
  },
};

const Location = (props) => {
  const [userInfo, setUserInfo] = React.useState();
  const id = auth.currentUser.uid;
  const userRef = doc(db, "users", id);

  React.useEffect(() => {
    const getUserInfo = async () => {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        console.log("Document data: ", docSnap.data());
        setUserInfo(docSnap.data());
      } else {
        alert("Error Fetching user's information");
      }
    };
    getUserInfo();
  }, []);

  const user = userInfo?.userType;

  console.log("user type ", user);

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
          latitude: 4.155,
          longitude: 9.234,
          latitudeDelta: 0.008,
          longitudeDelta: 0.018,
        }}
      >
        {user === "Patient" &&
          hostpitals.map((hospital) => {
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
