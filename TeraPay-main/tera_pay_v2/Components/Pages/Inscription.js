import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const DivLogo = ({}) => {
    return (

        <View style = {{backgroundColor:'white',alignItems:'center'}}>
            <Image source={require('../Images/terapaylogo.png')} alt="terapaylogo" style={{width:200, height:196}} />
        </View>

    )
}

const DivTextInput = (props) => {

    return(

        <View style={{backgroundColor: 'white', paddingTop: 0, borderStyle: 'solid', borderBottomWidth: 1}}>

            <TextInput style= {{height : 50, textAlign: 'left', width: 200}} placeholder = {props.text}/>

        </View>

    )

}

const DivTextInputDouble = (props) => {

    return(

        <View style={{backgroundColor: 'white', paddingTop: 0, borderStyle: 'solid', borderBottomWidth: 1, flexDirection: 'row', alignContent: 'space-around'}}>

            <TextInput style= {{height : 50, textAlign: 'left', width: 200}} placeholder = {props.textLeft}/>
            <TextInput style= {{height : 50, textAlign: 'left', width: 200}} placeholder = {props.textRight}/>

        </View>

    )

}


function DivButton (props) {

    const navigation = useNavigation();
    return(
        <View style={{backgroundColor: 'white', paddingTop: 20}}>
        <View style= {{backgroundColor : '#E03300', borderRadius: 30, height: 60}}>
            <TouchableOpacity onPress={() => {navigation.navigate('Accueil')}}>
                <View>
                    <Text style={{fontWeight : 'bold', fontSize : 25, textAlign : "center", color : 'white', paddingTop : 10}}>
                        {props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    )
};

function DivTextBold (props) {
    const navigation = useNavigation();

    return(
        <View style={{backgroundColor: 'white', paddingTop: 5, flex: 1}}>
        <View style= {{backgroundColor : 'white', borderRadius: 30, height: 40}}>
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                <View>
                    <Text style={{fontWeight : 'bold', fontSize : 20, textAlign : "center", color : '#E03300', paddingTop : 10}}>
                        {props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    )
}

const Inscription = () => {
    return (
        <View style={{borderLeftWidth: 40, borderRightWidth: 40, borderColor: 'white', flex : 1}}>
            <DivLogo/>
            <DivTextInputDouble textLeft="Nom" textRight="Prénom"/>
            <DivTextInput text="Adresse e-mail"/>
            <DivTextInput text="Numéro de téléphone"/>
            <DivButton text = "Inscription"/>
            <DivTextBold text= "Deja un compte ? Se connecter"/>
        </View>
    )
}



export default Inscription;

//exporting Div
export {DivLogo};
export {DivTextInput};
