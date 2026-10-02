import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalakai</Text>

      <Text style={styles.subtitle}>Discover Papua New Guinea</Text>

      <Text style={styles.description}>
        Explore beautiful tourism destinations across Papua New Guinea.
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
    fontSize: 36,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.secondary,
    marginBottom: 16,
    textAlign: "center",
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
    textAlign: "center",
  },
});
