import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useUser } from '../../context/UserContext';

const Profile = () => {
    const { userName,city } = useUser();

    return (
        <View style={container}>
            <View style={cardStyle}>                
                <View style={labelContainerStyle}>
                    <View style={tw`flex-row items-center`}>
                        <Text style={labelTextStyle}>Name:</Text>
                        <Text style={userNameTextStyle}>
                            {userName || 'Not set yet'}
                        </Text>
                    </View>
                    <View style={tw`flex-row items-center mt-2`}>
                        <Text style={labelTextStyle}>City:</Text>
                        <Text style={userNameTextStyle}>
                            {city || 'Not set yet'}
                        </Text>
                        </View>
                    <View style={tw`flex-row items-center mt-2`}>
                        <Text style={labelTextStyle}>Marital Status:</Text>
                        <Text style={userNameTextStyle}>
                            {/* Assuming maritalStatus is also part of UserContext */}
                            {useUser().maritalStatus || 'Not set yet'}
                        </Text>
                        </View>
                </View>
            </View>
        </View>
    );
};

export default Profile;

// Styles
const container = tw`flex-1 bg-gray-50 p-6`;
const cardStyle = tw`bg-white rounded-2xl shadow-lg p-6 mt-4`;
const labelContainerStyle = tw`mt-3`;
const labelTextStyle = tw`text-lg font-semibold text-gray-600`;
const userNameTextStyle = tw`text-xl text-gray-800 font-bold ml-1 px-2 py-1 rounded`;
