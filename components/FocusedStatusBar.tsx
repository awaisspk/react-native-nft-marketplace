import { StatusBar, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/core";

interface IFocusedStatusBar {
  background: any;
}

const FocusedStatusBar = (props: IFocusedStatusBar) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
