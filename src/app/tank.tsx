import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { globalStyles } from "./styles/global";
export default function CalibrateScreen() {
  return (

    <ScrollView style={globalStyles.home}
      contentContainerStyle={{ paddingBottom: 120 }}>
      <Text style={globalStyles.sectionTitle}>The Empty Tank</Text>

            <Image
        source={require("../app/images/IMG_5750.jpeg")}
        style={styles.image}
      />

      <Text style={globalStyles.sectionTitle}>Lifting Lugs:</Text>
      <Text style={globalStyles.typeText}>What's used to pick up the transformer when mounting and unmounting the device from the pole</Text>
      <Text style={globalStyles.sectionTitle}>Pressure Release Device:</Text>
      <Text style={globalStyles.typeText}>Protects the tank from building up too much pressure during an internal fault</Text>
      <Text style={globalStyles.sectionTitle}>Tank Chassis:</Text>
      <Text style={globalStyles.typeText}>The structure that the heavy duty brackets attach to</Text>
      <Text style={globalStyles.sectionTitle}>Low Voltage Bushings:</Text>
      <Text style={globalStyles.typeText}>An insulated feed that carries a stepped down voltage from the internal windings to the external cables</Text>
   
      <Text style={globalStyles.sectionTitle}>Transformer With Its Cap On</Text>

        <Image
        source={require("../app/images/IMG_5729.jpeg")}
        style={styles.image}
      />

      <Text style={globalStyles.sectionTitle}>Low Voltage Bushings:</Text>
      <Text style={globalStyles.typeText}>An insulated feed that carries a stepped down voltage from the internal windings to the external cables</Text>

      <Text style={globalStyles.sectionTitle}>Additional information on the cap can be found on the cap tab</Text>

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