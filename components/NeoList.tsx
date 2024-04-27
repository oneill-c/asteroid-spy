import { Text, FlatList } from "react-native";
import { NearEarthObject } from "../utils/NasaAPIClient/types";

interface NeoListProps {
  data: NearEarthObject[];
}

const NeoList: React.FC<NeoListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

export default NeoList;
