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
          Основы программирования на Raspberry Pi
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
                color: "white",
              }}
            >
              <Entypo
                style={{
                  fontSize: 20,
                  marginRight: 10,
                  color: "white",
                }}
                name="share"
              />
              Отправка
            </Text>
          </View>
        </View>
      </View>
      <View>
        {/* <View
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
        </View> */}

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "gray",
              }}
            >
              Стоимость курса
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "black",
              }}
            >
              250.000 uzs
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "gray",
              }}
            >
              Размер поля
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "black",
              }}
            >
              38 час
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
              }}
              source={require("../../img/Ellipse.png")}
            />
            <Text
              style={{
                fontSize: 17,
              }}
            >
              Halilov abdurahim
            </Text>
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
                fontSize: 15,
                color: "white",
              }}
            >
              Подписаться
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;
