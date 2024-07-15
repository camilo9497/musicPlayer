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
import PlayIcon from './icons/playIcon';
import ForwardIcon from './icons/forwardIcon';
import HomeIcon from './icons/homeIcon';
import ProfileIcon from './icons/profileIcon';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#1E90FF" />
      <LatestSongsProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarStyle: {backgroundColor: '#0e1726'},
              tabBarActiveTintColor: colors.white,
              tabBarInactiveTintColor: colors.gray,
              tabBarIcon: ({color}) => {
                console.log('route', route);
                
                if (route.name === 'Inicio') {
                  return <HomeIcon color={color} />;
                } else if (route.name === 'Perfil') {
                  return <ProfileIcon color={color} />;
                }

                return <HomeIcon color={color} />;
              },
            })}>
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
