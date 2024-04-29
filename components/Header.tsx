import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  // TODO: Create a theme and store icon color as primary
  return (
    <View style={styles.container}>
      <Icon name="rocket-launch" size={50} color="#ABEBCB" />
      <Icon name="menu" size={50} color="#ABEBCB" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    flex: 0.125,
    marginVertical: 5,
  },
});

export default Header;
