import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ nombre, detalles, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.text}>{nombre}</Text>
      {detalles && <Text style={styles.details}>{detalles}</Text>}
      {/* Agregar más información de la materia aquí si es necesario */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});

export default Card;
