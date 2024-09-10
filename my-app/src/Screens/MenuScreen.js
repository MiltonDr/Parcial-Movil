import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MenuScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>Ir a Cocteles</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CoctelesStack')}>
          <Text style={styles.buttonText}>Cocteles</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <Text style={styles.boxText}>Ir a Comida</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ComidaStack')}>
          <Text style={styles.buttonText}>Comida</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    width: '80%',
    marginVertical: 15,
    padding: 20,
    backgroundColor: '#90ee90',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    alignItems: 'center',
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
