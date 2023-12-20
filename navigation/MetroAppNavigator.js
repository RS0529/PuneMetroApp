
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { Entypo } from '@expo/vector-icons';

// import HomeScreen from '../screens/HomeScreen';
// import FareEnquiryScreen from '../screens/FareEnquiryScreen';
// import StationListScreen from '../screens/StationListScreen';
// import StationMapScreen from '../screens/StationMapScreen';

// const Tab = createMaterialBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const MetroAppNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="Fare Enquiry"
//         options={{
//             tabBarIcon: ({ color }) => <Entypo name="ticket" size={24} color="black" />,
//         }}
//       >
//         {() => (
//           <Stack.Navigator>
//             <Stack.Screen name="Fare Enquiry" component={FareEnquiryScreen}
//               options={{
//                 title: "Fare Enquiry", // Set the screen title
//                 headerStyle: { backgroundColor: "#ff69b4" }, // Change navigation bar color
//               }} />
//           </Stack.Navigator>
//         )}
//       </Tab.Screen>
//       <Tab.Screen
//         name="Station List"
//         options={{
//           tabBarIcon: ({ color }) =>  <Ionicons name="list" size={24} color="black" />,
//         }}
//       >
//         {() => (
//           <Stack.Navigator>
//             <Stack.Screen name="StationList" component={StationListScreen} />
//           </Stack.Navigator>
//         )}
//       </Tab.Screen>
//       <Tab.Screen
//         name="Station Map"
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="map" size={24} color={color} />,
//         }}
//       >
//         {() => (
//           <Stack.Navigator>
//             <Stack.Screen name="StationMap" component={StationMapScreen} />
//           </Stack.Navigator>
//         )}
//       </Tab.Screen>
//     </Tab.Navigator>
//   );
// };

// export default MetroAppNavigator;



import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import FareEnquiryScreen from '../screens/FareEnquiryScreen';
import StationListScreen from '../screens/StationListScreen';
import StationMapScreen from '../screens/StationMapScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MetroAppNavigator = () => {
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
        name="Fare Enquiry"
        options={{
          tabBarIcon: ({ color }) => <Entypo name="ticket" size={24} color={color} />,
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="FareEnquiry"
              component={FareEnquiryScreen}
              options={{
                title: "Fare Enquiry",
                headerStyle: { backgroundColor: "#ff69b4" },
              }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Station List"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />,
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="StationList"
              component={StationListScreen}
              options={{
                title: "Station List",
                // Additional styling if needed
              }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Station Map"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="map" size={24} color={color} />,
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="StationMap"
              component={StationMapScreen}
              options={{
                title: "Station Map",
                // Additional styling if needed
              }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default MetroAppNavigator;
