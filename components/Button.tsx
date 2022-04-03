import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
} from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

type Props = ViewStyle & {
  imgUrl: ImageSourcePropType;
  handlePress: (event: GestureResponderEvent) => void;
};

const CircleButton = ({ imgUrl, handlePress, ...rest }: Props) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        ...rest,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

type RectButtonProps = ViewStyle & {
  handlePress: (event: GestureResponderEvent) => void;
  fontSize: number;
};

const RectButton = ({ handlePress, fontSize, ...rest }: RectButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small,
        ...SHADOWS.light,
        ...rest,
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          fontSize: fontSize,
          textAlign: "center",
          fontFamily: FONTS.semiBold,
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export { CircleButton, RectButton };
