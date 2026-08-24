import { StyleSheet, Text, View } from "react-native";

export default function AdminHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>NSG BRO • ADMIN</Text>
      <Text style={styles.title}>Admin NSG</Text>
      <Text style={styles.subtitle}>Content • Students • Control • Analytics</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{flex:1,justifyContent:"center",padding:24},
  badge:{fontSize:12,fontWeight:"700",letterSpacing:1},
  title:{fontSize:42,fontWeight:"900",marginTop:12},
  subtitle:{fontSize:17,marginTop:8}
});