import React from "react";
import {
  default as RNDatePicker,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

interface DatePickerProps {
  selectedDate: Date;
  onChange: (event: DateTimePickerEvent, date?: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange }) => {
  return (
    <RNDatePicker value={selectedDate} onChange={onChange} display="default" />
  );
};

export { DateTimePickerEvent };
export default DatePicker;
