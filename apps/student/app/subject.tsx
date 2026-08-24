import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const counts: Record<string, Record<string, number>> = {
  Physics: { "11th": 14, "12th": 14 },
  Chemistry: { "11th": 9, "12th": 10 },
  Biology: { "11th": 19, "12th": 13 },
};

export default function Subject() {
  const { subject = "Physics" } = useLocalSearchParams<{ subject: string }>();
  const name = String(subject);
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>Gujarati Medium • PCB</Text>
      {["11th", "12th"].map((standard) => (
        <View style={styles.standard} key={standard}>
          <Text style={styles.heading}>{standard}</Text>
          {Array.from({ length: counts[name]?.[standard] ?? 0 }, (_, i) => (
            <View style={styles.chapter} key={i}>
              <Text style={styles.chapterTitle}>Chapter {i + 1}</Text>
              <Text style={styles.resources}>Video • DPP • PYQ • PDF</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 24, gap: 14 },
  title: { fontSize: 36, fontWeight: "900" },
  subtitle: { fontSize: 15 },
  standard: { gap: 10, marginTop: 8 },
  heading: { fontSize: 24, fontWeight: "800" },
  chapter: { padding: 16, borderWidth: 1, borderRadius: 16, gap: 5 },
  chapterTitle: { fontSize: 17, fontWeight: "800" },
  resources: { fontSize: 13 },
});
