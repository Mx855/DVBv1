import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

import { db } from '../config/firebaseConfig';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  Timestamp,
} from 'firebase/firestore';

export default function ReservationFormScreen({ route, navigation }) {
  const { plate } = route.params;

  const [nomPrenom, setNomPrenom] = useState('');
  const [raison, setRaison] = useState('');
  const [dateDepart, setDateDepart] = useState(new Date());
  const [dateRetour, setDateRetour] = useState(new Date());
  const [showDateDepartPicker, setShowDateDepartPicker] = useState(false);
  const [showDateRetourPicker, setShowDateRetourPicker] = useState(false);
  const [creneau, setCreneau] = useState('Journée entière');
  const [loading, setLoading] = useState(false);

  const onDateDepartChange = (event, selectedDate) => {
    setShowDateDepartPicker(false);
    if (selectedDate) {
      setDateDepart(selectedDate);
      if (dateRetour < selectedDate) {
        setDateRetour(selectedDate);
      }
    }
  };

  const onDateRetourChange = (event, selectedDate) => {
    setShowDateRetourPicker(false);
    if (selectedDate) setDateRetour(selectedDate);
  };

  const checkReservationConflict = async () => {
    const q = query(
      collection(db, 'reservations'),
      where('plate', '==', plate)
    );

    const querySnapshot = await getDocs(q);

    for (const docSnap of querySnapshot.docs) {
      const res = docSnap.data();
      const existingStart = res.dateDepart.toDate();
      const existingEnd = res.dateRetour.toDate();

      // Vérification chevauchement avec gestion créneau
      if (
        dateDepart <= existingEnd &&
        dateRetour >= existingStart
      ) {
        if (
          res.creneau === 'Journée entière' ||
          creneau === 'Journée entière' ||
          res.creneau === creneau
        ) {
          return true; // conflit trouvé
        }
      }
    }
    return false; // pas de conflit
  };

  const handleSubmit = async () => {
    if (!nomPrenom.trim()) {
      Alert.alert('Erreur', 'Veuillez entrer votre nom et prénom.');
      return;
    }
    if (!raison.trim()) {
      Alert.alert('Erreur', 'Veuillez entrer une raison.');
      return;
    }
    if (dateRetour < dateDepart) {
      Alert.alert('Erreur', 'La date de retour doit être après la date de départ.');
      return;
    }

    setLoading(true);

    try {
      const conflict = await checkReservationConflict();
      if (conflict) {
        Alert.alert('Véhicule déjà réservé', 'Le véhicule est déjà réservé sur cette période.');
        setLoading(false);
        return;
      }

      await addDoc(collection(db, 'reservations'), {
        plate,
        nomPrenom,
        raison,
        dateDepart: Timestamp.fromDate(dateDepart),
        dateRetour: Timestamp.fromDate(dateRetour),
        creneau,
        createdAt: Timestamp.now(),
      });

      Alert.alert(
        'Réservation enregistrée',
        `Véhicule ${plate} réservé du ${dateDepart.toLocaleDateString()} au ${dateRetour.toLocaleDateString()}.`
      );

      navigation.goBack();
    } catch (error) {
      console.error('Erreur en sauvegardant la réservation : ', error);
      Alert.alert('Erreur', "Impossible d'enregistrer la réservation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Réservation du véhicule</Text>
      <Text style={styles.label}>Plaque d'immatriculation :</Text>
      <Text style={styles.plate}>{plate}</Text>

      <Text style={styles.label}>Nom et prénom :</Text>
      <TextInput
        style={styles.input}
        value={nomPrenom}
        onChangeText={setNomPrenom}
        placeholder="Nom et prénom"
      />

      <Text style={styles.label}>Raison :</Text>
      <TextInput
        style={styles.input}
        value={raison}
        onChangeText={setRaison}
        placeholder="Motif de la réservation"
      />

      <Text style={styles.label}>Date de départ :</Text>
      <Button
        title={dateDepart.toLocaleDateString()}
        onPress={() => setShowDateDepartPicker(true)}
      />
      {showDateDepartPicker && (
        <DateTimePicker
          value={dateDepart}
          mode="date"
          display="default"
          onChange={onDateDepartChange}
        />
      )}

      <Text style={styles.label}>Date de retour :</Text>
      <Button
        title={dateRetour.toLocaleDateString()}
        onPress={() => setShowDateRetourPicker(true)}
      />
      {showDateRetourPicker && (
        <DateTimePicker
          value={dateRetour}
          mode="date"
          display="default"
          onChange={onDateRetourChange}
        />
      )}

      <Text style={styles.label}>Créneau :</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={creneau} onValueChange={setCreneau}>
          <Picker.Item label="Matin" value="Matin" />
          <Picker.Item label="Après-midi" value="Après-midi" />
          <Picker.Item label="Journée entière" value="Journée entière" />
        </Picker>
      </View>

      <Button
        title={loading ? "Enregistrement..." : "Valider la réservation"}
        onPress={handleSubmit}
        disabled={loading}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: '600',
  },
  plate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#005864',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#005864',
    borderRadius: 6,
    padding: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#005864',
    borderRadius: 6,
    marginBottom: 20,
  },
});

























