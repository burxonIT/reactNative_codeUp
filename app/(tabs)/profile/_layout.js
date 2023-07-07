import { Stack, Tabs, Link } from "expo-router";
import {
  Text,
  ScrollView,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import StackLayout from "../home/_layout";
import settings from "../home/setting";
import Home from "./Home";
import Course from "./Course";
import Setting from "./Setting";
import { useEffect, useState } from "react";
import axios from "axios";
// import SyncStorage from "sync-storage";

// const carouselItem = require("./carusel.json");

// interface CarouselItems {
//   title: string;
//   url: string;
//   promo: string;
// }

export default function Profile() {
  const [state1, setState1] = useState("Jonibek");
  var money = "1 350 000 UZS";

  // const getApi = () => {
  //   axios({
  //     method: "GET",
  //     url: `https://api.baracar.uz/auth/adress/`,
  //   })
  //     .then((res) => setState1(res.data))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   SyncStorage.set("zafar", state1);
  //   // AsyncStorage.setItem("@MySuperStore:key", "I like to save it.");
  // }, []);

  return (
    <ScrollView>
      <View
        style={{
          marginLeft: 10,
          marginTop: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Обычный пользователь</Text>
        <View
          style={{
            width: "26%",
            flexDirection: "row",
            justifyContent: "space-around",
            // alignItems: "flex-end",
          }}
        >
          <View
            style={{
              width: 37,
              height: 35,
              padding: 4,
              borderRadius: "50%",
              fontSize: 35,
              backgroundColor: "wheat",
            }}
          >
            <EvilIcons name="bell" size={30} />
          </View>
          <View
            style={{
              width: 37,
              height: 35,
              padding: 4,
              borderRadius: "50%",
              fontSize: 35,
              backgroundColor: "wheat",
            }}
          >
            <EvilIcons name="bell" size={30} />
          </View>
        </View>
      </View>
      <View
        style={{
          // flex: 1,
          paddingTop: 10,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../../img/Ellipse.png")}
            style={{ width: 150, height: 150 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 40,
            color: "black",
            // marginTop: 10,
            // marginBottom: 10
          }}
        >
          {state1}
        </Text>
      </View>
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>
      <View>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Мои знаки:</Text>
        <View
          style={{
            marginTop: 10,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            // marginBottom: 30,
          }}
        >
          <View
            style={{
              width: 52,
              shadowColor: "#000",
              shadowOffset: { width: 3, height: 3 },
              shadowOpacity: 0.3,
              shadowRadius: 3.84,
              elevation: 5,
              fontSize: 30,
              backgroundColor: "#ff004cb6",
              padding: 10,
              borderRadius: "50%",
            }}
          >
            <FontAwesomeIcon name="rocket" size={30} />
          </View>
          <View
            style={{
              width: 52,
              shadowColor: "#000",
              shadowOffset: { width: 5, height: 5 },
              shadowOpacity: 0.35,
              shadowRadius: 3.84,
              elevation: 5,
              fontSize: 30,
              backgroundColor: "#ffc02eb0",
              padding: 10,
              borderRadius: "50%",
            }}
          >
            <FontAwesome5 name="brain" size={30} />
          </View>
          <View
            style={{
              width: 52,
              shadowColor: "#000",
              shadowOffset: { width: 5, height: 5 },
              shadowOpacity: 0.35,
              shadowRadius: 3.84,
              elevation: 5,
              fontSize: 30,
              backgroundColor: "#536cfd8f",
              padding: 10,
              borderRadius: "50%",
            }}
          >
            <Ionicons name="medal-outline" size={30} />
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Текущий баланс
        </Text>
        <Text
          style={{
            fontSize: 25,
          }}
        >
          {money}
        </Text>
      </View>
      <View
        style={{
          marginTop: 70,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "25%",
            backgroundColor: "#536DFD",
            padding: 7,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Feather name="activity" color="white" size={30} />
        </View>
        <View
          style={{
            width: "65%",
            backgroundColor: "#536DFD",
            padding: 10,
            // height: 50,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>
            Пополнение баланса
          </Text>
        </View>
      </View>
      <Link href="/profile/course">
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              width: "95%",
              marginTop: 30,
              height: 50,
              backgroundColor: "#536DFD",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Мои курсы</Text>
          </View>
        </View>
      </Link>
    </ScrollView>
  );
}

// <Stack>
//     <Stack.Screen name="index" options={{ headerShown: false }} />
// </Stack>
