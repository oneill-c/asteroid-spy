import { FC } from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

import DatePicker, { DateTimePickerEvent } from "./DatePicker";
import RecordButton from "./LiveButton";

interface ActionBarProps {
  selectedDate: Date;
  handleDateSelection: (event: DateTimePickerEvent, date?: Date) => void;
}

const ActionBar: FC<ActionBarProps> = ({
  selectedDate,
  handleDateSelection,
}) => {
  return (
    <SafeAreaView style={styles.actionBar}>
      <DatePicker selectedDate={selectedDate} onChange={handleDateSelection} />
      <RecordButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  actionBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#D0D0D0",
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginTop: 10,
  },

  label: {
    marginLeft: 10,
    marginBottom: 5,
  },
  liveButton: {
    backgroundColor: "#000",
    color: "#fff",
    paddingVertical: 9,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  liveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ActionBar;
