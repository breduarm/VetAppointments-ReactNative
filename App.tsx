
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const App = (): React.JSX.Element => {

  return (
    <SafeAreaView>
      <Text>Hello World !!!</Text>
    </SafeAreaView>
  );
}

export default App;