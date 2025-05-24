import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import tw from 'twrnc';

type SwitchSettings = {
  notifications: boolean;
  darkMode: boolean;
  wifi: boolean;
  bluetooth: boolean;
  location: boolean;
};

const Setting = () => {
  const [switches, setSwitches] = useState<SwitchSettings>({
    notifications: true,
    darkMode: false,
    wifi: false,
    bluetooth: false,
    location: true,
  });

  const toggleSwitch = (key: keyof SwitchSettings) => {
    setSwitches((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <View style={containerStyle}>
      <View style={settingsContainerStyle}>
        {Object.entries(switches).map(([key, value]) => (
          <View key={key} style={settingRowStyle}>
            <Text style={settingLabelStyle}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Text>
            <View style={switchContainerStyle}>
              <Text style={value ? switchOnTextStyle : switchOffTextStyle}>
                {value ? 'ON' : 'OFF'}
              </Text>
              <Switch
                trackColor={{ false: '#d1d5db', true: '#34d399' }}
                thumbColor={'#fff'}
                ios_backgroundColor="#d1d5db"
                onValueChange={() => toggleSwitch(key as keyof SwitchSettings)}
                value={value}
              />
            </View>
          </View>
        ))}
      </View>

      <View style={buttonWrapperStyle}>
        <TouchableOpacity
          style={showSettingsButtonStyle}
          onPress={() =>
            alert(
              'Current Settings:\n' +
                Object.entries(switches)
                  .map(([key, value]) => `${key}: ${value ? 'ON' : 'OFF'}`)
                  .join('\n')
            )
          }
        >
          <Text style={buttonTextStyle}>Show All Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const containerStyle = tw`flex-1 bg-gray-50 p-6`;
const settingsContainerStyle = tw`bg-gray-100 p-4 rounded-2xl shadow-inner`;
const settingRowStyle = tw`flex-row items-center justify-between bg-white p-4 rounded-xl mb-4`;
const settingLabelStyle = tw`text-lg font-medium text-gray-700`;
const switchContainerStyle = tw`flex-row items-center`;
const switchOnTextStyle = tw`mr-3 text-green-600`;
const switchOffTextStyle = tw`mr-3 text-gray-400`;
const buttonWrapperStyle = tw`mt-6`;
const showSettingsButtonStyle = tw`bg-blue-500 p-4 rounded-xl shadow-md`;
const buttonTextStyle = tw`text-white text-center font-semibold text-lg`;


export default Setting;
