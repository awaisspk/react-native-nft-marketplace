import React from "react";
import { FlatList, Image, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CircleButton,
  DetailsBid,
  DetailsDesc,
  FocusedStatusBar,
  RectButton,
} from "../components";
import { SubInfo } from "../components/SubInfo";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

const DetailsNavigation = ({ data, navigation }: any) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <CircleButton
        imgUrl={assets.left}
        position="absolute"
        top={StatusBar.currentHeight!}
        left={10}
        handlePress={() => navigation.goBack()}
      />
    </View>
  );
};

const Details = ({ route, navigation }: any) => {
  const { data } = route.params;
  console.log("---------------------------------------------------------");
  console.log(data);
  console.log("---------------------------------------------------------");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
          handlePress={() => {}}
        />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsNavigation data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color : COLORS.primary
                  }}
                >
                  Current bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
