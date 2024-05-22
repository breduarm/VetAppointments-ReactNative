import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Patient = ({item}) => {
  const {patient, dateApp} = item;

  console.log('==== date prop: ')
  console.log(dateApp);

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
})

export default Patient;
