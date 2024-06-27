import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { addMateria } from "../config/urlapis";

const CrearMateria = () => {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");

  const handleCrearMateria = async () => {
    try {
      if (!nombre || !codigo) {
        Alert.alert(
          "Campos requeridos",
          "Por favor completa todos los campos."
        );
        return;
      }

      const nuevaMateria = { nombre, codigo };
      const response = await fetch(addMateria, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaMateria),
      });

      if (response.ok) {
        Alert.alert("Éxito", "Nueva materia creada correctamente.");
        setNombre("");
        setCodigo("");
      } else {
        throw new Error("Error al crear la materia");
      }
    } catch (error) {
      console.error("Error al crear la materia:", error);
      Alert.alert(
        "Error",
        "Hubo un problema al intentar crear la materia. Por favor intenta nuevamente."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Materia</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la materia"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Código de la materia"
        value={codigo}
        onChangeText={setCodigo}
      />
      <Button title="Guardar Materia" onPress={handleCrearMateria} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default CrearMateria;
