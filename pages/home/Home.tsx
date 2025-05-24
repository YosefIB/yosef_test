import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Linking, Modal, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useUser } from '../../componnets/context/UserContext';

export default function Home() {
  const { userName, setUserName, city, setCity, maritalStatus, setMaritalStatus } = useUser();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={containerStyle}>
      <View style={cardStyle}>
        <Text style={headerTextStyle}>Yosef App!</Text>

        <View style={formContainerStyle}>
          {/* Name Input */}
          <View>
            <Text style={labelTextStyle}>Your Full Name</Text>
            <TextInput
              style={inputStyle}
              placeholder="Enter your name"
              onChangeText={setUserName}
              value={userName}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* City Input */}
          <View>
            <Text style={labelTextStyle}>Your City</Text>
            <TextInput
              style={inputStyle}
              placeholder="Enter your city"
              onChangeText={setCity}
              value={city}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Marital Status Picker */}
          <View>
            <Text style={labelTextStyle}>Marital Status</Text>
            <View style={pickerContainerStyle}>
              <Picker
                selectedValue={maritalStatus}
                onValueChange={(itemValue: string) => setMaritalStatus(itemValue)}
                style={pickerStyle}
                dropdownIconColor="#4B5563"
              >
                <Picker.Item label="Single" value="single" />
                <Picker.Item label="Married" value="married" />
                <Picker.Item label="Divorced" value="divorced" />
                <Picker.Item label="Widowed" value="widowed" />
              </Picker>
            </View>
          </View>

          {/* Buttons Row */}
          <View style={buttonsRowStyle}>
            <View style={buttonWrapperLeft}>
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
            <View style={buttonWrapperRight}>
              <Button
                title="Summary"
                onPress={() => setModalVisible(true)}
                color="#3B82F6"
              />
            </View>
          </View>

          {/* Summary Modal */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={modalOverlayStyle}>
              <View style={modalContainerStyle}>
                <Text style={modalTitleStyle}>
                  📋 User Summary
                </Text>
                
                <View style={modalContentContainerStyle}>
                  <View style={modalItemContainerStyle}>
                    <Text style={modalItemIconStyle}>👤</Text>
                    <View style={modalItemTextContainerStyle}>
                      <Text style={modalItemLabelStyle}>Name</Text>
                      <Text style={modalItemValueStyle}>
                        {userName || 'Not provided'}
                      </Text>
                    </View>
                  </View>

                  <View style={modalItemContainerStyle}>
                    <Text style={modalItemIconStyle}>🏙️</Text>
                    <View style={modalItemTextContainerStyle}>
                      <Text style={modalItemLabelStyle}>City</Text>
                      <Text style={modalItemValueStyle}>
                        {city || 'Not provided'}
                      </Text>
                    </View>
                  </View>

                  <View style={modalItemContainerStyle}>
                    <Text style={modalItemIconStyle}>💑</Text>
                    <View style={modalItemTextContainerStyle}>
                      <Text style={modalItemLabelStyle}>Marital Status</Text>
                      <Text style={modalItemValueStyle}>
                        {maritalStatus || 'Not provided'}
                      </Text>
                    </View>
                  </View>
                </View>

                <TouchableOpacity 
                  style={modalCloseButtonStyle}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={modalCloseButtonTextStyle}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Google Link */}
          <View style={googleButtonWrapper}>
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


// Styles
const containerStyle = tw`flex-1 bg-gradient-to-b from-blue-50 to-blue-100 p-6`;
const cardStyle = tw`bg-white rounded-2xl shadow-lg p-6 mt-4`;
const headerTextStyle = tw`text-3xl font-bold text-center text-gray-800 mb-8`;

const formContainerStyle = tw`space-y-4`;
const labelTextStyle = tw`text-lg font-semibold text-gray-700 mb-2`;
const inputStyle = tw`bg-gray-50 border border-gray-200 rounded-xl p- text-gray-700`;

const pickerContainerStyle = tw`h-10 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden flex justify-center`;
const pickerStyle = tw`h-16`;

const buttonsRowStyle = tw`flex-row justify-between mt-6`;
const buttonWrapperLeft = tw`flex-1 mr-`;
const buttonWrapperRight = tw`flex-1 ml-2`;
const googleButtonWrapper = tw`mt-4`;

// Modal Styles
const modalOverlayStyle = tw`flex-1 bg-black bg-opacity-50 justify-center items-center`;
const modalContainerStyle = tw`bg-white rounded-3xl p-8 w-5/6 shadow-xl`;
const modalTitleStyle = tw`text-3xl font-bold text-center text-gray-800 mb-6`;
const modalContentContainerStyle = tw`space-y-4`;

// Modal Item Styles
const modalItemContainerStyle = tw`flex-row items-center`;
const modalItemIconStyle = tw`text-blue-500 text-2xl mr-2`;
const modalItemTextContainerStyle = tw`flex-1`;
const modalItemLabelStyle = tw`text-gray-500 text-sm`;
const modalItemValueStyle = tw`text-gray-800 text-lg font-medium`;

// Modal Button Style
const modalCloseButtonStyle = tw`bg-blue-500 rounded-xl py-3 px-6 mt-6`;
const modalCloseButtonTextStyle = tw`text-white text-center font-semibold text-lg`;
