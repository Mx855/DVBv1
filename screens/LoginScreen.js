import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../config/firebaseConfig';

export default function LoginScreen() {
  useEffect(() => {
    console.log("🔥 Firebase auth ready ?", auth);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Écran de Connexion OK</Text>
    </View>
  );
}

