import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
// Components
import FAB from './components/FAB';


export default function App() {
  const [ count, setCount ] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{ count }</Text>

      {/*
      <Pressable
        style={ styles.floatingButton }
        onPress={ () => setCount( count + 1 ) }
        onLongPress={ () => setCount(0) }
      >
        <Text style={{ color: 'white', fontSize: 20 }}>+ 10</Text>
      </Pressable>
      */}

      <FAB
        label='+ 1'
        onPress={ () => setCount( count + 1 ) }
        onLongPress={ () => setCount(0) }
      />

      <TouchableOpacity>
        <Text>+ 10</Text>
      </TouchableOpacity>

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
  textHuge: {
    fontSize: 120,
    fontWeight: '100'
  },
});
