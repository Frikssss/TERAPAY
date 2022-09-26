import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableHighlight, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator(); 


const Div1 = ({}) => {
    return(
        <View style={styles.identifier}>
            <View style={{marginTop:'5%'}}>
            <Image source={{uri:"https://thechive.com/wp-content/uploads/2022/01/3e2abd0bcfcf7a6fccaf570012f7ffbc.jpg?attachment_cache_bust=3951256&quality=85&strip=info&w=600"}} style={{width:100, height:100, borderRadius:5}}/>
            </View>
            <Text style={{paddingTop:30,fontWeight: "bold", fontSize:25, paddingLeft: 20}}>Prénom Nom</Text>
        </View>
    )
}

const Div2 = ({}) => {
    return(
        <View style={styles.text}>
            <Text style = {{fontWeight: "bold", fontSize: 20}}>Votre mail</Text>
            <TextInput style = {{height: 50, fontSize: 15}} placeholder ="r.couery@tera-campus.com" editable={false}/>
        </View>
    )
}
 

const Div3 = ({}) => {
    return(
        <View style={styles.text}>
            <Text style = {{fontWeight: "bold", fontSize: 20}}>Age</Text>
            <TextInput style = {{height: 50, fontSize: 15}} placeholder ="19 ans" editable={false}/>
        </View>
    )
}

const Div4 = ({}) => {
    return(
        <View style={styles.text}>
            <Text style = {{fontWeight: "bold", fontSize: 20}}>Votre numéro de téléphone</Text>
            <TextInput style = {{height: 50, fontSize: 15}} placeholder ="07.XX.XX.XX.XX" editable={false}/>
        </View>
    )
}

function Div5 () {
    const navigation = useNavigation(); 
    return(
        <View style={styles.button}>
            <Button title="Modifier vos informations" onPress={() => {navigation.navigate('Modifier_profil')}} />
        </View>
    )
}

const Div6 = ({}) => {
    return(
        <View style={styles.button}>
            <TouchableHighlight>
                <View style={styles.test}>
                    <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Enregister une carte</Text>
                </View>
            </TouchableHighlight>
            {/* <Button title="Enregistrer une carte"/>   */} 
        </View> 
    )
}

const Div7 = ({}) => {
    return(
        <View style={styles.button}>
            <Image source={{uri: "https://clg-francois.monbureaunumerique.fr/lectureFichiergw.do?ID_FICHIER=3311"}} style={{width:300, height:200}}/> 
        </View>
    )
}



const Profil = ({}) => {
    return(
        <ScrollView>
        <View style={{alignItems:"center"}}>
            
                <Div1/>
                <Div2/>
                <Div3/>
                <Div4/>
                <Div5/>
                <Div6/>
                <Div7/>
        </View>
            </ScrollView>
    )
};


const styles = StyleSheet.create({
    identifier : {
        width: "80%",
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    text : {
        width: "80%",
        paddingTop: 25,
        alignItems: 'flex-start'
    },
    button : {
        alignItems: 'flex-start',
        paddingTop: 25,
    },
    test : {
        backgroundColor: '#E03300',
        padding: 25,
        borderRadius:35
    }
});

export default Profil;