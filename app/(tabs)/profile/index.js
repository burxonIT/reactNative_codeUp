import { View, Text, Image } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const index = () => {
  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <View>
        <Image
          style={{
            width: "100%",
          }}
          source={require("../../img/download.png")}
        />
        <Text
          style={{
            fontSize: 25,
            width: "95%",
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          Raspberry Pi dasturlash asoslari
        </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              // width: "40%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign
              style={{
                fontSize: 25,
              }}
              name="star"
              color="goldenrod"
            />
            <AntDesign
              style={{
                fontSize: 25,
              }}
              name="star"
              color="goldenrod"
            />
            <AntDesign
              style={{
                fontSize: 25,
              }}
              name="star"
              color="goldenrod"
            />
            <AntDesign
              style={{
                fontSize: 25,
              }}
              name="star"
              color="goldenrod"
            />
            <AntDesign
              style={{
                fontSize: 25,
              }}
              name="star"
              color="gray"
            />
          </View>
          <View
            style={{
              backgroundColor: "dodgerblue",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              <Entypo
                style={{
                  fontSize: 20,
                  marginRight: 10,
                }}
                name="share"
              />
              Yuborish
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            width: 150,
            backgroundColor: "dodgerblue",
            padding: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
            }}
          >
            Dasturlash
          </Text>
        </View>

        <View
          style={{
            width: "100%",
          }}
        >
          <View>
            <Text>Kurs narxi</Text>
            <Text>250.000 UZS</Text>
          </View>
          <View>
            <Text>Kurs hajmi</Text>
            <Text>38 soat</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;
