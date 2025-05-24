import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useUser } from '../../componnets/context/UserContext';

const Profile = () => {
    const { userName, city, maritalStatus } = useUser();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.header}>Profile Details</Text>
                
                <View style={styles.content}>
                    {/* Name Section */}
                    <View style={styles.itemContainer}>
                        <View style={styles.iconContainer}>
                            <Text style={styles.icon}>👤</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>Name</Text>
                            <Text style={styles.value}>
                                {userName || 'Not set yet'}
                            </Text>
                        </View>
                    </View>

                    {/* City Section */}
                    <View style={styles.itemContainer}>
                        <View style={styles.iconContainer}>
                            <Text style={styles.icon}>🏙️</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>City</Text>
                            <Text style={styles.value}>
                                {city || 'Not set yet'}
                            </Text>
                        </View>
                    </View>

                    {/* Marital Status Section */}
                    <View style={styles.itemContainer}>
                        <View style={styles.iconContainer}>
                            <Text style={styles.icon}>💑</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.label}>Marital Status</Text>
                            <Text style={styles.value}>
                                {maritalStatus || 'Not set yet'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

// Style Definitions
const styles = {
    container: tw`flex-1 bg-gradient-to-b from-blue-50 to-blue-100 p-6`,
    card: tw`bg-white rounded-2xl shadow-lg p-6`,
    header: tw`text-2xl font-bold text-gray-800 mb-6 text-center`,
    content: tw`space-y-6`,
    itemContainer: tw`flex-row items-center bg-gray-50 rounded-xl p-4`,
    iconContainer: tw`w-12 h-12 bg-blue-100 rounded-full items-center justify-center mr-4`,
    icon: tw`text-2xl`,
    infoContainer: tw`flex-1`,
    label: tw`text-gray-500 text-sm`,
    value: tw`text-gray-800 text-lg font-medium mt-1`
};

export default Profile;
