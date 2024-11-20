import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

type PasscodeScreenProps = NativeStackScreenProps<RootStackParamList, 'Passcode'>;

export default function PasscodeScreen({ navigation }: PasscodeScreenProps) {
  const [passcode, setPasscode] = useState('');

  const handleAccess = () => {
    if (passcode === '2468') {
      navigation.navigate('EditMenu'); // Corrected navigation here
    } else {
      Alert.alert('Access Denied', 'Incorrect passcode!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Passcode</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Passcode"
        value={passcode}
        onChangeText={setPasscode}
        secureTextEntry
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleAccess} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5, textAlign: 'center' },
});
