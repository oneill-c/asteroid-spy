import { FC } from "react";
import { Platform, Modal, Text, TouchableOpacity } from "react-native";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import DatePicker, { DateTimePickerEvent } from "./DatePicker";
import LiveButton from "./LiveButton";

interface ActionBarProps {
  selectedDate: Date;
  handleDateSelection: (event: DateTimePickerEvent, date?: Date) => void;
  showDatePicker: boolean;
  toggleDatePicker: () => void;
  dateField: string;
  setDateField: (value: string) => void;
}

/**
 *
 * Refactor idea: Would like to make this component take PropsWithChildren and pass in components
 * pertaining to actions. Then we can have a more specialized e.g. TopActionBar.tsx that would look
 * something like this:
 *
 * const TopActionBar: FC = () => {
 *  return (
 *     <TopActionBar>
 *       <ActionBar>
 *          <DatePicker />
 *          <LiveButton />
 *       </ActionBar>
 *     </TopActionBar>
 *
 * This means that ActionBar doesn't care about its contents and is a little more reusable.
 */
const ActionBar: FC<ActionBarProps> = ({
  selectedDate,
  handleDateSelection,
  showDatePicker,
  toggleDatePicker,
  dateField,
  setDateField,
}) => {
  const datePicker = (
    <DatePicker selectedDate={selectedDate} onChange={handleDateSelection} />
  );

  const wrappedDatePicker =
    Platform.OS === "ios" ? (
      <Modal transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.centeredView}>
            <View style={styles.modal}>
              {datePicker}
              <View style={styles.pickerControls}>
                <TouchableOpacity onPress={toggleDatePicker}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.okButton}
                  onPress={toggleDatePicker}
                >
                  <Text style={styles.okButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    ) : (
      datePicker
    );

  return (
    <SafeAreaView style={styles.actionBar}>
      <Pressable
        style={styles.datePickerFieldContainer}
        onPress={toggleDatePicker}
      >
        <TextInput
          style={styles.datePickerTextInput}
          value={dateField}
          onChangeText={setDateField}
          editable={false}
          onPressIn={toggleDatePicker}
        />
        <Icon
          style={styles.calendarIcon}
          name="calendar"
          size={25}
          color="#ABEBCB"
        />
      </Pressable>
      {showDatePicker && wrappedDatePicker}

      <LiveButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pickerControls: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  okButton: {
    backgroundColor: "#5AA37E",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  okButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  actionBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#D0D0D0",
    borderBottomWidth: 1,
    paddingVertical: 15,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  datePickerFieldContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  datePickerTextInput: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D0D0D0",
    borderRadius: 5,
  },
  calendarIcon: {
    marginLeft: 10,
  },
  liveButton: {
    backgroundColor: "#000",
    color: "#fff",
    paddingVertical: 9,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  liveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ActionBar;
