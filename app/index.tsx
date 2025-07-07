import { FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import "./globals.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { offers, images } from "@/constants";
import { Fragment } from "react";
import cn from "clsx"
export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>

        <FlatList
          data={offers}
          renderItem={({ item, index }) => {
            const isEven: boolean = index % 2 === 0;
            return (
              <Pressable className={cn("offer-card", isEven ? "flex-row-reverse" : "flex-row")}
                style={{ backgroundColor: item.color }}
                android_ripple={{ color: "#fffff22" }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className={"h-full w-1/2"}>
                      <Image source={item.image} className={"size-full"} resizeMode={"contain"} />
                    </View>
                    <View className={cn("offer-card_info", isEven ? "pl-10" : "pr-10")}>
                      <Text className="h1-bold text-white leading-tight">
                        {item.title}
                      </Text>
                      <Image className="size-10"
                        resizeMode="contain"
                        tintColor="#ffffff"
                        source={images.arrowRight} />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            )
          }}
          contentContainerClassName="pb-20 px-5"
          ListHeaderComponent={() => (
            <View className="flex-between flex-row w-full my-5 px-5">
              <View className="flex-start">
                <Text className="small-bold text-primary"> Deliver To </Text>
                <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
                  <Text className="paragraph-bold">Jaipur,Rajasthan</Text>
                  <Image source={images.arrowDown}
                    className="size-3"
                    resizeMode="contain" />
                </TouchableOpacity>
              </View>

              <Text>Cart</Text>
            </View> 
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}