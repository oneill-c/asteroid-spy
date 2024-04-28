import { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";

const Header = ({ children }: PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 0.2,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
});

export default Header;
