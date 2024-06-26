import React, {useState, useEffect} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';

import DatePicker from 'react-native-date-picker';

import Patient from '../domain/model/Patient';

const Form = ({
  closeFormModal,
  patients,
  setPatients,
  patient: prevPatient,
  setPatient: setPrevPatient,
}) => {
  const [id, setId] = useState('');
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateApp, setDateApp] = useState(new Date());
  const [symptoms, setSymtoms] = useState('');

  useEffect(() => {
    if (Object.keys(prevPatient).length > 0) {
      setId(prevPatient.id);
      setPatient(prevPatient.patient);
      setOwner(prevPatient.owner);
      setEmail(prevPatient.email);
      setPhone(prevPatient.phone);
      setDateApp(prevPatient.dateApp);
      setSymtoms(prevPatient.symptoms);
    }
  }, [prevPatient]);

  const clearAllFields = () => {
    setId('');
    setPatient('');
    setOwner('');
    setEmail('');
    setPhone('');
    setDateApp(new Date());
    setSymtoms('');
  };

  const onCancel = () => {
    closeFormModal();
    clearAllFields();
    setPrevPatient({});
  };

  const handleAppointment = () => {
    if ([patient, owner, email, dateApp, symptoms].includes('')) {
      Alert.alert('Error', 'Please, comple the form');
      return;
    }

    const newPatient = new Patient(
      patient,
      owner,
      email,
      phone,
      dateApp,
      symptoms,
    );

    if (id) {
      // Edit patient
      newPatient.id = id;
      const patientsUpdated = patients.map(patient =>
        patient.id === newPatient.id ? newPatient : patient,
      );
      setPatients(patientsUpdated);
      setPrevPatient({});
    } else {
      // New Patient
      newPatient.id = Date.now().toString();
      setPatients([...patients, newPatient]);
    }

    clearAllFields();
    closeFormModal();
  };

  return (
    <Modal animationType="slide">
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.h1}>
            {id ? 'Edit' : 'New'} {''}
            <Text style={styles.h1Bold}>Appointment</Text>
          </Text>

          <Pressable style={styles.btnCancel} onPress={onCancel}>
            <Text style={styles.btnCancelText}>Cancel</Text>
          </Pressable>

          <View style={styles.field}>
            <Text style={styles.label}>Patient name</Text>
            <TextInput
              style={styles.input}
              placeholder="Patient Name"
              placeholderTextColor={'#666'}
              value={patient}
              onChangeText={setPatient}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Owner's Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Owner's Name"
              placeholderTextColor={'#666'}
              value={owner}
              onChangeText={setOwner}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Owner's Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Owner's Email"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Owner's Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="Owner's Phone"
              placeholderTextColor={'#666'}
              keyboardType="number-pad"
              maxLength={10}
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Discharge Date</Text>
            <View style={styles.containerDate}>
              <DatePicker
                date={dateApp}
                onDateChange={date => {
                  setDateApp(date);
                }}
                mode="date"
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Symptoms</Text>
            <TextInput
              style={[styles.input, styles.symptomsInput]}
              placeholder="Patient Symptoms"
              placeholderTextColor={'#666'}
              multiline={true}
              numberOfLines={4}
              value={symptoms}
              onChangeText={setSymtoms}
            />
          </View>

          <Pressable style={styles.btnCreateApp} onPress={handleAppointment}>
            <Text style={styles.btnCreateAppText}>
              {id ? 'Edit patient' : 'Add patient'}
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFFFFF',
  },
  h1Bold: {
    fontWeight: '900',
  },
  btnCancel: {
    justifyContent: 'center',
    height: 48,
    marginTop: 24,
    backgroundColor: '#5827A4',
    marginHorizontal: 24,
    borderRadius: 8,
  },
  btnCancelText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  content: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  field: {
    marginHorizontal: 24,
    marginBottom: 16,
  },
  label: {
    color: '#FFFFFF',
    marginBottom: 8,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
  },
  symptomsInput: {
    textAlignVertical: 'top',
    height: 100,
  },
  containerDate: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  btnCreateApp: {
    justifyContent: 'center',
    height: 48,
    marginTop: 24,
    backgroundColor: '#F59E0B',
    marginHorizontal: 24,
    borderRadius: 8,
    marginBottom: 100,
  },
  btnCreateAppText: {
    color: '#6D28D9',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    textTransform: 'uppercase',
  },
});

export default Form;
