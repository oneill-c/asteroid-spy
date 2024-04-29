import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { NearEarthObject } from "../utils/NasaAPIClient/types";
import MIcon from "react-native-vector-icons/MaterialIcons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

interface NeoCardProps {
  item: NearEarthObject;
}

const NeoCard: React.FC<NeoCardProps> = ({ item }) => {
  const buildDiameterText = () => {
    const {
      estimatedDiameter: { feet },
    } = item;
    const min = feet.estimatedDiameterMin.toFixed(2);
    const max = feet.estimatedDiameterMax.toFixed(2);
    return `${min} - ${max} ft diameter`;
  };

  const buildVelocityText = () => {
    const mph = parseFloat(
      item.closeApproachData[0].relativeVelocity.milesPerHour
    ).toFixed(2);

    return `${mph} mph`;
  };

  const buildMissDistanceText = () => {
    const {
      missDistance: { miles },
    } = item.closeApproachData[0];

    return `${parseFloat(miles).toFixed(2)} miles`;
  };

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.topSection}>
        <Text style={styles.id}>#{item.id}</Text>
        {item.isPotentiallyHazardousAsteroid && (
          <View style={styles.hazardBadge}>
            <MIcon name="warning-amber" size={25} color="#fff" />
          </View>
        )}
      </View>
      <View style={styles.mainSection}>
        <View style={styles.name}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
      </View>

      <View style={styles.subSection}>
        <View style={styles.field}>
          <MIcon name="square-foot" size={20} color="#D0D0D0" />
          <Text style={styles.fieldText}>{buildDiameterText()}</Text>
        </View>
        <View style={styles.field}>
          <MIcon name="speed" size={20} color="#D0D0D0" />
          <Text style={styles.fieldText}>{buildVelocityText()}</Text>
        </View>
        <View style={styles.field}>
          <MCIcon name="target" size={20} color="#D0D0D0" />
          <Text style={styles.fieldText}>{buildMissDistanceText()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F9FAFB",
    borderRadius: 5,
    padding: 20,
    marginBottom: 15,
    width: "100%",
  },
  topSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  id: {
    fontWeight: "bold",
    color: "#D0D0D0",
    marginBottom: 10,
  },
  hazardBadge: {
    backgroundColor: "#EED202",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  hazardBadgeText: {
    color: "#fff",
  },
  mainSection: {
    borderColor: "#D0D0D0",
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  subSection: {
    paddingTop: 15,
  },
  name: {
    marginTop: 16,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  field: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  fieldText: {
    marginLeft: 5,
    color: "#D0D0D0",
    fontSize: 12,
  },
});

export default NeoCard;
