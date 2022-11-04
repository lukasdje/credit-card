import React, { type PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Home } from './src/screens/Home';
import TabNavigation from './src/screens/routes/Tab';
import { Signup } from './src/screens/Signup';



const App = () => {


  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="#000"
      />
      <TabNavigation />
    </SafeAreaView>
  );
};



export default App;
