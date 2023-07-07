import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Link, Stack } from "expo-router";
// import SyncStorage from "sync-storage";

export default function Home() {
  // const [state, setState] = useState(SyncStorage.get("zafar"));
  const [final, setFinal] = useState();

  useEffect(() => {
    setFinal(
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Image
          style={{
            width: 80,
            height: 80,
          }}
          source={require("../../img/Loading.gif")}
        />
      </View>
    );
    setTimeout(() => {
      setFinal(null);
    }, 1900);
  }, []);

  return (
    <View
      style={{
        padding: 10,
      }}
    >
      {final === null ? (
        <ScrollView>
          <TouchableOpacity
            style={{
              width: "100%",
              minHeight: 300,
              marginBottom: 30,
              position: "relative",
            }}
          >
            {/* <Link href="../AllCourse"> */}
              <Stack>
                <Stack.Screen
                  name="index"
                  options={{
                    headerTitle: "Home Screen",
                    headerTitleAlign: "center",
                  }}
                />
              </Stack>
              {/* <Text>QAAAsASAsaSASAsASAsASNews Three</Text>
            </Link> */}
            <View
              style={{
                width: "100%",
              }}
            >
              <View
                style={{
                  width: "35%",
                  padding: 5,
                  position: "absolute",
                  top: 10,
                  left: 10,
                  zIndex: 2,
                  backgroundColor: "#10C8A0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  Dasturlash
                </Text>
              </View>
              <Image
                style={{
                  width: "100%",
                }}
                source={require("../../img/download.png")}
              />
              <Text
                style={{
                  width: "90%",
                  fontSize: 20,
                  flexDirection: "row",
                  justifyContent: "center",
                  margin: 15,
                }}
              >
                Ishlab chiquvchilar uchun AWS: ECS va ko'p mintaqali yuklarni
                muvozanatlash
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 20,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "gray",
                    }}
                  >
                    Kurs hajmi
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                    }}
                  >
                    38 soat
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "gray",
                    }}
                  >
                    Kurs bo’limlari
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                    }}
                  >
                    5 ta bo’lim
                  </Text>
                </View>
                {/* <View
                  style={{
                    backgroundColor: "#536cfd",
                    padding: 5,
                    borderRadius: "50%",
                  }}
                >
                  <AntDesign name="arrowright" size={35} color="white" />
                </View> */}
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: "100%",
                borderStyle: "dashed",
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                }}
              >
                <AntDesign
                  style={{
                    fontSize: 30,
                  }}
                  name="plus"
                />
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  margin: 20,
                }}
              >
                Yangi kurs qo'shish
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <View>{final}</View>
      )}
    </View>
  );
}
