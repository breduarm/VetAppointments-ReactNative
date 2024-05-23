import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Patient = ({item, onEditPatient}) => {
  const {id, patient, dateApp} = item;

  const formatDate = (date: Date) => {
    const dateAppointment = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return dateAppointment.toLocaleDateString('en-US', options);

  };

  return (
    <View style={styles.content}>
      <Text style={styles.label}>Patient:</Text>
      <Text style={styles.text}>{patient}</Text>
      <Text style={styles.date}>{formatDate(dateApp)}</Text>

      <View style={styles.btnsContainer}>
        <Pressable style={[styles.btnAction, styles.btnEdit]} onPress={() => onEditPatient(id)}>
          <Text style={styles.btnText}>Edit</Text>
        </Pressable>

        <Pressable style={[styles.btnAction, styles.btnDelet]}>
          <Text style={styles.btnText}>Delet</Text>
        </Pressable>
      </View>
    </View>
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
})

export default Patient;
