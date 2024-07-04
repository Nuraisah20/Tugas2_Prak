import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const [laundryServices, setLaundryServices] = useState([
    { id: '1', name: 'Premium Wash', description: 'Cuci Kering 1 hari jadi', image: 'https://tse4.mm.bing.net/th?id=OIP.pzbXfsZ_k-AvY3EgNh3yAAHaFQ&pid=Api&P=0&h=220' },
    { id: '2', name: 'Dry Cleanshing', description: 'Setlika saja 2 hari jadi', image: 'https://tse2.mm.bing.net/th?id=OIP.QucT-3nOKKcDFNQmI7borAHaD5&pid=Api&P=0&h=220' },
    { id: '3', name: 'Cuci Basah', description: 'Cuci biasa 3 hari jadi', image: 'https://tse1.mm.bing.net/th?id=OIP.jUO5BW9knH9bD2W3mESaQQHaFj&pid=Api&P=0&h=220' },
    { id: '4', name: 'Setrika', description: 'Cuci Kering', image: 'https://tse4.mm.bing.net/th?id=OIP.ZXk-1FrpmnUClPxwapGpBwHaFj&pid=Api&P=0&h=220' },
    { id: '5', name: 'Laundry Service 5', description: 'Description of Laundry Service 5', image: 'https://tse1.mm.bing.net/th?id=OIP.NFDaiGfg-BHNkGbngvxPYgHaE8&pid=Api&P=0&h=220' },
  ]);

  const [customerName, setCustomerName] = useState('');
  const [kgOfClothes, setKgOfClothes] = useState('');
  const [laundryDate, setLaundryDate] = useState('');
  const [laundryHistory, setLaundryHistory] = useState([]);

  const handleSave = () => {
    // Validasi input
    if (!customerName || !kgOfClothes || !laundryDate) {
      Alert.alert('Please fill in all fields.');
      return;
    }

    // Simpan data pelanggan baru ke riwayat laundry
    const newEntry = {
      id: Math.random().toString(),
      customerName: customerName,
      kgOfClothes: kgOfClothes,
      laundryDate: laundryDate,
    };
    setLaundryHistory([...laundryHistory, newEntry]);

    // Reset form setelah simpan
    setCustomerName('');
    setKgOfClothes('');
    setLaundryDate('');
  };

  const renderServiceItem = ({ item }:any) => (
    <View style={styles.serviceItem}>
      <Image source={{ uri: item.image }} style={styles.serviceImage} />
      <View style={styles.serviceDetails}>
        <Text style={styles.serviceName}>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );

  const renderLaundryHistoryItem = ({ item }:any) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyText}><Text style={{ fontWeight: 'bold' }}>Customer Name:</Text> {item.customerName}</Text>
      <Text style={styles.historyText}><Text style={{ fontWeight: 'bold' }}>Kg of Clothes:</Text> {item.kgOfClothes}</Text>
      <Text style={styles.historyText}><Text style={{ fontWeight: 'bold' }}>Laundry Date:</Text> {item.laundryDate}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Laundry App</Text>

      {/* Form input data pelanggan */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Customer Name"
          value={customerName}
          onChangeText={text => setCustomerName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Kg of Clothes"
          value={kgOfClothes}
          onChangeText={text => setKgOfClothes(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Laundry Date"
          value={laundryDate}
          onChangeText={text => setLaundryDate(text)}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Riwayat laundry */}
      <Text style={styles.historyTitle}>Laundry History</Text>
      <FlatList
        data={laundryHistory}
        keyExtractor={item => item.id}
        renderItem={renderLaundryHistoryItem}
        style={styles.flatList}
      />

      {/* Daftar layanan laundry */}
      <Text style={styles.servicesTitle}>Services</Text>
      <FlatList
        data={laundryServices}
        keyExtractor={item => item.id}
        renderItem={renderServiceItem}
        style={styles.flatList}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  historyItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  historyText: {
    marginBottom: 5,
  },
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  serviceImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  serviceDetails: {
    flex: 1,
  },
  serviceName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  flatList: {
    marginTop: 10,
  },
});
