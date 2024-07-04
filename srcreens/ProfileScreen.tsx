import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.pzbXfsZ_k-AvY3EgNh3yAAHaFQ&pid=Api&P=0&h=220' }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Image
            source={{ uri: 'https://tse4.mm.bing.net/th?id=OIP.pzbXfsZ_k-AvY3EgNh3yAAHaFQ&pid=Api&P=0&h=220' }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Laundry Services</Text>
          <Text style={styles.profileDescription}>
          Laundry services, merupakan jasa yang menyediakan layanan mencuci dan merawat pakaian serta tekstil lainnya. 
          Bisnis ini umumnya menawarkan berbagai macam layanan untuk membersihkan pakaian, mulai dari pencucian biasa hingga layanan cuci kering, setrika, dan dry cleaning
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  profileDescription: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
