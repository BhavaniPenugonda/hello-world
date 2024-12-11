
import { StyleSheet, TextInput, View ,Text} from 'react-native';
import { useState } from 'react';


const App=()=> {
  const [text, setText] = useState('');
  return (
    <View ><TextInput 
    style={styles.textInput}
    value={text}
    onChangeText={setText}
    placeholder='React-Native'
  />
  <Text style={styles.textDisplay}>You wrote: {text}</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '88%',
    borderWidth: 1,
    height: 50,
    padding: 10
  },
  textDisplay: {
    height: 50,
    lineHeight: 50
  }
});
export default App;