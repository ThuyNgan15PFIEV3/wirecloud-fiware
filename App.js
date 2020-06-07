import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const fieldInput = ({label, value, placeholder, onChangeText}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.label}>{label}</Text>
      <View style={{alignItems: 'center', flex: 4}}>
        <TextInput
          textAlignVertical="top"
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};
export default function App() {
  const [ID, setID] = useState('');
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');

  const IDChanged = useCallback((value) => setID(value), []);
  const typeChanged = useCallback((value) => setType(value), []);
  const addressChanged = useCallback((value) => setAddress(value), []);
  const locationChanged = useCallback((value) => setLocation(value), []);

  return (
    <SafeAreaView style={{padding: 30}}>
      <View style={styles.title}>
        <Text style={{fontSize: 30}}>WireCloud Fiware</Text>
      </View>
      <View>
        {fieldInput({
          label: 'ID',
          value: ID,
          onChangeText: IDChanged,
        })}
        {fieldInput({
          label: 'Type',
          value: type,
          onChangeText: typeChanged,
        })}
        {fieldInput({
          label: 'Address',
          value: address,
          onChangeText: addressChanged,
        })}
        {fieldInput({
          label: 'Location',
          value: location,
          onChangeText: locationChanged,
        })}
      </View>
      <TouchableOpacity
        onPress={() => alert(`${ID}, ${type}, ${address}, ${location}`)}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {alignItems: 'center', marginBottom: 30},
  label: {
    fontSize: 20,
    marginTop: 10,
    flex: 2,
  },
  textInput: {
    borderBottomWidth: 0.5,
    marginHorizontal: 10,
    paddingBottom: 0,
    marginBottom: 10,
    fontSize: 20,
    width: Dimensions.get('window').width - 170,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#004080',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
