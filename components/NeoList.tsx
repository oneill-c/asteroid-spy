import { FlatList, StyleSheet } from "react-native";
import { NearEarthObject } from "../utils/NasaAPIClient/types";
import NeoCard from "./NeoCard";

interface NeoListProps {
  data: NearEarthObject[];
}

const NeoList: React.FC<NeoListProps> = ({ data }) => {
  return (
    <FlatList
      style={styles.list}
      data={data}
      renderItem={({ item }) => {
        return <NeoCard item={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
  },
});
export default NeoList;
