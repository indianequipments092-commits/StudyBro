import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";

const modules = [
  ["Dashboard", "Overview and key activity"],
  ["Content Management", "Manage subjects, chapters and resources"],
  ["Students", "Student access and activity"],
  ["Announcements", "Publish important updates"],
  ["Live Control", "Control live content and availability"],
  ["Analytics", "Track learning and engagement"],
  ["Settings", "App and admin configuration"],
];

export default function AdminHome() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.badge}>NSG BRO • ADMIN</Text>
      <Text style={styles.title}>Admin NSG</Text>
      <Text style={styles.subtitle}>Control • Content • Students • Analytics</Text>

      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Admin Control Center</Text>
        <Text>Manage the StudyBro learning experience from one place.</Text>
      </View>

      <Text style={styles.section}>Management</Text>
      {modules.map(([name, description]) => (
        <Pressable key={name} style={styles.card}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </Pressable>
      ))}

      <View style={styles.status}>
        <Text style={styles.cardTitle}>System Status</Text>
        <Text>Admin foundation ready • Integration layer next</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 24, gap: 14 },
  badge: { fontSize: 12, fontWeight: "800", letterSpacing: 1 },
  title: { fontSize: 40, fontWeight: "900" },
  subtitle: { fontSize: 16 },
  hero: { padding: 22, borderRadius: 24, borderWidth: 1, gap: 8 },
  heroTitle: { fontSize: 22, fontWeight: "800" },
  section: { fontSize: 20, fontWeight: "800", marginTop: 8 },
  card: { padding: 20, borderRadius: 20, borderWidth: 1, gap: 6 },
  cardTitle: { fontSize: 18, fontWeight: "800" },
  description: { fontSize: 14 },
  status: { padding: 20, borderRadius: 20, borderWidth: 1, gap: 6, marginTop: 6 },
});
