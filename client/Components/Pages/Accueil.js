import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Button, TextInput, Image, TouchableHighlight, TouchableOpacity, Span } from 'react-native';
import { useNavigation } from '@react-navigation/native';

  const DivLogo = ({}) =>{
    return(
        <View>
            <Image source={require('../Images/terapaylogo.png')} alt="terapaylogo" style={{ width: 200, height: 196, backgroundColor: 'white', alignItems: 'center', borderRadius:110}} />
        </View>
    )
};
  
  function DivSolde () {
    const [solde, setSolde] = useState(0);
    function envoyer() {
      setSolde(solde + montant)
    }
    return (
      <View style={{margin:30, borderWidth:10, borderColor: 'white', height: 100, width: '100%'}}>
        <Text style={styles.textInterface}>Votre solde :</Text>
        <Text style={styles.solde}> {solde} €</Text>
      </View>
    )
  };

function DivVersement () {
    const navigation = useNavigation();
    const [montant, setMontant] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    function augmenterMontant() {
      setMontant({montant} + 50)
    console.log(montant)

    }
    console.log(montant)

    return(
        <View style={{borderWidth:15, borderColor:'white', margin:20, width:'100%', padding:'2%'}} >
          <TouchableOpacity onPress={() => navigation.navigate('Versement')}>
            <View style={{alignItems:'center'}}>
              <View style={{backgroundColor: '#7D5BA6', borderRadius: 30, height: 60, width: '80%'}}>
                <Text style={styles.boutonText}>Versements</Text>
              </View>
            </View>
          </TouchableOpacity>
            <View style={{ justifyContent:'center', alignItems:'center', margin:'5%'}}>
          <Text style={styles.versementText}>Quel montant souhaitez-vous envoyer ?</Text>
              {/* <TouchableOpacity >
              <Text style={{backgroundColor:'#F9FFFF', borderRadius:100/2,fontSize:35, textAlign:'center' }}> - </Text>
              </TouchableOpacity> */}
              <TextInput onChangeText={setMontant} value={montant} placeholder="0.00 €" keyboardType='numeric'
                style={{borderWidth:.4, borderRadius:3, height:50, width:'90%', backgroundColor:'#EEEEFA', paddingLeft:13}}/>
              {/* <TouchableOpacity  >
                <Text style={{backgroundColor:'#F9FFFF', borderRadius:100/2,fontSize:35, textAlign:'center', alignContent:'center', }}> + </Text>
              </TouchableOpacity> */}
          <Text style={styles.versementText}>Numéro de téléphone du contact</Text>
          <TextInput style={{height:40, borderWidth:.5, borderRadius:3, width:'90%', paddingLeft:13}} placeholder='06 ....' keyboardType='phone-pad'/>
            </View>
          <View style={{alignItems:'center'}}>
            <View style={{backgroundColor: '#0000FF', borderRadius: 30, height: 60, width: '80%'}}>
              <TouchableOpacity onPress={augmenterMontant}>
              <Text style={styles.boutonText}>Envoyer</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    )
};
  
  function DivPaiement () {
      const navigation = useNavigation();
        return (
          // <View style={styles.boutonConteneur}>
              <View style={styles.boutonContenu}>
                <TouchableOpacity onPress={() => {navigation.navigate('Paiement')}}>
                  <Text style={styles.boutonText}>Paiements</Text>
                </TouchableOpacity>
              </View>
            // </View>
          )
        };

  const DivCarte = ({}) => {
    return (
      <View>
        <Image source={{uri:'https://clg-francois.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=3311'}}
            style={{margin:40, width:300, height:200, borderWidth:9, borderColor:'#E03300', borderRadius: 7}}/>
      </View>
    )
  };

  const DivRecevoir = ({}) => {
    return(
      <View style={styles.boutonContenu}>
          <Text style={styles.boutonText}>Recevoir</Text>
      </View>
    )
  };

  function DivDepotAjout() {
    const navigation = useNavigation();
    return(
      <View style={styles.boutonConteneur}>
        <View style={styles.boutonContenu}>
          <TouchableOpacity onPress={() => {navigation.navigate('Deposer')}}>
            <Text style={styles.boutonText}>Déposer/Ajouter</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
};

function DivHistorique () {
    const navigation = useNavigation();
    return(
        <View style={{margin:'5%'}}>
        <View style={styles.historique}>
      <Text style={{fontWeight : 'bold', fontSize : 20, textAlign : "justify", color : '#7D5BA6'}}>
          <Text fontSize='16'>Dernières activités</Text>
      </Text>
          <View>
            <Text>dernière transaction</Text>
            <Text>envoyé à guest</Text>
            <Text>0.10€ reçus de Kaya Scodelario</Text>
          </View>
        </View>
        <View style={{backgroundColor:'lightgrey', margin:10, padding:15, alignItems:'center', borderRadius:20}}>
          <TouchableOpacity onPress ={() => {navigation.navigate('Historique')}}>
            <Text>Consulter mon historique</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
};

function DivProfil() {
    const navigation = useNavigation();
    return(
      <View style={styles.boutonConteneur}>
        <View style={styles.boutonContenu}>
              <TouchableOpacity onPress={() => {navigation.navigate('Profil')}}>
                      <Text style={styles.boutonText}>Profil</Text>
              </TouchableOpacity>
          </View>
        </View>
    )
};

  const DivParametres = ({}) => {
    return(
      <View style={styles.boutonConteneur}>
        <View style={styles.boutonContenu}>
            <Text style={styles.boutonText}>Paramètres</Text>
        </View>
      </View>
    )
  };
  
  function DivDeconnexion () {
    const navigation = useNavigation();
    return(
      <View style={styles.boutonConteneurLogOut}>
        <View style={styles.boutonContenuLogOut}>
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
            <Text style={styles.boutonTextLogOut}>DECONNEXION</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  };

const Accueil = ({}) => {
    return (
    <ScrollView>
    <View style={styles.container}>
      
      <DivLogo />
      <DivSolde />
      <DivVersement />
      <DivPaiement />
      <DivCarte />
      <DivRecevoir />
      <DivDepotAjout />
      <DivHistorique />
      <DivProfil/>
      <DivParametres />
      <DivDeconnexion />
    
  </View>
  </ScrollView>
    )
};

export default Accueil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  soldeText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  textInterface: {
    fontWeight : 'bold',
    fontSize : 25,
    textAlign : "center",
    color : '#E03300',
    // paddingTop : 10,
  },
  solde: {
    textAlign: "center",
    fontWeight: 'bold',
    color: 'green',
    fontSize: 25,
    marginTop: 10
  },
  button: {
    borderRadius: 50,
    backgroundColor: 'lightblue',
    height: 50,
  },
  buttonPaiement: {
    borderRadius: 10,
    backgroundColor: 'red',
    height: 50,
    width: "80%",
    margin: 10,
    justifyContent : 'center'
  },
  versementText: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  versementMontant: {
    margin: '5%',
    fontSize: 35,
    color: 'red',
    textAlign: 'center',
  },
  historique: {
    margin: 1,
    padding: '3%',
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#7D5BA6',
  },
  boutonConteneur: {
    paddingTop: 20,
    width: '100%',
  },
  boutonContenu: {
    backgroundColor : '#7D5BA6',
    borderRadius: 30,
    height: 60,
    width: '100%',
  },
  boutonText: {
    fontWeight : 'bold',
    fontSize : 25,
    textAlign : "center",
    color : 'white', 
    paddingTop : 10,
  },
  boutonConteneurLogOut: {
    width: '50%',
    borderColor : '#7D5BA6',
    borderWidth: 5,
    marginTop: 20,
  },
  boutonContenuLogOut: {
    borderRadius: 30,
    height: 60,
    width: '100%',
  },
  boutonTextLogOut: {
    fontWeight : 'bold',
    fontSize : 25,
    textAlign : "center",
    color : '#E03300', 
    paddingTop : 10,
  },
});