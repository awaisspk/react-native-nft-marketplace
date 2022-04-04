import { StatusBar, StatusBarProps, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar = (props: StatusBarProps) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
