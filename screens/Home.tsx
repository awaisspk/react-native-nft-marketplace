import { View, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { COLORS, NFTData } from "../constants";
import { HomeHeader, NFTCard, FocusedStatusBar } from "../components";
import { useState } from "react";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value: string) => {
    if (value.length === 0) return setNftData(NFTData);
    const filteredData = NFTData.filter(({ name }) => {
      return name.toLowerCase().includes(value.toLowerCase());
    });

    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };

  return (
    <SafeAreaView style={theme.container}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const theme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
