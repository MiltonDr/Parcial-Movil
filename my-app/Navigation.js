import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoctelesDetailScreen from './src/Screens/CoctelesDetailScreen';
import HomeScreen from './src/Screens/HomeScreen';
import MealDetailScreen from './src/Screens/MealDetailScreen';
import MenuScreen from './src/Screens/MenuScreen';
import CoctelesScreen from './src/Screens/StackScreenCocteles';
import ComidaScreen from './src/Screens/StackScreenComida';

const TabNav = createBottomTabNavigator();
const StackNav = createNativeStackNavigator();

function CoctelesStackScreen() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name='Cocteles'
        component={CoctelesScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Cocteles',
        }}
      />
      <StackNav.Screen name='CoctelDetail' component={CoctelesDetailScreen} />
    </StackNav.Navigator>
  );
}

function ComidaStackScreen() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name='Comida'
        component={ComidaScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Comida',
        }}
      />
      <StackNav.Screen name='MealDetail' component={MealDetailScreen} />
    </StackNav.Navigator>
  );
}

function Tabs() {
  return (
    <TabNav.Navigator
      initialRouteName='Inicio'
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: '#f5f5f5',
          paddingBottom: 5,
        },
      }}
    >
      <TabNav.Screen
        name='Inicio'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => <Fontisto name='star' size={24} color='black' />,
        }}
      />
      <TabNav.Screen
        name='Menu'
        component={MenuScreen}
        options={{
          tabBarLabel: 'Menu',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => <MaterialIcons name='restaurant-menu' size={24} color='black' />,
        }}
      />
    </TabNav.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
        <StackNav.Screen name='CoctelesStack' component={CoctelesStackScreen} options={{ headerShown: false }} />
        <StackNav.Screen name='ComidaStack' component={ComidaStackScreen} options={{ headerShown: false }} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}
