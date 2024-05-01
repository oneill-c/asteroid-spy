import React from "react";
import { Platform } from "react-native";
import {
  default as RNDatePicker,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

interface DatePickerProps {
  selectedDate: Date;
  onChange: (event: DateTimePickerEvent, date?: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange }) => (
  <RNDatePicker
    value={selectedDate}
    onChange={onChange}
    mode="date"
    display="spinner"
  />
);

export { DateTimePickerEvent };
export default DatePicker;
