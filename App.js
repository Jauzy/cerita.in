import 'react-native-gesture-handler';
import React from 'react';
import { IconRegistry } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { RecoilRoot } from 'recoil'

import Router from './src/modules/Router'

export default function App() {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <IconRegistry icons={EvaIconsPack} />
        <Router />
      </RecoilRoot>
    </NavigationContainer>
  );
}
