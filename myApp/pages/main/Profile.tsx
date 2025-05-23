import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const Profile = () => {
    return (
        <View style={tw`flex-1 items-center justify-center`}>
            <Text style={tw`text-xl font-bold`}>Hey "name", you live in "city" and your marital status: "maritalStatus"</Text>
        </View>
    );
};

export default Profile;
