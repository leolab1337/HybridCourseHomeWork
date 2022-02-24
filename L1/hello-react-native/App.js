import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';


export default function App()
 {
  const myFunc = () => console.log("hello")
  //const random= 5;
  const rand = ()=> {
  return Math.floor (Math.random()*100)+1
  }

  var random = rand()

  return (
    
    <View style={styles.container}>
      <Button
       // onPress={onPressLearnMore}
       onPress={myFunc}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>{random}</Text>
      <Text>Toinen</Text>
      <Text>changed</Text>
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
