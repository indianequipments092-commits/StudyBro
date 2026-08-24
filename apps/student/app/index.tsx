import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>GUJARATI MEDIUM • PCB</Text>
      <Text style={styles.title}>StudyBro</Text>
      <Text style={styles.subtitle}>Study • Practice • Progress</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{flex:1,justifyContent:"center",padding:24},
  badge:{fontSize:12,fontWeight:"700",letterSpacing:1},
  title:{fontSize:42,fontWeight:"900",marginTop:12},
  subtitle:{fontSize:17,marginTop:8}
});