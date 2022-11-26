import Footer from './Components/Footer';
import { View } from 'react-native';
import Header from './Components/Header';
import styles from './style/style';
import Gameboard from './Components/Gameboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Gameboard/>
      <Footer/>
    </View>
  );
}