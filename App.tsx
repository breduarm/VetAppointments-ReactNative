import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import Patient from './src/components/Patient';

import Form from './src/components/Form';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const App = (): React.JSX.Element => {
  // Hooks must go on top, before components.
  const [modalVisibility, setModalVisibility] = useState(false);
  const [patients, setPatients] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>
        Appointment Manager {'\n'}
        <Text style={styles.h1Bold}>Veterinary</Text>
      </Text>

      <Pressable
        onPress={() => {
          setModalVisibility(true);
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>New Appointment</Text>
      </Pressable>

      {patients.length === 0 ? (
        <Text style={styles.noPatients}>There are no patients</Text>
      ) : (
        <FlatList
        style={styles.patientList}
          data={patients}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return <Patient item={item} />;
          }}
        />
      )}

      <Form
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        patients={patients}
        setPatients={setPatients}
      />
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
  noPatients: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  patientList: {
    marginTop: 24,
    marginHorizontal: 24,
  }
});

export default App;
