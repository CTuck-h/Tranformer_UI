import HomeHeader from "@/components/HomeHeader";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { colors, globalStyles } from "./styles/global";

export default function Index() {
  return (

    <View style={globalStyles.home}>
      <Text style={globalStyles.title}>Pole Mounted Transformer</Text>
      <HomeHeader />
            
      <Link href='/tank' style={{textAlign: 'left', fontSize:35, color: colors.textSecondary, marginTop: 35 }}>
      Tank
      </Link>
      <Link href='/cap' style={{textAlign: 'left', fontSize:35, color: colors.textSecondary, marginTop: 35 }}>
      Cap
      </Link>
      <Link href='/inside' style={{textAlign: 'left', fontSize:35, color: colors.textSecondary, marginTop: 35 }}>
      Inside
      </Link>
      <Link href='/individuals' style={{textAlign: 'left', fontSize:35, color: colors.textSecondary, marginTop: 35 }}>
      Individuals
      </Link>

    </View>

  );
}

