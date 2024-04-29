import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";

import NasaClient from "./utils/NasaAPIClient";
import { NearEarthObject } from "./utils/NasaAPIClient/types";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import Header from "./components/Header";
import NeoList from "./components/NeoList";
import ActionBar from "./components/ActionBar";

const App = () => {
  const [elementCount, setElementCount] = useState(0);
  const [neos, setNeos] = useState<NearEarthObject[]>();
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (selectedDate) {
      updateNEOQuery(selectedDate);
    }
  }, [selectedDate]);

  const formatDate = (date: Date) => {
    const isoString = date.toISOString();
    return isoString.slice(0, 10);
  };

  const updateNEOQuery = async (date: Date) => {
    const formattedDate = formatDate(date);
    const neoResp = await NasaClient.ListNEOs(formattedDate, formattedDate);
    setElementCount(neoResp.data.elementCount);
    const camelDate = formattedDate.replace(/-/g, "");
    setNeos(neoResp.data.nearEarthObjects[camelDate]);
  };

  const handleDateSelection = (_: DateTimePickerEvent, date?: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ActionBar
        selectedDate={selectedDate}
        handleDateSelection={handleDateSelection}
      />

      <View style={styles.content}>
        {neos && <NeoList data={neos} count={elementCount} />}
      </View>
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
  content: {
    display: "flex",
    flex: 0.8,
    marginTop: 20,
  },
});

export default App;
