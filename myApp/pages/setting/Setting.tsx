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
        location: true
    });

    const toggleSwitch = (key: keyof SwitchSettings) => {
        setSwitches(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <View style={tw`flex-1 bg-gray-50 p-6`}>            
            <View style={tw`bg-gray-100 p-4 rounded-2xl shadow-inner`}>
                {Object.entries(switches).map(([key, value]) => (
                    <View key={key} style={tw`flex-row items-center justify-between bg-white p-4 rounded-xl  mb-4`}>
                        <Text style={tw`text-lg font-medium text-gray-700`}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Text>
                        <View style={tw`flex-row items-center`}>
                            <Text style={tw`mr-3 ${value ? 'text-green-600' : 'text-gray-400'}`}>
                                {value ? 'ON' : 'OFF'}
                            </Text>
                            <Switch
                                trackColor={{ false: '#d1d5db', true: '#34d399' }}
                                thumbColor={value ? '#fff' : '#fff'}
                                ios_backgroundColor="#d1d5db"
                                onValueChange={() => toggleSwitch(key as keyof SwitchSettings)}
                                value={value}
                            />
                        </View>
                    </View>
                ))}
            </View>

            <View style={tw`mt-6`}>
                <TouchableOpacity 
                    style={tw`bg-blue-500 p-4 rounded-xl shadow-md`}
                    onPress={() => alert('Current Settings:\n' + 
                        Object.entries(switches)
                            .map(([key, value]) => `${key}: ${value ? 'ON' : 'OFF'}`)
                            .join('\n')
                    )}
                >
                    <Text style={tw`text-white text-center font-semibold text-lg`}>
                        Show All Settings
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Setting;
