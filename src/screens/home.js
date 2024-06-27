import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getValueFor } from "../utils/storage";
import { getMaterias } from "../config/urlapis"; // Asumiendo que tienes una función para obtener las materias del backend
import { Card } from "../components/card";
import { useNavigation } from "@react-navigation/native"; // Importa useNavigation desde React Navigation

const Home = () => {
  const navigation = useNavigation(); // Obtiene el objeto de navegación
  const [token, setToken] = useState(null);
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    const loadToken = async () => {
      const tk = await getValueFor("token");
      setToken(tk);
    };

    const fetchMaterias = async () => {
      try {
        const response = await fetch(getMaterias, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Error al obtener las materias");
        }

        const data = await response.json();
        setMaterias(data);
      } catch (error) {
        console.error("Error al obtener las materias:", error);
      }
    };

    loadToken();
    if (token) {
      fetchMaterias();
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Navega hacia atrás al presionar el botón
      >
        <Text style={styles.backText}>Atrás</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Lista de Materias</Text>
      <FlatList
        data={materias}
        renderItem={({ item }) => <Card nombre={item.nombre} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  flatListContent: {
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    right: 10,
    zIndex: 1,
  },
  backText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
});

export default Home;
