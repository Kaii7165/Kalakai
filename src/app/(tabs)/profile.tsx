import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <Text style={styles.description}>
        Your Kalakai account information will appear here.
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
