import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Platform,
  Alert,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import { Input } from "../components/input";
import { PassInput } from "../components/passinput";
import { Boton } from "../components/boton";
import { primaryColor } from "../config/colors";

const Login = ({ navigation }) => {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    // datos cargados simulados que no vienen del back
    const data = [
      { id: "1", name: "Usuario 1", dni: "1212", password: "123" },
      { id: "2", name: "Usuario 2", dni: "1111", password: "321" },
    ];
    setSampleData(data);
  }, []);

  const handleValidar = () => {
    try {
      if (!dni || !password) {
        Alert.alert(
          "Campos requeridos",
          "Por favor completa todos los campos."
        );
        return;
      }

      console.log(`Enviando credenciales: DNI: ${dni}, Password: ${password}`);

      // Simulación de una respuesta exitosa
      const user = sampleData.find(
        (user) => user.dni === dni && user.password === password
      );

      if (user) {
        Alert.alert("Inicio de sesión exitoso");
        navigation.navigate("tabs");
      } else {
        throw new Error("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      Alert.alert(
        "Error",
        error.message ||
          "Hubo un problema al intentar iniciar sesión. Por favor intenta nuevamente."
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/fondo.jpg")}
        resizeMode="cover"
        style={{ flex: 1, backgroundColor: "gray" }}
      >
        <View style={styles.logo}>
          <Image
            style={styles.image}
            source={require("../../assets/logo.jpg")}
          />
          <Text style={styles.title}>.....</Text>
        </View>
        <View
          style={{
            paddingTop: Platform.OS === "android" ? 30 : 0,
            backgroundColor: "#ffedf0",
            flex: 1,
          }}
        >
          <Input label="Ingrese su DNI" value={dni} onChangeText={setDni} />
          <PassInput
            label="Contraseña"
            value={password}
            onChange={(text) => setPassword(text)}
            type="default"
          />
          <Boton title="Ingresar" onPress={handleValidar} />
          <Boton
            title="Crear cuenta"
            mode="outlined"
            onPress={() => navigation.navigate("Signup")}
          />
          <FlatList
            data={sampleData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>DNI: {item.dni}</Text>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: primaryColor,
  },
  title: {
    fontSize: 90,
    color: "white",
    textAlign: "center",
  },
  inputs: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  olvide: {
    alignItems: "center",
    marginTop: 20,
  },
  item: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
});
