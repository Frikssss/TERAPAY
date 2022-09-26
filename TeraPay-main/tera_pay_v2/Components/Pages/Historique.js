import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Button, TextInput, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HistoriqueList from './HistoriqueList';


const DivTitre = ({}) => {
    return (
        <View style={styles.identifier}>
            <Text style={{paddingTop:30, fontWeight: "bold", fontSize:25, paddingLeft: 20}}>Dernières activités</Text>                
        </View>
    )
};

const DivList = ({}) => {
    return (
    <View>
        <View style={styles.transac}>
            {/* à programmer sous forme de boucle. */}
            <Text style={styles.transac}>50.00€ transférés à TeraPay le DD/MM/YY.</Text>
            <Text style={styles.transac}>50.00€ transférés à TeraPay le DD/MM/YY.</Text>
            <Text style={styles.transac}>13.01€ reçu par XXXX le DD/MM/YY.</Text>
        </View>  
    </View>
    )
};




const Historique = ({}) => {
    return(
        <View style={styles.container}>
        <DivTitre />
        <DivList />
        </View>
    )
};

const styles = StyleSheet.create({
    identifier : {
        width: "80%",
        flexDirection: 'row',
    },
    transac: {
        fontStyle: 'italic',
        color: 'red',
        margin: 15,
    }
});

export default Historique;