import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = ({ route }) => {
  const { meal } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <Text style={styles.mealName}>{meal.strMeal}</Text>
      <Text style={styles.ingredient}>Ingrediente 1: {meal.strIngredient1}</Text>
      <Text style={styles.ingredient}>Ingrediente 2: {meal.strIngredient2}</Text>
      <Text style={styles.ingredient}>Ingrediente 3: {meal.strIngredient3}</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  mealName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  ingredient: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
});
