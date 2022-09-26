import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; */


/* const Stack = createNativeStackNavigator();  */


const Div1 = ({}) => {
    return(
        <View style={styles.identifier}>
            <Text style={{paddingTop:30,fontWeight: "bold", fontSize:25, paddingLeft: 20}}>Récupérer</Text>
        </View>
    )
}

const Div2 = ({}) => {
    return(
        <View style={styles.text}>
        <Text style = {{fontWeight: "bold", fontSize: 20}}>Indiquez le montant à transférer de votre compte TeraPay vers votre compte bancaire</Text> 
        </View>
    )
}
 

const Div3 = ({}) => {
    return(
        <View style={styles.textInput}>
            <TextInput placeholder='20.00' style = {{fontWeight: "bold", fontSize: 35}}/>
        </View>
    )
}

const Div4 = ({}) => {
    return(
        <View>
            <Image source={{uri:'https://clg-francois.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=3311'}} style={{width: 300, height: 200}}/>
        </View>
    )
}
/* style={styles.text} */



const App = ({}) => {
    return(
        <View style={{marginLeft: 50, marginRight: 50,}}>
            <Div1/>
            <Div2/>
            <Div3/>
            <Div4/>
        </View>
    )
}


const styles = StyleSheet.create({
    identifier : {
        width: 300,
        flexDirection: 'row',
        alignItems : 'center'
    },
    text : {
        width:300,
        paddingTop: 25,
        alignItems : 'center'
    },
    button : {
        width:300,
        alignItems: 'center',
        paddingTop: 25,
    },
    textInput : {
        alignItems : 'center'
    }
});

export default App;