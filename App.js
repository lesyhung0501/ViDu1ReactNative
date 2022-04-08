import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';


export default function App() {
  let [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1)
  }

  
  return (
    <View style={styles.container}>
        <Text style={{fontSize:'30px', fontWeight:'bold', color:'red'}}>{count}</Text>
        <Button
          title="Increse"
          onPress={handleIncrease}
        ></Button>
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
