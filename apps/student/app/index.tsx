import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

const subjects = ["Physics", "Chemistry", "Biology"];
const quick = ["DPP", "PYQ", "Video", "PDF"];

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.badge}>GUJARATI MEDIUM • PCB</Text>
      <Text style={styles.title}>StudyBro</Text>
      <Text style={styles.subtitle}>Study • Practice • Progress</Text>

      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Continue Learning</Text>
        <Text>Pick a subject and keep your study streak alive.</Text>
      </View>

      <Text style={styles.section}>Quick Access</Text>
      <View style={styles.grid}>
        {quick.map((item) => (
          <Pressable key={item} style={styles.card}>
            <Text style={styles.cardTitle}>{item}</Text>
            <Text>Open resources</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.section}>Subjects</Text>
      {subjects.map((subject) => (
        <Link key={subject} href={{ pathname: "/subject", params: { subject } }} asChild>
          <Pressable style={styles.subject}>
            <Text style={styles.cardTitle}>{subject}</Text>
            <Text>Class 11th • Class 12th</Text>
          </Pressable>
        </Link>
      ))}

      <View style={styles.progress}>
        <Text style={styles.cardTitle}>Your Progress</Text>
        <Text>Start your first chapter and build your streak.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 24, gap: 14 },
  badge: { fontSize: 12, fontWeight: "800", letterSpacing: 1 },
  title: { fontSize: 42, fontWeight: "900" },
  subtitle: { fontSize: 17 },
  hero: { padding: 22, borderRadius: 24, borderWidth: 1, gap: 8 },
  heroTitle: { fontSize: 22, fontWeight: "800" },
  section: { fontSize: 20, fontWeight: "800", marginTop: 8 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  card: { width: "47%", padding: 18, borderRadius: 18, borderWidth: 1, gap: 5 },
  subject: { padding: 18, borderRadius: 18, borderWidth: 1, gap: 5 },
  cardTitle: { fontSize: 18, fontWeight: "800" },
  progress: { padding: 20, borderRadius: 20, borderWidth: 1, gap: 6, marginTop: 6 },
});
