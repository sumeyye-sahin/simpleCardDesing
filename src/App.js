import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Card from './components/card/Card';

function App() {
  return (
    <SafeAreaView>
      <Card
        title="Özdemir Asaf"
        text="Kaybedeceğini bildiğin halde neden devam ediyorsun dedi. Öleceğini bildiği halde yaşadığını unutmuştu o ama bozmadım."
      />
      <Card title="Atatürk" text="Yurtta sulh cihanda sulh!" />
    </SafeAreaView>
  );
}

export default App;
