import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, Box, ScrollView, Heading, Text } from "native-base";
import InfoFlatList from "../components/InfoFlatList";
import { HomeBox } from "../components/HomeBox";
import { auth, db } from "../auth/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen(props) {
  const [userInfo, setUserInfo] = React.useState();
  const id = auth.currentUser.uid;
  const userRef = doc(db, "users", id);

  const navigation = useNavigation();

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

  const logOut = async () => {
    signOut(auth)
      .then(() => {
        alert("Successfully Signed Out!");
        navigation.navigate("WalkThrough");
      })
      .catch((error) => {
        console.log("error logging out: ", error);
      });
  };

  return (
    <ScrollView bgColor="gray.100" marginTop={2}>
      <Heading ml={2} p={2}>
        Hi! {userInfo?.fullname},
      </Heading>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 25,
          right: 20,
        }}
        onPress={logOut}
      >
        <Text
          style={{
            color: "#493d8a",
          }}
        >
          Sign Out
        </Text>
      </TouchableOpacity>
      <Text ml={2} p={2}>
        How about your day?
      </Text>
      <Box bgColor="white">
        <Box my={2}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <InfoFlatList
              image={require("../../assets/slide1.png")}
              title="Cutting prescription"
              title1="doctor's cost"
            />
            <InfoFlatList
              bgColor="orange.400"
              image={require("../../assets/slide1.png")}
              title="Covid causes"
              title1="and prevention"
            />
            <InfoFlatList
              bgColor="blue.400"
              image={require("../../assets/slide1.png")}
              title="General ways on "
              title1="how to avoid them"
            />
          </ScrollView>
        </Box>
      </Box>
      <Box mt={3}>
        <HomeBox />
      </Box>
    </ScrollView>
  );
}
// export default HomeScreen;
