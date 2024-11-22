import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { RootStackScreenProps } from './types';

export default function PasscodeScreen({ navigation }: RootStackScreenProps<'Passcode'>) {
  const [passcode, setPasscode] = useState('');

  const handlePasscode = () => {
    if (passcode === '1234') {
      navigation.navigate('EditMenu');
    } else {
      Alert.alert('Error', 'Incorrect passcode!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Passcode"
        value={passcode}
        onChangeText={setPasscode}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Submit" onPress={handlePasscode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
