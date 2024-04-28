import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";

import NasaClient from "./utils/NasaAPIClient";
import { NearEarthObject } from "./utils/NasaAPIClient/types";

import Header from "./components/Header";
import NeoList from "./components/NeoList";
import DatePicker, { DateTimePickerEvent } from "./components/DatePicker";

const App = () => {
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
    const camelDate = formattedDate.replace(/-/g, "");

    setNeos(neoResp.data.nearEarthObjects[camelDate]);
  };

  const handleDateSelection = (event: DateTimePickerEvent, date?: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <View style={styles.headerContainer}>
          <View style={styles.headerTop}>
            <Text>LOGO</Text>
            <Text>Menu</Text>
          </View>

          <View style={styles.headerBottom}>
            <View style={styles.datepickerField}>
              <Text style={styles.datepickerLabel}>Choose Date</Text>
              <DatePicker
                selectedDate={selectedDate}
                onChange={handleDateSelection}
              />
            </View>
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
  headerBottom: {
    paddingTop: 40,
    paddingLeft: 10,
  },
  datepickerField: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  datepickerLabel: {
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
  content: {
    display: "flex",
    flex: 0.8,
    alignItems: "center",
    marginTop: 20,
  },
});

export default App;
