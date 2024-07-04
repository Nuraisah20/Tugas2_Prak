import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.ZNKIifthx7lQ6OsPkjIp-AHaHJ&pid=Api&P=0&h=220' }}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>Nur Aisah</Text>
      <Text style={styles.role}>Admin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  role: {
    fontSize: 18,
    color: '#666666',
  },
});
