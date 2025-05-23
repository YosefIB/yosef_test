import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const Main = () => {
    return (
        <View style={tw`flex-1 items-center justify-center`}>
            <Text style={tw`text-xl font-bold`}>שלשדגום</Text>
        </View>
    );
};

export default Main;
