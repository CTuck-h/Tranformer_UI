import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { globalStyles } from "./styles/global";
export default function CalibrateScreen() {
  return (

    <ScrollView style={globalStyles.home}
      contentContainerStyle={{ paddingBottom: 120 }}>
      <Text style={globalStyles.sectionTitle}>Close-up on the cap</Text>

            <Image
        source={require("../app/images/IMG_5733.jpeg")}
        style={styles.image}
      />

      <Text style={globalStyles.sectionTitle}>High Voltage Bushing:</Text>
      <Text style={globalStyles.typeText}>The high voltage device that brings the high voltage conductor through the tank from the outside
      -typically covered by a standard bird guard on top of it (not shown)</Text>
      <Text style={globalStyles.sectionTitle}>Polymer-Housed Evolution Arrester:</Text>
      <Text style={globalStyles.typeText}>Protects the transformer from overvoltages and surges -Typically covered by a line terminal guard on top of it (not shown)</Text>
      <Text style={globalStyles.sectionTitle}>Ground Strap:</Text>
      <Text style={globalStyles.typeText}>Connects the terminal to the transformer tank and the to the poles grounding system </Text>
      
      <Text style={globalStyles.sectionTitle}>Additional information on the tank components not mentioned can be found on the Tank tab</Text>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});