import { createNativeStackNavigator } from "react-navigation";
import Home from "./Home";
import Contact from "./Contact";

const Stack = createNativeStackNavigator();
const navigate = useNavigation();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
