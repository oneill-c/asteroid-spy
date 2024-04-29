import React from "react";
import { StyleSheet, View } from "react-native";
import {
  default as RNDatePicker,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome5";

interface DatePickerProps {
  selectedDate: Date;
  onChange: (event: DateTimePickerEvent, date?: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange }) => {
  return (
    <View style={styles.datePickerContainer}>
      <RNDatePicker
        value={selectedDate}
        onChange={onChange}
        display="default"
        accentColor="#5AA37E"
      />
      <Icon
        style={styles.calendarIcon}
        name="calendar"
        size={25}
        color="#ABEBCB"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  datePickerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 0,
    paddingRight: 30,
  },
  calendarIcon: {
    marginLeft: 10,
  },
});

export { DateTimePickerEvent };
export default DatePicker;
