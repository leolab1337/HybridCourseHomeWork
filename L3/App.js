import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import React, { useEffect, useState } from 'react';


function OrientationComponent() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  Accelerometer.setUpdateInterval(1000);
  useEffect(() => {
    const subcription = Accelerometer.addListener(orientantionData => setData(orientantionData))
    return () => subcription.remove()
  }, [])
  return (<View>
    <Text>Orientation</Text>
    <Text>X:{data.x}</Text>
    <Text>Y:{data.y}</Text>
    <Text>Z:{data.z}</Text>
  </View>
  )
}

export default function App() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get('window').height;
  const sensorsSupported = Platform.OS === 'andoid' || Platform.OS === 'android' ? true : false
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Text>Width:{windowWidth} </Text>
      <Text>Height: {windowHeight}</Text>
      {sensorsSupported ?
        <OrientationComponent></OrientationComponent> :
        <Text>Not supported</Text>
      }

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
