import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {formatDate} from '../helpers';

const ModalPatient = ({patient, setPatient, setModalPatientVisibility}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>
        Patient {''}
        <Text style={styles.h1Bold}> Information </Text>
      </Text>
      <View>
        <Pressable
          style={styles.btnClose}
          onPress={() => {
            setModalPatientVisibility(false);
            setPatient({});
          }}>
          <Text style={styles.btnCloseText}>Close</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={styles.field}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{patient.patient}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Owner:</Text>
          <Text style={styles.value}>{patient.owner}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{patient.email}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{patient.phone}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Discharge Date:</Text>
          <Text style={styles.value}>{formatDate(patient.dateApp)}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Symptoms:</Text>
          <Text style={styles.value}>{patient.Symptoms}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F59E0B',
    flex: 1,
  },
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
  btnClose: {
    justifyContent: 'center',
    height: 48,
    marginTop: 24,
    backgroundColor: '#E06900',
    marginHorizontal: 24,
    borderRadius: 8,
  },
  btnCloseText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  content: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  field: {
    marginBottom: 8,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    fontSize: 12,
  },
  value: {
    fontWeight: '700',
    fontSize: 20,
    color: '#334155',
  },
});

export default ModalPatient;
