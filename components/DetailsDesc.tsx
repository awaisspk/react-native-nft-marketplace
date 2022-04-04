import { useState } from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrice, NftTitle } from "./SubInfo";

export const DetailsDesc = ({ data }: any) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NftTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={20}
          subtitleSize={12}
        />
        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {!readMore ? text : data.description}
            {!readMore && "..."}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={() => setReadMore((state) => !state)}
            >
              {readMore ? " Show Less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};
