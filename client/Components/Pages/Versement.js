import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator(); 

const Div0 =({}) => {
    return(
        <View style={styles.div0}>
            <Text style={{
                fontSize: 30,
                fontWeight: "bold",}}>
                Versement
            </Text>
        </View>
    )
}

const Div1 = ({}) => {
    return(
        <View style={styles.div1}>
            <Text style = {{fontWeight: "bold", fontSize: 20}}>Choisissez combien envoyer : </Text>
            <TextInput style = {{height: 50, fontSize: 30}} keyboardType='numeric' placeholder ="20.00"/>
        </View>
    )
}

const Div2 = ({}) => {
    return(
        <View style={styles.div2}>
            <Text style = {{fontWeight: "bold", fontSize: 20,}}>Numéro de téléphone du contact : </Text>
            <TextInput keyboardType='numeric' maxLength={10} style = {{height: 50, fontSize: 20, borderStyle: 'solid', borderWidth: 1,  }} placeholder =""/>
        </View>
    )
}

const Div3 = ({}) => {
    return(
        <View style={styles.button}>
            <Button title="Enregistrer"/>   
        </View> 
    )
}

const Div4 = ({}) => {
    return(
        <View style={styles.div4}>
            <Text style = {{fontWeight: "bold", fontSize: 20, textAlign:'center'}}>Où via NFC : </Text>
            <Image source={{uri: "https://clg-francois.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=3311"}} style={{width:300, height:200}}/>
        </View>
    )
}

const Versement = ({}) => {
    return(
        <View style={{alignItems:"center"}}>
            <Div0/>
            <Div1/>
            <Div2/>
            <Div3/>
            <Div4/>
        </View>
    )
}

const styles = StyleSheet.create({
    div0 : {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 10,
    },
    div1 : {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 10,
    },
    div2 : {
        width: '80%',
        justifyContent: 'center',
        paddingTop: 10,
    },
    div4 : {
        width: '80%',
        justifyContent: 'center',
        paddingTop: 10,
    },
    identifier : {
        width: '80%',
        flexDirection: 'row',
    },
    text : {
        width:'80%',
        paddingTop: 25,
    },
    button : {
        width:'80%',
        alignItems: 'flex-start',
        paddingTop: 25,
    },
});

export default Versement;