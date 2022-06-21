import { useNavigation } from "@react-navigation/native";
import { Box, CheckIcon, Select } from "native-base";
import React, { useReducer } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import DatePicker from "react-native-datepicker";
import { auth, db } from "../auth/Firebase";
import { doc, setDoc, Timestamp } from "firebase/firestore";

const UpdateProfileScreen = (props) => {
  const navigation = useNavigation();
  const [fullname, setFullname] = React.useState();
  const [gender, setGender] = React.useState();
  const [date, setDate] = React.useState(new Date());
  const [dob, setDob] = React.useState();
  const [blood, setBlood] = React.useState();
  const [datePicker, setDatePicker] = React.useState(false);
  const [weight, setWeight] = React.useState();
  const [height, setHeight] = React.useState();
  const [userType, setUserType] = React.useState();

  const email = auth.currentUser.email;
  const id = auth.currentUser.uid;

  const formFilled =
    fullname && gender && dob && blood && weight && height && userType;

  const userDoc = doc(db, "users", id);

  const updateUser = async () => {
    const user = {
      email: email,
      id: id,
      fullname: fullname,
      gender: gender,
      dob: dob,
      weight: weight,
      height: height,
      blood: blood,
      userType: userType,
      created: Timestamp.now(),
    };

    await setDoc(userDoc, user)
      .then((res) => {
        alert("successfully updated doc");
        navigation.navigate("Main");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Image
          source={require("../../assets/covid19Icon.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Update Your Profile</Text>
      </View>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <FormInput
          placeholder={"Full name"}
          onChangeText={(text) => {
            setFullname(text);
          }}
          autoCorrect={false}
          customHeight={40}
        />

        <Box w="100%" h={10} mb={2}>
          <Select
            selectedValue={gender}
            minW="200"
            borderColor={"#ccc"}
            borderRadius={"lg"}
            color="black"
            fontSize={14}
            backgroundColor={"white"}
            accessibilityLabel="Gender"
            placeholder="Gender"
            placeholderTextColor="#ccc"
            _selectedItem={{
              bg: "violet.900",
              borderRadius: 15,
              endIcon: <CheckIcon size="5" />,
            }}
            h={10}
            onValueChange={(itemValue) => setGender(itemValue.charAt(0))}
          >
            <Select.Item label="Male" value="M" />
            <Select.Item label="Female" value="F" />
            <Select.Item label="Other" value="O" />
          </Select>
        </Box>

        <Box w="100%" h={10} mb={2}>
          <Select
            selectedValue={blood}
            minW="200"
            borderColor={"#ccc"}
            borderRadius={"lg"}
            color="black"
            fontSize={14}
            backgroundColor={"white"}
            accessibilityLabel="Blood"
            placeholder="Blood"
            placeholderTextColor="#ccc"
            _selectedItem={{
              bg: "violet.900",
              borderRadius: 15,
              endIcon: <CheckIcon size="5" />,
            }}
            h={10}
            onValueChange={(itemValue) => setBlood(itemValue)}
          >
            <Select.Item label="A" value="A" />
            <Select.Item label="O" value="O" />
            <Select.Item label="B" value="B" />
            <Select.Item label="AB" value="AB" />
            <Select.Item label="Other" value="Other" />
          </Select>
        </Box>
        <Box w="100%" h={10} mb={2}>
          <Select
            selectedValue={userType}
            minW="200"
            borderColor={"#ccc"}
            borderRadius={"lg"}
            color="black"
            fontSize={14}
            backgroundColor={"white"}
            accessibilityLabel="User"
            placeholder="User"
            placeholderTextColor="#ccc"
            _selectedItem={{
              bg: "violet.900",
              borderRadius: 15,
              endIcon: <CheckIcon size="5" />,
            }}
            h={10}
            onValueChange={(itemValue) => setUserType(itemValue)}
          >
            <Select.Item label="Patient" value="Patient" />
            <Select.Item label="Doctor" value="Doctor" />
            <Select.Item label="Carer" value="Carer" />
          </Select>
        </Box>
        <FormInput
          placeholder={"Weight"}
          onChangeText={(text) => {
            setWeight(text);
          }}
          customHeight={40}
          keyboardType="numeric"
          unit="kg"
        />
        <FormInput
          placeholder={"Height"}
          onChangeText={(text) => {
            setHeight(text);
          }}
          customHeight={40}
          unit="cm"
          keyboardType="decimal-pad"
        />
        <Box w="100%" mx={4} py={1} borderColor="#ccc" mb={2}>
          {Platform.OS === "ios" ? (
            <DatePicker
              date={dob ? dob : null}
              mode="date"
              placeholder="Date of Birth"
              placeholderTextColor="black"
              format="DD/MM/YYYY"
              style={{
                width: "100%",
                height: 40,
                justifyContent: "center",
                color: "blue",
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 10,
              }}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  right: -6,
                  top: 4,
                  marginLeft: 0,
                  borderWidth: 0,
                },
                dateInput: {
                  height: 100,
                  top: 1,
                  borderRadius: 10,
                  borderWidth: 0,
                  alignItems: "flex-start",
                  alignContent: "flex-start",
                  padding: 10,
                },
                dateText: {
                  color: "black",
                },
              }}
              onDateChange={(date) => {
                // setDateObj(date);
                setDob(date);
              }}
            />
          ) : (
            <FormInput
              placeholder={"Date of Birth (DD/MM/YYYY)"}
              onChangeText={(text) => {
                setDob(Text);
              }}
              autoCorrect={false}
              customHeight={40}
            />
          )}
        </Box>

        {/* <DateTimePickerAndroid date={dob ? dob : null} /> */}

        <FormButton
          buttonTitle={"Update"}
          backgroundColor={!formFilled ? "#cccccc" : "#493d8a"}
          onPress={updateUser}
          disabled={!formFilled}
        />
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f9fafd",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafd",
    paddingHorizontal: 10,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: "cover",
  },
  text: {
    fontFamily: "Kufum-SemiBoldItalic",
    fontSize: 28,
    marginBottom: 20,
    color: "#051d5f",
  },
  skipButton: {
    position: "absolute",
    top: 25,
    right: 20,
  },
  skipText: {
    color: "#493d8a",
  },
});
export default UpdateProfileScreen;
