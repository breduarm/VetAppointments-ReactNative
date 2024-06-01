import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import PatientView from './src/components/PatientView';
import Form from './src/components/ModalForm';
import ModalPatient from './src/components/ModalPatient';
import Patient from './src/domain/model/Patient';

const App = (): React.JSX.Element => {
  // Hooks must go on top, before components.
  const [modalFormVisibility, setModalFormVisibility] = useState(false);
  const [modalPatientVisibility, setModalPatientVisibility] = useState(false);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [patient, setPatient] = useState({});

  const onEditPatient = (id: string) => {
    const patientToEdit = patients.filter(patient => patient.id === id)[0];
    setPatient(patientToEdit);
    setModalFormVisibility(true);
  };

  const confirmDeletePatient = (id: string) => {
    Alert.alert(
      'Do you want to delete this patient?',
      'This action can not be undone',
      [
        {text: 'Cancel'},
        {
          text: 'Delete',
          onPress: () => {
            onDeletePatient(id);
          },
        },
      ],
    );
  };

  const onDeletePatient = (id: string) => {
    const updatedPatients = patients.filter(patient => patient.id !== id);
    setPatients(updatedPatients);
  };

  const closeFormModal = () => {
    setModalFormVisibility(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>
        Appointment Manager {'\n'}
        <Text style={styles.h1Bold}>Veterinary</Text>
      </Text>

      <Pressable
        onPress={() => {
          setModalFormVisibility(true);
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
          renderItem={({item}) => {
            return (
              <PatientView
                item={item}
                onEditPatient={onEditPatient}
                onDeletePatient={confirmDeletePatient}
                setPatient={setPatient}
                setModalPatientVisibility={setModalPatientVisibility}
              />
            );
          }}
        />
      )}

      {modalFormVisibility && (
        <Form
          closeFormModal={closeFormModal}
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
      )}

      <Modal visible={modalPatientVisibility} animationType="fade">
        <ModalPatient
          patient={patient}
          setPatient={setPatient}
          setModalPatientVisibility={setModalPatientVisibility}
        />
      </Modal>
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
  },
});

export default App;
