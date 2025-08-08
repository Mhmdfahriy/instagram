<<<<<<< HEAD
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

const Page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    if (username && password) {
      router.push('/home');
    } else {
      Alert.alert('Login gagal', 'Silakan isi semua kolom');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/1053/1053244.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Login to Your Account</Text>

      <TextInput
        placeholder="Username or Email"
        placeholderTextColor="#999"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Belum punya akun? <Text style={styles.link}>Daftar</Text>
      </Text>
=======
import { useLogin } from "@/hooks/useUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";

const Page = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { mutate: login, isPending } = useLogin();

  const handleUserLoggedIn = async () => {
    const userToken = await AsyncStorage.getItem("token");
    if (userToken) {
      router.replace("/home");
    }
  };

  const handleLogin = () => {
    try {
      console.log(email, password);
      login({
        email: email,
        password: password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleUserLoggedIn();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
      <Text>email</Text>
      <TextInput
        onChangeText={(text) => setemail(text)}
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 200,
          marginBottom: 10,
        }}
      />
      <Text>Password</Text>
      <TextInput
        onChangeText={(text) => setpassword(text)}
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 200,
          marginBottom: 10,
        }}
      />
      {isPending ? (
        <ActivityIndicator />
      ) : (
        <Button onPress={handleLogin} title="login" />
      )}
      <Button
        onPress={() => router.push("/auth/register")}
        title="go to register"
      />
>>>>>>> a1e319f (update)
    </View>
  );
};

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 20,
    tintColor: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
    color: '#222',
  },
  input: {
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 14,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#007bff',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  loginText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  footerText: {
    marginTop: 20,
    color: '#666',
    fontSize: 14,
  },
  link: {
    color: '#007bff',
    fontWeight: '500',
  },
});

export default Page;
=======
export default Page;
>>>>>>> a1e319f (update)
