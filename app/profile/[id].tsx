import { View, Text, Image  } from "react-native";
import { Link, Stack, useSearchParams } from "expo-router";
import Course from "../(tabs)/profile/Course";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Index from "../(tabs)/profile";

const DetailsPage = () => {
    const { id } = useSearchParams();
var harif = '<-'
  return (
    <View>
        <Stack.Screen 
          options={{
            headerTitle: "Kurslar",
            headerTitleAlign: "center",
            headerLeft: () => <Link href='/profile'><AntDesign style={{ fontSize: 30, marginLeft: 10 }} name='arrowleft' /></Link>,
        }}
         />
      {/* <Text>My Details for: {id}</Text> */}
      {
        id === 'course' ? (<Course />) : (<Index />)
      }
    </View>
  );

}

export default DetailsPage;