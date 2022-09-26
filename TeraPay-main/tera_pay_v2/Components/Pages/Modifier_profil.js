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
                Modification
            </Text>
        </View>
    )
}

const Div1 = ({}) => {
    return(
        <View style={styles.identifier}>
            <Image source={{uri: "https://www.villa-thermae.fr/wp-content/uploads/2017/04/profile-icon-9.png"}} style={{width:100, height:100}}/>
            <Text style={{paddingTop:30,fontWeight: "bold", fontSize:25, paddingLeft: 20}} onPress={() => Linking.openURL('https://www.google.com/search?q=image+de+ch%C3%A8vre&rlz=1C1CHBF_frFR858FR858&sxsrf=AOaemvLs6GVNjGSrVO2FOj6XuA0yJvCeFw:1641994932936&source=lnms&tbm=isch&sa=X&ved=2ahUKEwij9szlq6z1AhWBzYUKHeyrADsQ_AUoAXoECAEQAw')}>Changer la photo</Text>
        </View>
    )
}

const Div2 = ({}) => {
    return(
        <View style={styles.text}>
            <Text style = {{fontWeight: "bold", fontSize: 20}}>Votre mail</Text>
            <TextInput style = {{height: 50, fontSize: 15}} placeholder ="r.couery@tera-campus.com"/>
        </View>
    )
}
 

const Div3 = ({}) => {
    return(
        <View style={styles.text}>
            <Text style = {{fontWeight: "bold", fontSize: 20}}>Age</Text>
            <TextInput style = {{height: 50, fontSize: 15}} placeholder ="19 ans"/>
        </View>
    )
}

const Div4 = ({}) => {
    return(
        <View style={styles.text}>
            <Text style = {{fontWeight: "bold", fontSize: 20}}>Votre numéro de téléphone</Text>
            <TextInput style = {{height: 50, fontSize: 15}} keyboardType='numeric' maxLength={10} placeholder ="07.XX.XX.XX.XX"/>
        </View>
    )
}

function Div5 () {
    
    const navigation = useNavigation();
    return(
        <View>
            <Button title="Enregistrer" onPress={() => {navigation.navigate('Profil')}}/>
        </View>
    )
}

const Modifier_profil = ({}) => {
    return(
        <View style={{marginLeft: 50, marginRight: 50,}}>
            <Div0/>
            <Div1/>
            <Div2/>
            <Div3/>
            <Div4/>
            <Div5/>
        </View>
    )
}

const styles = StyleSheet.create({
    div0 : {
        width: "80%",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 10,
    },
    identifier : {
        width: "80%",
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    text : {
        width: "80%",
        paddingTop: 25,
        alignItems: 'flex-start',
    },
    button : {
        width: "80%",
        alignItems: 'flex-start',
        paddingTop: 25,
    },
});



export default Modifier_profil;