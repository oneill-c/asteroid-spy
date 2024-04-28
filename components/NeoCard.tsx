import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { NearEarthObject } from "../utils/NasaAPIClient/types";

interface NeoCardProps {
  item: NearEarthObject;
}

const NeoCard: React.FC<NeoCardProps> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.id}>#{item.id}</Text>
      <View style={styles.description}>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Name: </Text>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Estimated Diameter (Feet): </Text>
          <Text>{`${item.estimatedDiameter.feet.estimatedDiameterMin.toFixed(
            2
          )} - ${item.estimatedDiameter.feet.estimatedDiameterMax.toFixed(
            2
          )}`}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Velocity (MPH): </Text>
          <Text>
            {parseFloat(
              item.closeApproachData[0].relativeVelocity.milesPerHour
            ).toFixed(2)}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Miss Distance (Miles): </Text>
          <Text>
            {parseFloat(item.closeApproachData[0].missDistance.miles).toFixed(
              2
            )}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Potentially Hazardous?: </Text>
          <Text>{item.isPotentiallyHazardousAsteroid ? "Yes" : "No"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  id: {
    fontWeight: "bold",
  },
  card: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  description: {
    marginTop: 20,
  },
  field: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  fieldTitle: {
    fontWeight: "bold",
  },
});

export default NeoCard;
