import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";

export default function SiteDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tourism Site</Text>

      <Text style={styles.name}>Destination Details</Text>

      <Text style={styles.description}>
        Information about the selected tourism site will appear here, including
        its location, category, description, and weather.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: "center",
  },

  title: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: "600",
    marginBottom: 10,
  },

  name: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: "bold",
    marginBottom: 16,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
  },
});
