
import { StyleSheet,  View } from 'react-native';

const App=()=> {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    flex:1,
    backgroundColor: 'blue'
  },
  box2: {
    flex:12,
    backgroundColor: 'red'
  },
  box3: {
    flex:5,
    backgroundColor: 'green'
  }
});
export default App;