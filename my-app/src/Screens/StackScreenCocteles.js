import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CoctelesScreen() {
  const [cocktailsData, setCocktailsData] = useState([]);
  const navigation = useNavigation();

  const urlBase = 'https://thecocktaildb.com/api/json/v1/1/';

  useEffect(() => {
    fetchCocktailsData();
  }, []);

  const fetchCocktailsData = () => {
    const cocktails = ['Blue Margarita', 'Moscow Mule', 'London Town', 'Barracuda', 'B-53', 'Avalanche'];
    Promise.all(
      cocktails.map((cocktail) =>
        fetch(`${urlBase}search.php?s=${cocktail}`)
          .then((response) => response.json())
          .then((data) => data.drinks[0])
      )
    )
      .then((drinks) => {
        setCocktailsData(drinks);
      })
      .catch((error) => console.log(error));
  };

  const handleViewDetails = (drink) => {
    navigation.navigate('CoctelDetail', { drink });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {cocktailsData.map((drink) => (
          <View key={drink.idDrink} style={styles.cocktailContainer}>
            <Image source={{ uri: drink.strDrinkThumb }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.cocktailName}>{drink.strDrink}</Text>
              <TouchableOpacity style={styles.viewButton} onPress={() => handleViewDetails(drink)}>
                <Text style={styles.buttonText}>Ver</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  scrollContainer: {
    width: '100%',
  },
  cocktailContainer: {
    flexDirection: 'row',
    backgroundColor: '#008080',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cocktailName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  viewButton: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
