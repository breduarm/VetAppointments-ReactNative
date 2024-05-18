import React from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from 'react-native';

const Form = ({modalVisibility}) => {
  return (
    <Modal animationType="slide" visible={modalVisibility}>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.h1}>
            New {''}
            <Text style={styles.h1Bold}>Appointment</Text>
          </Text>
          <View style={styles.field}>
            <Text style={styles.label}>Patient name</Text>
            <TextInput
              style={styles.input}
              placeholder="Patient Name"
              placeholderTextColor={'#666'}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Owner's Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Owner's Name"
              placeholderTextColor={'#666'}
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Owner's Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Owner's Email"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Owner's Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="Owner's Phone"
              placeholderTextColor={'#666'}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Symptoms</Text>
            <TextInput
              style={styles.input}
              placeholder="Patient Symptoms"
              placeholderTextColor={'#666'}
            />
          </View>
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
});

export default Form;
