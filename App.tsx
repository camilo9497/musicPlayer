import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import {colors} from './utils/colors';
import {StatusBar} from 'react-native';
import SongDetailScreen from './screens/SongDetailScreen';
import {LatestSongsProvider} from './context/latestSongsContext';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#1E90FF" />
      <LatestSongsProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: {backgroundColor: '#0e1726'},
              tabBarActiveTintColor: colors.white,
              tabBarInactiveTintColor: colors.gray,
            }}>
            <Tab.Screen
              name="Inicio"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Perfil"
              component={ProfileScreen}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="SongDetailScreen"
              component={SongDetailScreen}
              options={{tabBarButton: () => null, headerShown: false}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </LatestSongsProvider>
    </SafeAreaProvider>
  );
}

export default App;
