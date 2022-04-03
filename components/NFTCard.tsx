import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";
import { SHADOWS, SIZES, assets, COLORS } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { EthPrice, NftTitle, SubInfo } from "./SubInfo";

export type INFTCard = {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: any;
  bids: {
    id: string;
    name: string;
    price: number;
    image: any;
    date: string;
  }[];
};

type Props = {
  data: INFTCard;
};

const NFTCard = ({ data }: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
      </View>
      <CircleButton imgUrl={assets.heart} right={10} top={10} />
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NftTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.large}
          subtitleSize={SIZES.medium}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};
export default NFTCard;
