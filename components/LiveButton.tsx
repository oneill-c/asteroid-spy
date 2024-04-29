import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const LiveButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.liveButton}>
        <View style={styles.iconContainer}>
          {visible && (
            <Icon name="fiber-manual-record" size={15} color="#FF0000" />
          )}
        </View>
        <Text style={styles.liveButtonText}>See Live</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
