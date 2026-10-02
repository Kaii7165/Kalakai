import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalakai</Text>

      <Text style={styles.subtitle}>Discover Papua New Guinea</Text>

      <Text style={styles.description}>
        Explore tourism sites, discover beautiful destinations, check local
        weather, and save places you want to visit.
      </Text>

      <Link href="/(tabs)" style={styles.button}>
        <Text style={styles.buttonText}>Explore Kalakai</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 30,
  },

  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: "#5cc4f4",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
