import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

const items = ["Physics", "Chemistry", "Biology", "DPP", "PYQ", "Video", "PDF"];
export default function Search() {
  const [q, setQ] = useState("");
  const results = items.filter((x) => x.toLowerCase().includes(q.toLowerCase()));
  return <View style={styles.page}><Text style={styles.title}>Search</Text><TextInput value={q} onChangeText={setQ} placeholder="Search subjects or resources" style={styles.input}/>{results.map(x => <View key={x} style={styles.row}><Text style={styles.item}>{x}</Text></View>)}</View>;
}
const styles=StyleSheet.create({page:{padding:24,gap:12},title:{fontSize:32,fontWeight:"900"},input:{borderWidth:1,borderRadius:16,padding:15,fontSize:16},row:{padding:15,borderWidth:1,borderRadius:14},item:{fontSize:17,fontWeight:"700"}});
