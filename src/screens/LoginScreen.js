import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SocialButton from "../components/SocialButtons";
import { auth, db } from "../auth/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
const LoginScreen = (props) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [user, setUser] = React.useState();

  const navigation = useNavigation();

  const signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("Sign in successfull");
        const id = res._tokenResponse.localId;
        const userRef = doc(db, "users", id);
        const docSnap = getDoc(userRef)
          .then((res) => {
            if (res.data()) {
              navigation.navigate("Main");
            } else {
              navigation.navigate("Profile");
            }
          })
          .catch((error) => {
            console.log("error ", error);
          });
      })
      .catch((error) => {
        alert(`${error.code} Sign in Error ${error.message}`);
      });
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/covid19Icon.png")}
        style={styles.logo}
        alt="logo"
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

      <FormButton buttonTitle={"Sign In"} onPress={signIn} />

      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => {
          alert("Go to Forgot password Screen");
        }}
      >
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      <SocialButton
        buttonTitle="Sign In with Facebook"
        buttonType="facebook"
        color="#4867aa"
        backgroundColor={"#e6eaf4"}
        onPress={() => alert("Facebook Signin")}
      />
      <SocialButton
        buttonTitle="Sign In with Google"
        buttonType="google"
        color="#de4d41"
        backgroundColor={"#f5e7ea"}
        onPress={() => alert("Google Signin")}
      />
      <TouchableOpacity
        style={{ marginVertical: 10 }}
        onPress={() => {
          navigation.navigate("Signup");
        }}
      >
        <Text style={styles.navButtonText}>
          Don't have an account? create here!
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
export default LoginScreen;
