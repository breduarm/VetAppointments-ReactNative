import React, {useState} from 'react';
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
  const [patient, setPatient] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [symptoms, setSymtoms] = useState('')

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
              keyboardType="phone-pad"
              maxLength={10}
              value={phone}
              onChangeText={setPhone}
            />
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
  symptomsInput: {
    textAlignVertical: 'top',
    height: 100
  }
});

export default Form;