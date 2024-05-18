import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, Text, StyleSheet, Pressable} from 'react-native';

import Form from './src/components/Form';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const App = (): React.JSX.Element => {
  // Hooks must go on top, before components.
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>
        Medical Appointment Manager {''}
        <Text style={styles.h1Bold}>Veterinary</Text>
      </Text>
      <Pressable
        onPress={() => {
          setModalVisibility(!modalVisibility);
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>New Appointment</Text>
      </Pressable>
      <Form modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  h1: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  h1Bold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  button: {
    backgroundColor: '#6D28D9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    marginTop: 20,
    marginHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default App;
