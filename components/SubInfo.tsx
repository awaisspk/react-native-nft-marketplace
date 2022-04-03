import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";

type NftTitleProps = {
  title: string;
  subtitle: string;
  titleSize: number;
  subtitleSize: number;
};
export const NftTitle = ({
  title,
  subtitle,
  titleSize,
  subtitleSize,
}: NftTitleProps) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subtitleSize,
          color: COLORS.primary,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }: { price: number }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text>{price}</Text>
    </View>
  );
};

type ImageCmpProps = {
  imgUrl: any;
  index: number;
};

export const ImgCmp = ({ imgUrl, index }: ImageCmpProps) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        {[assets.person02, assets.person03, assets.person04].map(
          (imageUrl, index) => (
            <ImgCmp imgUrl={imageUrl} index={index} key={index} />
          )
        )}
      </View>
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        maxWidth: "50%",
        elevation: 1,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 30min
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
