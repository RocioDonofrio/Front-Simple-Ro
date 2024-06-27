import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";

const Home = () => {
  const [materia, setMateria] = useState("");
  const [materias, setMaterias] = useState([]);

  // Función para manejar el guardado de una materia simulada en el front
  const handleGuardarMateria = () => {
    if (!materia.trim()) {
      alert("Por favor ingresa el nombre de la materia.");
      return;
    }

    const nuevaMateria = {
      id: materias.length + 1,
      nombre: materia.trim(),
    };

    setMaterias([...materias, nuevaMateria]);

    setMateria("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Materias</Text>
      <FlatList
        data={materias}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.nombre}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />

      <Text style={styles.title}>Guardar Nueva Materia</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la materia"
        value={materia}
        onChangeText={setMateria}
      />
      <Button title="Guardar" onPress={handleGuardarMateria} />
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  flatListContent: {
    marginTop: 10,
  },
});

export default Home;
