import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useUser } from '../../context/UserContext';

const Profile = () => {
    const { userName } = useUser();

    return (
        <View style={tw`flex-1 bg-gray-50 p-6`}>
            <View style={tw`bg-white rounded-2xl shadow-lg p-6`}>
                <Text style={tw`text-2xl font-bold text-gray-800 mb-4 text-center`}>Profile</Text>
                
                <View style={tw`mt-4`}>
                    <Text style={tw`text-lg font-semibold text-gray-600`}>Name:</Text>
                    <Text style={tw`text-xl text-gray-800 mt-2`}>
                        {userName || 'Not set yet'}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Profile;
