import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SocialButton from "../components/SocialButtons";
import { auth } from "../auth/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignupScreen = (props) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordMatch, setPasswordMatch] = React.useState(true);

  const validateInput = (text) => {
    if (text === password) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  const signUp = async () => {
    setEmail("");
    setPassword("");

    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("User created Successfully");
        navigation.navigate("Login");
      })
      .catch((error) => {
        alert(`${error.code} error creating user ${error.message}`);
      });
  };

  const navigation = useNavigation();
  const disabled = !(passwordMatch && email);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/covid19Icon.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>Declan's Covid 19 Tracker</Text>
      <FormInput
        placeholder={"Email"}
        iconName={"user"}
        onChangeText={(text) => {
          setEmail(text);
        }}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        input="email"
      />
      <FormInput
        placeholder={"Password"}
        iconName={"lock"}
        onChangeText={(text) => {
          setPassword(text);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />

      <FormInput
        placeholder={"Confirm Password"}
        iconName={"lock"}
        onChangeText={(text) => {
          validateInput(text);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        borderColor={passwordMatch ? "#ccc" : "#de4d41"}
      />
      {!passwordMatch && (
        <Text style={{ color: "#de4d41" }}>Passwords do not match!!</Text>
      )}
      <FormButton
        buttonTitle={"Sign Up"}
        backgroundColor={disabled ? "#cccccc" : "#493d8a"}
        onPress={signUp}
        disabled={disabled}
      />
      <SocialButton
        buttonTitle="Sign up with Facebook"
        buttonType="facebook"
        color="#4867aa"
        backgroundColor={"#e6eaf4"}
        onPress={() => alert("Facebook Signup")}
      />
      <SocialButton
        buttonTitle="Sign up with Google"
        buttonType="google"
        color="#de4d41"
        backgroundColor={"#f5e7ea"}
        onPress={() => alert("Google Signup")}
      />
      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.navButtonText}>
          Do you have an account? Login here!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9fafd",
    padding: 20,
  },
  logo: {
    top: -20,
    left: -120,
    height: 100,
    width: 100,
    resizeMode: "cover",
  },
  text: {
    top: -15,
    left: 1,
    fontFamily: "Kufum-SemiBoldItalic",
    fontSize: 28,
    marginBottom: 20,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "Lato-Regular",
  },
  forgotButton: {},
  navButtonText: {
    color: "#493d8a",
  },
});
export default SignupScreen;
