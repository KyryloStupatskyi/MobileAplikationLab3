import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Button, Input } from "@rneui/themed"
import { login, register } from "../http/userApi";
import { useContext } from "react";
import { Context } from "../../App";

const Auth = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { isAuth } = useContext(Context)

  const loginFoo = async () => {
    let isLogin = await login(username, password)

    if (isLogin) {
      navigation.navigate("Drawer")
    } else {
      alert('Email or password are incorrect')
    }
  }

  const registerFoo = async () => {
    if (!username || !password) {
      return alert("Email and password cant be free")
    }
    register(username, password)
    navigation.navigate("Drawer")
  }



  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15, height: '100%' }}>
        <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5 }} placeholder="Enter your username or email..." onChangeText={text => setUsername(text)} />
        <Input containerStyle={{ borderWidth: 1, borderColor: "gray", borderRadius: 20, paddingTop: 5, marginTop: 20 }} placeholder="Enter password..." onChangeText={text => setPassword(text)} />

        <View style={{ position: 'absolute', bottom: 30, width: "90%" }}>
          <Button title={"Register"} buttonStyle={{ backgroundColor: 'rgba(111, 202, 186, 1)', borderRadius: 15, padding: 10, marginBottom: 20 }} onPress={registerFoo} />
          <Button title={"Login"} buttonStyle={{ backgroundColor: 'rgba(111, 202, 186, 1)', borderRadius: 15, padding: 10 }} onPress={loginFoo} />
        </View>
      </View>
    </SafeAreaProvider >
  )
}
export default Auth