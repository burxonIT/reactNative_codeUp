import { Stack } from "expo-router";
import { Image, StyleSheet } from "react-native";

const StackLayout = () => {
    return(
        <Stack>
            {/* <Image source={require("../../img/photo_2023-07-04_13-48-23.jpg")} /> */}
            <Stack.Screen 
            name="index"
            options={{
                headerTitle: "Home Screen",
                headerTitleAlign: "center",
                headerLeft: () => <Image source={require("../../img/Group.png")} style={{ marginLeft: 10 }} />,
            }}
            />
        </Stack>
    )
}



export default StackLayout;