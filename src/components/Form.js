import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Form = ({modalVisibility, setModalVisibility}) => {
  const [patient, setPatient] = useState('')
  const [owner, setOwner] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dateApp, setDateApp] = useState(new Date())
  const [symptoms, setSymtoms] = useState('')

  return (
    <Modal animationType="slide" visible={modalVisibility}>
      <SafeAreaView style={styles.content}>
        <ScrollView>

          <Text style={styles.h1}>
            New {''}
            <Text style={styles.h1Bold}>Appointment</Text>
          </Text>

          <Pressable style={styles.btnCancel} onPress={() => setModalVisibility(false)}>
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
            <DatePicker date={dateApp} onDateChange={date => {setDateApp(date)}} mode='date'/>
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
    height: 100
  },
  containerDate: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
});

export default Form;
