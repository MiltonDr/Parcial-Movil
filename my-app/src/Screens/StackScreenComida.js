import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const urlBase = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const foods = ['Beef Asado', 'Lasagne', 'Kedgeree', 'Burek', 'Kafteji', 'Pad See Ew'];

const ComidasScreen = () => {
  const [mealsData, setMealsData] = useState({});
  const navigation = useNavigation();

  const fetchData = (meal) => {
    fetch(`${urlBase}${meal}`)
      .then((response) => response.json())
      .then((data) => {
        setMealsData((prevData) => ({
          ...prevData,
          [meal]: data.meals ? data.meals[0] : null,
        }));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    foods.forEach((meal) => fetchData(meal));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {foods.map((meal) => {
        const mealData = mealsData[meal];
        return mealData ? (
          <View key={mealData.idMeal} style={styles.mealContainer}>
            <Image source={{ uri: mealData.strMealThumb }} style={styles.image} />
            <Text style={styles.mealName}>{mealData.strMeal}</Text>
            <TouchableOpacity
              style={styles.roundedButton}
              onPress={() => navigation.navigate('MealDetail', { meal: mealData })}
            >
              <Text style={styles.buttonText}>Ver</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text key={meal} style={styles.loadingText}>
            Cargando {meal}...
          </Text>
        );
      })}
    </ScrollView>
  );
};

export default ComidasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  mealContainer: {
    flexDirection: 'row',
    backgroundColor: '#20B2AA',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  mealName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  loadingText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  roundedButton: {
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
