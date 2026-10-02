import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map</Text>

      <Text style={styles.description}>
        Tourism sites will be displayed on the map here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
  },
});
