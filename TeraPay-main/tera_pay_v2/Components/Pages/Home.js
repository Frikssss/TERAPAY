import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Linking, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Div1 = ({}) =>{
    return(
        <View style={{backgroundColor: 'white', alignItems: 'center'}}>
            <Image source={require('../Images/terapaylogo.png')} alt="terapaylogo" style={{ width: 200, height: 196}} />
        </View>
    )
}

const Div2 = ({}) =>{
    return(
        <View style={{backgroundColor: 'white', paddingTop: 10, borderStyle: 'solid', borderBottomWidth: 1}}>
            <TextInput style= {{height : 50, textAlign: 'center', width: 200, paddingRight : 75}} placeholder = "Nom d'utilisateur"/>
        </View>
    )
}

const Div3 = ({}) =>{
    return(
        <View style={{backgroundColor: 'white', paddingTop: 25, borderStyle: 'solid', borderBottomWidth: 1}}>
            <TextInput style= {{height : 50, textAlign: 'center', width: 200, paddingRight : 100}} placeholder = "Mot de passe"/>
        </View>
    )
}

const Div4 = ({}) =>{
    return(
        <View style={{backgroundColor: 'white', paddingTop: 10, paddingBottom: 10}}>
            <Text style={{fontStyle : "italic", fontSize: 15, color: '#DBD2C5', textAlign: 'right'}} onPress={() => Linking.openURL('https://www.bing.com/search?q=test+de+briggs+myers+stats&cvid=ccf5179db9a64caf9b765f500114be3f&aqs=edge.0.69i59l2j69i57j0l6.2172j0j1&pglt=43&FORM=ANNAB1&PC=HCTS')}>Mot de passe oublié ?</Text>
        </View>
    )
}

function Div5 () {
    const navigation = useNavigation();

    return(
        <View style={{backgroundColor: 'white', paddingTop: 5}}>
        <View style= {{backgroundColor : '#7D5BA6', borderRadius: 30, height: 60}}>
            <TouchableOpacity onPress={() => {navigation.navigate('Inscription')}}>
                <View>
                    <Text style={{fontWeight : 'bold', fontSize : 25, textAlign : "center", color : 'white', paddingTop : 10}}>
                        Créer un nouveau compte
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    )
};

function Div6 () {
    const navigation = useNavigation();
    return(
        <View style={{backgroundColor: 'white', paddingTop: 5}}>
            <View style= {{backgroundColor : '#7D5BA6', borderRadius: 30, height: 60}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Accueil')}}>
                    <View>
                        <Text style={{fontWeight : 'bold', fontSize : 25, textAlign : "center", color : 'white', paddingTop : 10}}>
                            Se connecter
                        </Text> 
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};


const Home = ({}) => {
    return (
        <View style={{borderLeftWidth: 40, borderRightWidth: 40, borderColor: 'white'}}>
            <Div1/>
            <Div2/>
            <Div3/>
            <Div4/>
            <Div6/>
            <Div5/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    stripe: {
      flex: 1,
      backgroundColor: 'black',  
    },
    Input: {
      flex: 1,
      backgroundColor: 'pink',
      width: '70%',
      padding: 30,
    },
    clickableText: {
      flex: 1,
      backgroundColor: 'orange',
    },
    boutonConteneur: {
      backgroundColor: 'white',
      paddingTop: 5,
    },
    boutonContenu: {
      backgroundColor : '#E03300',
      borderRadius: 30,
      height: 60,
    },
    boutonText: {
      fontWeight : 'bold',
      fontSize : 25,
      textAlign : "center",
      color : 'white',
      paddingTop : 10,
    },
    textInterface: {
        fontWeight : 'bold',
        fontSize : 20,
        textAlign : "center",
        color : '#E03300',
        paddingTop : 10,
    },

});

export default Home;