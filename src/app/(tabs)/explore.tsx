import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>

      <Text style={styles.subtitle}>
        Discover places to visit in Papua New Guinea.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tourism Sites</Text>
        <Text style={styles.cardText}>
          Tourism destinations will appear here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 24,
  },

  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 8,
  },

  cardText: {
    fontSize: 15,
    color: colors.mutedText,
  },
});
