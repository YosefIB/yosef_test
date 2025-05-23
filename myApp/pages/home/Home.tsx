import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Linking } from 'react-native';
import tw from 'twrnc';
import { useUser } from '../../context/UserContext';

export default function Home() {
  const { userName, setUserName } = useUser();
  const [city, setCity] = useState('');
  const [maritalStatus, setMaritalStatus] = useState<string>('single');

  return (
    <View style={tw`flex-1 bg-gradient-to-b from-blue-50 to-blue-100 p-6`}>
      <View style={tw`bg-white rounded-2xl shadow-lg p-6 mt-4`}>
        <Text style={tw`text-3xl font-bold text-center text-gray-800 mb-8`}>Yosef App!</Text>
        
        <View style={tw`space-y-4`}>
          <View>
            <Text style={tw`text-lg font-semibold text-gray-700 mb-2`}>Your Name</Text>
            <TextInput
              style={tw`bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-700`}
              placeholder="Enter your name"
              onChangeText={setUserName}
              value={userName}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View>
            <Text style={tw`text-lg font-semibold text-gray-700 mb-2`}>Your City</Text>
            <TextInput
              style={tw`bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-700`}
              placeholder="Enter your city"
              onChangeText={setCity}
              value={city}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View>
            <Text style={tw`text-lg font-semibold text-gray-700 mb-2`}>Marital Status</Text>
            <View style={tw`h-10 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden flex justify-center`}>
              <Picker
                selectedValue={maritalStatus}
                onValueChange={(itemValue: string) => setMaritalStatus(itemValue)}
                style={tw`h-16`}
                dropdownIconColor="#4B5563"
              >
                <Picker.Item label="Single" value="single" />
                <Picker.Item label="Married" value="married" />
                <Picker.Item label="Divorced" value="divorced" />
                <Picker.Item label="Widowed" value="widowed" />
              </Picker>
            </View>
          </View>

          <View style={tw`flex-row justify-between mt-6`}>
            <View style={tw`flex-1 mr-2`}>
              <Button
                title="Clear"
                onPress={() => {
                  setUserName('');
                  setCity('');
                  setMaritalStatus('single');
                }}
                color="#EF4444"
              />
            </View>
            <View style={tw`flex-1 ml-2`}>
              <Button
                title="Summary"
                onPress={() => {
                  alert(`Name: ${userName}\nCity: ${city}\nStatus: ${maritalStatus}`);
                }}
                color="#3B82F6"
              />
            </View>
          </View>

          <View style={tw`mt-4`}>
            <Button
              title="Open Google"
              onPress={() => {
                Linking.openURL('https://www.google.com');
              }}
              color="#10B981"
            />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}