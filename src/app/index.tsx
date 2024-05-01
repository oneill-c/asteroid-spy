import { SafeAreaView, StyleSheet, View, Platform } from "react-native";
import { useState, useEffect } from "react";

import NasaClient from "../utils/NasaAPIClient";
import { NearEarthObject } from "../utils/NasaAPIClient/types";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import Header from "../components/Header";
import NeoList from "../components/NeoList";
import ActionBar from "../components/ActionBar";

const App = () => {
  const [elementCount, setElementCount] = useState(0);
  const [neos, setNeos] = useState<NearEarthObject[]>();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Android workaround - iOS use `setSelectedDate` but we need to keep this separate state for Android
  const [dateField, setDateField] = useState(new Date().toDateString());

  useEffect(() => {
    if (selectedDate) {
      fetchNEOs(selectedDate);
    }
  }, [selectedDate]);

  const formatDate = (date: Date) => {
    const isoString = date.toISOString();
    return isoString.slice(0, 10);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateSelection = ({ type }: DateTimePickerEvent, date?: Date) => {
    if (type === "set") {
      setSelectedDate(date!);
      setDateField(date!.toDateString());

      // workaround for Android
      if (Platform.OS === "android") {
        toggleDatePicker();
      }
    } else {
      toggleDatePicker();
    }
  };

  const fetchNEOs = async (date: Date) => {
    const formattedDate = formatDate(date);
    const neoResp = await NasaClient.ListNEOs(formattedDate, formattedDate);
    setElementCount(neoResp.data.elementCount);
    const camelDate = formattedDate.replace(/-/g, "");
    setNeos(neoResp.data.nearEarthObjects[camelDate]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ActionBar
        selectedDate={selectedDate}
        handleDateSelection={handleDateSelection}
        showDatePicker={showDatePicker}
        toggleDatePicker={toggleDatePicker}
        dateField={dateField}
        setDateField={setDateField}
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
