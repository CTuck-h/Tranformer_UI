import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { globalStyles } from "./styles/global";
export default function CalibrateScreen() {
  return (

    <ScrollView style={globalStyles.home}
      contentContainerStyle={{ paddingBottom: 120 }}>
      <Text style={globalStyles.sectionTitle}>Core of The Transformer Suspended above Tank</Text>

            <Image
        source={require("../app/images/IMG_5745.jpeg")}
        style={styles.image}
      />

      <Text style={globalStyles.sectionTitle}>The Core:</Text>
      <Text style={globalStyles.typeText}>Made from metal stripsl to carry magnetic flux with minimal energy loss
      -Note: the inside of the tank is filled with oil (not displayed)
      </Text>
      <Text style={globalStyles.sectionTitle}>The phases:</Text>
      <Text style={globalStyles.typeText}>Primarily single phase or three phase units where a single phase delivers a single sinusoidal wave AC current as opposed to three-phases 3.Single phase is for homes and rural farms and three phase is for commercial use.
    </Text>

      <Text style={globalStyles.sectionTitle}>Additional information on the tank components not mentioned can be found on the tank tab</Text>

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