import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

// TODO: Create a theme and store icon color as primary

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon name="meteor" size={50} color="#ABEBCB" />
      <Text style={styles.title}>Asteroid Spy</Text>
      <Icon name="bars" size={50} color="#ABEBCB" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    flex: 0.125,
    marginTop: 25,
  },
  title: {
    fontWeight: "900",
    fontSize: 30,
    color: "#5AA37E",
    marginLeft: 10,
  },
});

export default Header;
