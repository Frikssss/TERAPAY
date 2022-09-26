import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Historique from '../Pages/Historique';
import Accueil from '../Pages/Accueil';
import Versement from '../Pages/Versement';
import Profil from '../Pages/Profil';
import Modifier_profil from '../Pages/Modifier_profil';
import Paiement from '../Pages/Paiement';
import Home from '../Pages/Home';
import Deposer from '../Pages/Deposer';
import Inscription from '../Pages/Inscription';



const Stack = createNativeStackNavigator();

function Navigation({}) {

    return (

      <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">

            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Deposer" component={Deposer}/>
            <Stack.Screen name="Inscription" component={Inscription}/>
            <Stack.Screen name="Historique" component={Historique} />
            <Stack.Screen name="Versement" component={Versement} />
            <Stack.Screen name="Profil" component={Profil}
            

          options = {{

            headerTitleAlign : 'center',

            /* headerTitle : () =>(

              <Image style={{ width: 50, height: 50}} source={require("../../assets/terapay.png")}/>

              ), */

            color: 'white',

            headerStyle: {

              backgroundColor : '#040221'

            },

            headerTitleStyle: {

              color: 'white'

            },

            navigationOptions : ({ screenProps: { t } }) => ({

              headerTitle : () => <HeaderTitle>This is a very very long headertitle, that you can choose to break into multiple lines by changing numberOfLines property</HeaderTitle>,

            }),

          }}></Stack.Screen>
            <Stack.Screen name="Modifier_profil" component={Modifier_profil} />
            <Stack.Screen name="Paiement" component={Paiement} />
            <Stack.Screen name="Accueil" component={Accueil}/>
        </Stack.Navigator>

    </NavigationContainer>

    );
}
  export default Navigation;