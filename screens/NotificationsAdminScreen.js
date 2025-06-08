import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NotificationsAdminScreen() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const chargerNotifications = async () => {
      const data = await AsyncStorage.getItem('notifications');
      if (data) setNotifications(JSON.parse(data));
    };
    chargerNotifications();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.notif}>
            <Text style={styles.titre}>{item.titre}</Text>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.date}>{new Date(item.date).toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'white' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  notif: { borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: 10 },
  titre: { fontSize: 16, fontWeight: 'bold' },
  message: { fontSize: 14 },
  date: { fontSize: 12, color: 'gray', marginTop: 4 }
});







