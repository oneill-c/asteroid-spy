import { FlatList, StyleSheet, Text, View } from "react-native";
import { NearEarthObject } from "../utils/NasaAPIClient/types";
import NeoCard from "./NeoCard";

interface NeoListProps {
  data: NearEarthObject[];
  count: number;
}

const NeoList: React.FC<NeoListProps> = ({ data, count }) => {
  return (
    <View style={styles.dataContainer}>
      <Text style={styles.elementCount}>{`${count} results found`}</Text>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => {
          return <NeoCard item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    paddingHorizontal: 20,
  },
  list: {
    width: "100%",
    marginTop: 15,
  },
  elementCount: {
    marginLeft: 20,
  },
});
export default NeoList;
