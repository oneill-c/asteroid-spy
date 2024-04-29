import { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";

const LiveButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const openLiveView = () => {
    router.push("LiveView");
  };

  return (
    <TouchableOpacity style={styles.liveButton} onPress={openLiveView}>
      <View style={styles.iconContainer}>
        {visible && (
          <Icon name="fiber-manual-record" size={15} color="#FF0000" />
        )}
      </View>
      <Text style={styles.liveButtonText}>See Live</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  liveButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#5AA37E",
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  iconContainer: {
    width: 20,
    alignItems: "center",
  },
  liveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LiveButton;
