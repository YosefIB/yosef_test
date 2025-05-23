import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import tw from 'twrnc';
import Main from './pages/main/Main';

export default function App() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [maritalStatus, setMaritalStatus] = useState<string>('single');

  return (
    <View style={tw`flex-1 items-center justify-center bg-red-100 p-4`}>
      <Text style={tw`text-2xl font-bold`}>Hello to my app!</Text>

      <Text style={tw`mt-4 text-lg`}>Enter your name</Text>
      <TextInput
        style={tw`border border-gray-300 rounded p-2 w-64`}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />

      <Text style={tw`mt-4 text-lg`}>Enter your city</Text>
      <TextInput
        style={tw`border border-gray-300 rounded p-2 w-64`}
        placeholder="City"
        onChangeText={setCity}
        value={city}
      />

      <Text style={tw`mt-4 text-lg`}>Your name is {name} </Text>
      <Text style={tw`mt-4 text-lg`}>you live in {city}</Text>

      <Text style={tw`mt-4 text-lg`}>מצב משפחתי</Text>
      <View style={tw`border border-gray-300 rounded w-64 bg-white p-2 h-12 flex justify-center`}>
        <Picker
          selectedValue={maritalStatus}
          onValueChange={(itemValue: string) => setMaritalStatus(itemValue)}
          style={tw`h-16`}
        >
          <Picker.Item label="רווק/ה" value="single" />
          <Picker.Item label="נשוי/אה" value="married" />
          <Picker.Item label="גרוש/ה" value="divorced" />
          <Picker.Item label="אלמן/ה" value="widowed" />
        </Picker>
      </View>

      <Text style={tw`mt-4 text-lg`}>מצב משפחתי: {maritalStatus}</Text>

      <View style={tw`mt-4 w-64`}>
        <Button
          title="Clear"
          onPress={() => {
            setName('');
            setCity('');
          }}
          color="#ef4444"
        />
      </View>

      <View style={tw`mt-4 w-64`}>
        <Button
          title="show"
          onPress={() => {
            alert(`Your name is ${name} and you live in ${city}`);
          }}
          color="#ef4444"
        />
      </View>

      <View style={tw`mt-4 w-64`}>
        <Button
          title="go to main"
          onPress={() => {
            <Main />
          }}
          color="#ef4444"
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
