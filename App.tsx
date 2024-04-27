import { Button, SafeAreaView, StyleSheet, View } from "react-native";

import NasaClient from "./utils/NasaAPIClient";
import { useState } from "react";
import { NearEarthObject } from "./utils/NasaAPIClient/types";
import NeoList from "./components/NeoList";

const App = () => {
  const [neos, setNeos] = useState<NearEarthObject[]>();
  const date = "2024-04-27";

  const handleFetchNeos = async () => {
    const neoResp = await NasaClient.listNEOs(date, date);
    setNeos(neoResp.data.nearEarthObjects[date]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Fetch NEOs" onPress={handleFetchNeos} />

      {neos && <NeoList data={neos} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
