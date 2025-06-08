import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';

const categories = [
  { title: 'Petit utilitaire', image: require('../assets/Petit_utilitaire.png') },
  { title: 'Moyen utilitaire', image: require('../assets/Moyen_utilitaire.png') },
  { title: 'Grand utilitaire', image: require('../assets/Grand_utilitaire.png') },
  { title: 'Très grand utilitaire', image: require('../assets/Très_grand_utilitaire.png') },
];

const backgroundImage = require('../assets/Fond.jpg');

export default function ReservationHomeScreen({ navigation, route }) {
  const user = route.params?.user;

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      {/* Bouton retour */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.backText}>← Retour</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.title}
            style={styles.card}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('VehicleList', { category: cat.title, user })}
          >
            <Image source={cat.image} style={styles.image} />
            <Text style={styles.text}>{cat.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  backText: {
    color: '#005864',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-end',
    marginTop: 5,
    marginBottom: 15,
  },
  contentContainer: {
    paddingTop: 100,
    paddingBottom: 40,
    alignItems: 'center',
  },
  card: {
    marginBottom: 25,
    alignItems: 'center',
    width: 220,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  image: {
    width: 220,
    height: 130,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginVertical: 12,
    fontWeight: '600',
  },
});








