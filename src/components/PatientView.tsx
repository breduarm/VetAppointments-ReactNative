import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import { formatDate } from '../helpers';

const PatientView = ({
  item,
  onEditPatient,
  onDeletePatient,
  setPatient,
  setModalPatientVisibility,
}) => {
  const {id, patient, dateApp} = item;

  return (
    <Pressable
      onLongPress={() => {
        setModalPatientVisibility(true);
        setPatient(item);
      }}>
      <View style={styles.content}>
        <Text style={styles.label}>Patient:</Text>
        <Text style={styles.text}>{patient}</Text>
        <Text style={styles.date}>{formatDate(dateApp)}</Text>

        <View style={styles.btnsContainer}>
          <Pressable
            style={[styles.btnAction, styles.btnEdit]}
            onPress={() => onEditPatient(id)}>
            <Text style={styles.btnText}>Edit</Text>
          </Pressable>

          <Pressable
            style={[styles.btnAction, styles.btnDelet]}
            onPress={() => onDeletePatient(id)}>
            <Text style={styles.btnText}>Delet</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderBottomColor: '#94A3BB',
    borderBottomWidth: 1,
  },
  label: {
    color: '#374151',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  text: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  date: {
    color: '#374151',
  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btnAction: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  btnEdit: {
    backgroundColor: '#F59E0B',
  },
  btnDelet: {
    backgroundColor: '#EF4444',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default PatientView;
