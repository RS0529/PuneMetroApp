// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import MetroAppNavigator from './navigation/MetroAppNavigator';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MetroAppNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;




// import React from 'react';
// import { NavigationContainer, StackNavigator } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { Entypo } from '@expo/vector-icons';


// const Tab = createMaterialBottomTabNavigator();


// import HomeScreen from './screens/HomeScreen';
// import FareEnquiryScreen from './screens/FareEnquiryScreen';
// import StationListScreen from './screens/StationListScreen';
// import StationMapScreen from './screens/StationMapScreen';




// const MyTabs = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
//         }}>
//         <Tab.Screen
//           component={FareEnquiryScreen}
//           name="Fare Enquiry"
//           options={{
//             tabBarIcon: ({ color }) => <Entypo name="ticket" size={24} color={color} />,
//           }}
//         ></Tab.Screen>
//       </Tab.Screen>
//       <Tab.Screen
//         component={StationListScreen}
//         name="Station List"
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />,
//         }}
//       >
//       </Tab.Screen>
//       <Tab.Screen
//         component={StationMapScreen}
//         name="Station Map"
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="map" size={24} color={color} />,
//         }}
//       ></Tab.Screen>
//     </Tab.Navigator>
//   )
// }


// const MyStack = () => {
//   return (
//     <StackNavigator
//       initialRouteName="MyTabs"
//       screenOptions={{
//         headerShown: false,
//       }}

//     >
//       <Stack.Screen name="MyTabs" component={MyTabs} />
//     </StackNavigator>
//   )
// }


// const App = () => {
//   return(
//     <NavigationContainer>
//       <MyStack/>
//     </NavigationContainer>
//   )
// }

// export default App


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import FareEnquiryScreen from './screens/FareEnquiryScreen';
import StationListScreen from './screens/StationListScreen';
import StationMapScreen from './screens/StationMapScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="FareEnquiry"
        component={FareEnquiryScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="ticket" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="StationList"
        component={StationListScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="StationMap"
        component={StationMapScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="map" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

