import { FlatList, Image, Pressable, Text, View } from "react-native";
import "./globals.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { offers } from "@/constants";
import { Fragment } from "react";

export default function Index() {
  return (
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text className="text-5xl text-center font-bold font-quicksand-semibold text-primary">
    //     Welcome to my React Native App
    //   </Text>
    // </View>
    <SafeAreaView>
      <FlatList 
      data={offers}
      renderItem={({item,index}) => {
        return (
          <Pressable className="offer-card" style={{backgroundColor: item.color}}>
            {({pressed}) =>(
              <Fragment>
                <View className={"h-full w-1/2"}>
                <Image source={item.image} className={"size-full"} resizeMode={"contain"}/>
                </View>
                <View className={"offer-card_info"}>
                  <Text>{item.title}</Text>
                </View>
              </Fragment>
            )}
          </Pressable>
        )
      }}
      />

    </SafeAreaView>
  );
}