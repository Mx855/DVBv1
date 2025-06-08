import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const background = require('../assets/Fond.jpg');

const FicheSuiviScreen = () => {
  const navigation = useNavigation();

  const [date, setDate] = useState('');
  const [nomPrenom, setNomPrenom] = useState('');
  const [immatriculation, setImmatriculation] = useState('');
  const [kilometrage, setKilometrage] = useState('');
  const [observations, setObservations] = useState('');

  const controles = [
    'Pression des pneumatiques',
    'Usure des pneumatiques',
    'Niveau d’huile',
    'Éclairage et feux de signalisation',
    'Essuie-glace',
    'Rétroviseur',
    'Propreté extérieure véhicule',
    'Propreté intérieure véhicule',
    'Rangement véhicule',
  ];

  const accessoires = [
    'Carte grise',
    'Vignette contrôle technique',
    'Vignette Crit’Air',
    'Triangle',
    'Extincteur',
    'Trousse à pharmacie',
  ];

  const [controleValues, setControleValues] = useState({});
  const [accessoireValues, setAccessoireValues] = useState({});

  useEffect(() => {
    const today = new Date();
    const formatted = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${today.getFullYear()}`;
    setDate(formatted);
  }, []);

  const handleChange = (group, key, value) => {
    if (group === 'controle') {
      setControleValues({ ...controleValues, [key]: value });
    } else {
      setAccessoireValues({ ...accessoireValues, [key]: value });
    }
  };

  const envoyerFiche = async () => {
    const fiche = {
      date,
      nomPrenom,
      immatriculation,
      kilometrage,
      observations,
      controle: controleValues,
      accessoires: accessoireValues,
    };

    try {
      const response = await fetch('https://your-server-url.com/api/fiche', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fiche),
      });

      if (response.ok) {
        Alert.alert('Succès', 'Fiche envoyée avec succès');
      } else {
        Alert.alert('Erreur', 'Échec de l’envoi de la fiche');
      }
    } catch (error) {
      Alert.alert('Erreur', 'Problème de connexion ou serveur injoignable');
    }
  };

  const renderRadioButtons = (group, item) => (
    <View style={styles.radioRow}>
      <TouchableOpacity
        style={styles.radioCircle}
        onPress={() => handleChange(group, item, 'ok')}
      >
        <View
          style={
            controleValues[item] === 'ok' || accessoireValues[item] === 'ok'
              ? styles.radioSelected
              : styles.radioUnselected
          }
        />
      </TouchableOpacity>
      <Text style={styles.radioLabel}>Ok</Text>

      <TouchableOpacity
        style={styles.radioCircle}
        onPress={() => handleChange(group, item, 'pasok')}
      >
        <View
          style={
            controleValues[item] === 'pasok' || accessoireValues[item] === 'pasok'
              ? styles.radioSelected
              : styles.radioUnselected
          }
        />
      </TouchableOpacity>
      <Text style={styles.radioLabel}>Pas ok</Text>
    </View>
  );

  return (
    <ImageBackground source={background} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Fiche de Suivi de Véhicule</Text>

        <Text style={styles.label}>Date</Text>
        <TextInput value={date} onChangeText={setDate} style={styles.input} editable={false} />

        <Text style={styles.label}>Nom Prénom</Text>
        <TextInput value={nomPrenom} onChangeText={setNomPrenom} style={styles.input} />

        <Text style={styles.label}>Immatriculation</Text>
        <TextInput value={immatriculation} onChangeText={setImmatriculation} style={styles.input} />

        <Text style={styles.label}>Kilométrage</Text>
        <TextInput
          value={kilometrage}
          onChangeText={setKilometrage}
          keyboardType="numeric"
          style={styles.input}
        />

        <Text style={styles.sectionTitle}>Contrôle Technique</Text>
        {controles.map((item) => (
          <View key={item} style={styles.radioGroup}>
            <Text style={styles.itemLabel}>{item}</Text>
            {renderRadioButtons('controle', item)}
          </View>
        ))}

        <Text style={styles.sectionTitle}>Vérification Accessoires</Text>
        {accessoires.map((item) => (
          <View key={item} style={styles.radioGroup}>
            <Text style={styles.itemLabel}>{item}</Text>
            {renderRadioButtons('accessoire', item)}
          </View>
        ))}

        <Text style={styles.label}>Observation ou entretien à prévoir</Text>
        <TextInput
          value={observations}
          onChangeText={setObservations}
          style={[styles.input, { height: 80 }]}
          multiline
        />

        <TouchableOpacity onPress={envoyerFiche} style={styles.button}>
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    backgroundColor: '#005864',
    color: 'white',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',  // CENTRER LES LABELS
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',   // CENTRER LE TEXTE SAISI
  },
  sectionTitle: {
    backgroundColor: '#005864',
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemLabel: {
    backgroundColor: '#005864',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  radioGroup: {
    marginBottom: 10,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // centre horizontalement
    marginBottom: 5,
    backgroundColor: '#005864',
    borderRadius: 5,
    paddingVertical: 5,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#005864',
  },
  radioSelected: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: 'white',
  },
  radioUnselected: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#005864',
  },
  radioLabel: {
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#005864',
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default FicheSuiviScreen;












