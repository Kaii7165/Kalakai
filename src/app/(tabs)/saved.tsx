import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Places</Text>

      <Text style={styles.description}>
        Tourism sites you save will appear here.
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
    alignItems: "center",
  },

  title: {
    fontSize: 30,
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
