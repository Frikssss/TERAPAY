import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
/* import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'; */


/* const Stack = createNativeStackNavigator();  */


const Div1 = ({}) => {
    return(
        <View style={styles.identifier}>
            <Text style={{paddingTop:30,fontWeight: "bold", fontSize:25, paddingLeft: 20}}>Paiement</Text>
        </View>
    )
}

const Div2 = ({}) => {
    return(
        <View style={styles.text}>
            <Image source={{uri: "https://clg-francois.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=3311"}} style={{width:300, height:200}}/> 
        </View>
    )
}

const Div3 = ({}) => {
    return(
        <View style={styles.text}>
            <Text style = {{fontWeight: "bold", fontSize: 20}}>Approchez votre téléphone du TPE</Text>
        </View>
    )
}

const Div4 = ({}) => {
    return(
        <View >
            <Image source={{uri:'https://th.bing.com/th/id/R.99c132fbe2acbafe28b614a7a953decc?rik=4FOTErJl1UCJxw&riu=http%3a%2f%2ffantazia.f.a.pic.centerblog.net%2f112530e3_1.gif&ehk=EAYyM5kv9R4qYeew7eYfsvNyRvP%2fmEwtsQx8mkyuUrA%3d&risl=1&pid=ImgRaw&r=0'}} style={{width: 200, height: 200}}/>
        </View>
    )
};
/* style={styles.text} */


const Paiement = ({}) => {
    return(
        <View style={{alignItems:'center'}}>
            <Div1/>
            <Div2/>
            <Div3/>
            <Div4/>
        </View>
    )
};


const styles = StyleSheet.create({
    identifier : {
        width: "80%",
        flexDirection: 'row',
    },
    text : {
        width:"80%",
        paddingTop: 25,
    },
    button : {
        width:"80%",
        alignItems: 'center',
        paddingTop: 25,
    },
});

export default Paiement;