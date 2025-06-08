
// RaccordLaitonASouderEtVisser.js

import React, { useState } from 'react';
import { 
  View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Alert, ImageBackground 
} from 'react-native';

const backgroundImage = require('../assets/Fond.jpg');

const produits = [
  {
    id: '31100141',
    nom: 'Union Laiton',
    description: 'Male 341 Gcu 12 3/8 (sachet De 10)',
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100141.png'),
  },  
  {
    id: '31100142',
    nom: 'Union Laiton',
    description: 'Male 341 Gcu 14 3/8 (sachet De 10)',
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100142.png'),
  },
  {
    id: '31100143',
    nom: 'Union Laiton',
    description: 'Male 341 Gcu 12 1/2 (sachet De 10)',
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100143.png'),
  },
  {
    id: '31100144',
    nom: 'Union Laiton',
    description: 'Male 341 Gcu 14 1/2 Sphero-conique ',
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100144.png'),
  },
  {
    id: '31100364',
    nom: 'Union Laiton',
    description: 'Male 341 Gcu 14 3/4 Sphero-conique ',
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100364.png'),
  },
  {
    id: '31100145',
    nom: 'Union Laiton',
    description: 'Male 341 Gcu 16 1/2 (sachet De 10)',
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100145.png'),
  },
  {
    id: '31100146',
    nom: 'Union Laiton',
    description: ' Male 341 Gcu 16 3/4 (sachet De 10)',
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100146.png'),
  },
  {
    id: '31100147',
    nom: 'Union Laiton',
    description: 'Male 341 Gcu 18 1/2 Sphero-conique ',
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100147.png'),
  },
  {
    id: '31100148',
    nom: 'Union Laiton',
    description: ' Male 341 Gcu 18 3/4 (sachet De 10)',
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100148.png'),
  },
  {
    id: '31100150',
    nom: 'Union Laiton',
    description: 'Male 341 Gcu 22 3/4 Sphero-conique ',
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100150.png'),
  },
  {
    id: '31100151',
    nom: 'Union Laiton',
    description: "Male 341 Gcu 22 1' Sphero-conique",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100151.png'),
  },
  {
    id: '31100152',
    nom: 'Union Laiton',
    description: "Male 341 Gcu 28 1' Sphero-conique",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100152.png'),
  },
  {
    id: '31100160',
    nom: 'Union Laiton',
    description: "Male 341 Gcu 28 1'1/4 (sachet De 10)",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100160.png'),
  },
  {
    id: '31100211',
    nom: 'Union Laiton',
    description:  "Male 341 Gcu 32 1' (sachet De 10)",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100211.png'),
  },
  {
    id: '31100153',
    nom: 'Union Laiton',
    description: "Male 341 Gcu 32 1'1/4 (sachet De 10)",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100153.png'),
  },
  {
    id: '31100158',
    nom: 'Union Laiton',
    description: "Male 341 Gcu 35 1'1/4' Sphero-conique",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100158.png'),
  },
  {
    id: '31100157',
    nom: 'Union Laiton',
    description: "Male 341 Gcu 40 1'1/2 (sachet De 10)",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100157.png'),
  },
  {
    id: '31100155',
    nom: 'Union Laiton',
    description: "Male 341 Gcu 42 1'1/2 (sachet De 10)",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100155.png'),
  },
  {
    id: '31100212',
    nom: 'Union Laiton',
    description: "Male 341 Gcu 42 1'1/4 (sachet De 10)",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100212.png'),
  },
  {
    id: '31100156',
    nom: 'Union Laiton',
    description: "Male 341 Gcu 52 2' (sachet De 10)",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100156.png'),
  },
  {
    id: '31100159',
    nom: 'Union Laiton',
    description: "Male 341 Gcu 54 2' (sachet De 10)",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100158.png'),
  },
  {
    id: '31100121',
    nom: 'Union Laiton',
    description: "Femelle 340 Gcu 12 3/8 (sachet De 10)",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100121.png'),
  },
  {
    id: '31100122',
    nom: 'Union Laiton',
    description: "Femelle 340 Gcu 14 3/8 (sachet De 10)",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100122.png'),
  },
  {
    id: '31100123',
    nom: 'Union Laiton',
    description: "Femelle 340 Gcu 12 1/2' Sphero-conique",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100123.png'),
  },
  {
    id: '31100124',
    nom: 'Union Laiton',
    description: "Femelle 340 Gcu 14 1/2 (sachet De 10)",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100124.png'),
  },
  {
    id: '31100125',
    nom: 'Union Laiton',
    description: "Femelle 340 Gcu 16 1/2' Sphero-conique",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100125.png'),
  },
  {
    id: '31100126',
    nom: 'Union Laiton',
    description: "Femelle 340 Gcu 16 3/4 (sachet De 10)",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100126.png'),
  },
  {
    id: '31100127',
    nom: 'Union Laiton',
    description: "Femelle 340 Gcu 18 1/2' Sphero-conique",
    image: require('../assets/CVC/Laiton/RACCORD_LAITON_A_SOUDER_ET_A_VISSER/31100127.png'),
  },
];

export default function RaccordLaitonASouderEtVisser() {
  const [panier, setPanier] = useState([]);
  const [page, setPage] = useState('produits'); 

  const ajouterAuPanier = (produit) => {
    setPanier((currentPanier) => {
      const existant = currentPanier.find((p) => p.id === produit.id);
      if (existant) {
        return currentPanier.map((p) =>
          p.id === produit.id ? { ...p, quantite: p.quantite + 1 } : p
        );
      } else {
        return [...currentPanier, { ...produit, quantite: 1 }];
      }
    });
    Alert.alert('Ajouté au panier', `${produit.nom} ajouté avec succès`);
  };
  const produitsParDeux = [];
  for (let i = 0; i < produits.length; i += 2) {
    produitsParDeux.push(produits.slice(i, i + 2));
  }

  const incrementerQuantite = (id) => {
    setPanier((currentPanier) =>
      currentPanier.map((p) => (p.id === id ? { ...p, quantite: p.quantite + 1 } : p))
    );
  };

  const decrementerQuantite = (id) => {
    setPanier((currentPanier) =>
      currentPanier
        .map((p) => (p.id === id ? { ...p, quantite: p.quantite - 1 } : p))
        .filter((p) => p.quantite > 0)
    );
  };

  const confirmerCommande = () => {
    if (panier.length === 0) {
      Alert.alert('Panier vide', 'Ajoutez des produits avant de confirmer la commande.');
      return;
    }
    Alert.alert(
      'Commande confirmée',
      `Vous avez commandé ${panier.reduce((sum, p) => sum + p.quantite, 0)} produits.`,
      [{ text: 'OK', onPress: () => setPanier([]) }]
    );
    setPage('produits');
  };

  if (page === 'panier') {
    return (
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.containerPanier}>
          <Text style={styles.titre}>Votre Panier</Text>
          {panier.length === 0 ? (
            <Text style={styles.vide}>Votre panier est vide.</Text>
          ) : (
            <ScrollView style={{ flex: 1 }}>
              {panier.map((p) => (
                <View key={p.id} style={styles.itemPanier}>
                  <Image source={p.image} style={styles.imagePanier} resizeMode="contain" />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={styles.nom}>{p.nom}</Text>
                    <Text style={styles.description}>{p.description}</Text>
                    <View style={styles.quantiteContainer}>
                      <TouchableOpacity
                        style={styles.buttonQuantite}
                        onPress={() => decrementerQuantite(p.id)}
                      >
                        <Text style={styles.boutonTexte}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantite}>{p.quantite}</Text>
                      <TouchableOpacity
                        style={styles.buttonQuantite}
                        onPress={() => incrementerQuantite(p.id)}
                      >
                        <Text style={styles.boutonTexte}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          )}
          <View style={styles.footerPanier}>
            <TouchableOpacity style={styles.boutonValider} onPress={confirmerCommande}>
              <Text style={styles.boutonTexte}>Confirmer la commande</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boutonRetour} onPress={() => setPage('produits')}>
              <Text style={styles.boutonTexte}>Retour aux produits</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} style={styles.container}>
        <View style={styles.titreCadre}>
          <Text style={styles.titre}>Raccord Laiton à souder et visser</Text>
        </View>
        
        {produitsParDeux.map((groupe, index) => (
          <View key={index} style={styles.ligne}>
            {groupe.map((produit) => (
              <View key={produit.id} style={styles.produit}>
                {/* Cadre avec l'id au-dessus de l'image */}
                <View style={styles.idCadre}>
                  <Text style={styles.idTexte}>{produit.id}</Text>
                </View>

                <Image source={produit.image} style={styles.image} resizeMode="contain" />

                {/* Cadre autour du nom */}
                <View style={styles.nomCadre}>
                  <Text style={styles.nomTexte}>{produit.nom}</Text>
                </View>

                {/* Cadre autour de la description */}
                <View style={styles.descriptionCadre}>
                  <Text style={styles.descriptionTexte}>{produit.description}</Text>
                </View>

                <TouchableOpacity
                  style={styles.bouton}
                  onPress={() => ajouterAuPanier(produit)}
                >
                  <Text style={styles.boutonTexte}>Ajouter au panier</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.boutonVoirPanier} onPress={() => setPage('panier')}>
        <Text style={styles.boutonTexte}>
          Voir le panier ({panier.reduce((sum, p) => sum + p.quantite, 0)})
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    padding: 10,
    flex: 1,
  },
  titreCadre: {
    borderWidth: 2,
    borderColor: '#005864',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 15,
    alignSelf: 'center',
    backgroundColor: '#005864',
  },
  titre: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
    color: '#fff',
  },
  ligne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  produit: {
    width: '48%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  idCadre: {
    backgroundColor: 'rgba(0, 88, 100, 0.8)', 
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
    marginBottom: -15,
    minWidth: 100,
    alignItems: 'center',
  },
  idTexte: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  image: {
    width: 180,
    height: 180,
    marginBottom: 0,
  },
  nomCadre: {
    backgroundColor: 'rgba(0, 88, 100, 0.8)',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: -10,  // augmente ici (au lieu de 6)
    marginBottom: 4,
    minWidth: '80%',
    alignItems: 'center',
},
  nomTexte: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  descriptionCadre: {
    backgroundColor: 'rgba(0, 88, 100, 0.8)',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 12,
    minWidth: '80%',
    alignItems: 'center',
  },
  descriptionTexte: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },

  bouton: {
    backgroundColor: '#005864',
    borderWidth: 1,
    borderColor: '#0a9cb3',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  boutonTexte: {
    color: '#fff',
    fontWeight: 'bold',
  },
  boutonVoirPanier: {
    backgroundColor: '#005864',
    padding: 15,
    borderRadius: 8,
    position: 'absolute',
    bottom: 50,
    left: 15,
    right: 15,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },

  containerPanier: {
    flex: 1,
    padding: 15,
    paddingBottom: 100,
  },
  vide: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    color: '#fff',
  },
  itemPanier: {
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#004f55cc',
    padding: 10,
  },
  imagePanier: {
    width: 80,
    height: 80,
  },
  quantiteContainer: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
  },
  buttonQuantite: {
    backgroundColor: '#0a9cb3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  quantite: {
    marginHorizontal: 15,
    fontSize: 18,
    color: '#fff',
  },
  footerPanier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  boutonValider: {
    backgroundColor: '#005864',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  boutonRetour: {
    backgroundColor: '#0a9cb3',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
});















