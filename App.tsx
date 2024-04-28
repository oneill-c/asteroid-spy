import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useState } from "react";

import NasaClient from "./utils/NasaAPIClient";
import { NearEarthObject } from "./utils/NasaAPIClient/types";

import Header from "./components/Header";
import NeoList from "./components/NeoList";

const App = () => {
  const [neos, setNeos] = useState<NearEarthObject[]>();
  const dateSnakeCase = "2024-04-27";
  const date = dateSnakeCase.replace(/-/g, "");

  const handleFetchNeos = async () => {
    const neoResp = await NasaClient.ListNEOs(dateSnakeCase, dateSnakeCase);
    setNeos(neoResp.data.nearEarthObjects[date]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <View style={styles.headerContainer}>
          <View style={styles.headerTop}>
            <Text>LOGO</Text>
            <Text>Menu</Text>
          </View>

          {/* This will become a date control */}
          <View style={styles.headerBottom}>
            <TouchableOpacity style={styles.button} onPress={handleFetchNeos}>
              <Text style={styles.buttonText}>Fetch Near-Earth Objects</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Header>
      <View style={styles.content}>{neos && <NeoList data={neos} />}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
  },
  headerTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
  headerBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 60,
    paddingLeft: 10,
  },
  content: {
    display: "flex",
    flex: 0.8,
    alignItems: "center",
    marginTop: 20,
  },
});

export default App;
