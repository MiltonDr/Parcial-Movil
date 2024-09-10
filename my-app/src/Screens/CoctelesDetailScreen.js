import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CoctelesDetailScreen({ route }) {
  const { drink } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: drink.strDrinkThumb }} style={styles.image} />
      <Text style={styles.name}>{drink.strDrink}</Text>
      <Text style={styles.ingredient}>Ingrediente 1: {drink.strIngredient1}</Text>
      <Text style={styles.ingredient}>Ingrediente 2: {drink.strIngredient2}</Text>
      <Text style={styles.ingredient}>Ingrediente 3: {drink.strIngredient3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  ingredient: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
});
