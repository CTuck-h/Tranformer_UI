import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { globalStyles } from "./styles/global";
export default function CalibrateScreen() {
  return (

    <ScrollView style={globalStyles.home}
      contentContainerStyle={{ paddingBottom: 120 }}>
      <Text style={globalStyles.sectionTitle}>Heavy duty brackets
</Text>

      <Image
        source={require("../app/images/IMG_5741.jpeg")}
        style={styles.image}
      />

      <Text style={globalStyles.typeText}>The heavy duty lifting lugs holds the brackets together and keeps the transformer mounted on the pole</Text>
      
      <Text style={globalStyles.sectionTitle}>Nameplate</Text>

        <Image
        source={require("../app/images/IMG_5725.jpeg")}
        style={styles.image}
      />

      <Text style={globalStyles.typeText}>Laser printed metal display that includes the primary identifiers and information of the transformer</Text>
      
      <Text style={globalStyles.sectionTitle}>Voltage Selector Switch</Text>

        <Image
        source={require("../app/images/IMG_5727.jpeg")}
        style={styles.image}
      />

      <Text style={globalStyles.typeText}>Allows the adjustment of the transformers voltage ratio safely without de-tanking and dismounting it from the pole
</Text>

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