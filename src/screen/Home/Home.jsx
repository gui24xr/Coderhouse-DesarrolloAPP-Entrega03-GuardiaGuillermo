import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";


//Datos
import { baseDatos } from "../../data/agendaDatos";
//Estilos
import styles from './Home.styles';

//Componentes
import { HeadBar } from "../../components";
import { SubHeader } from "../../components";
import { ListaContactos } from "../../components";



const Home = ({ navigation, route }) => {
 

    const [datosMostrados, setDatosMostrados] = useState(baseDatos.getRegistros())
 
    

  return (
    <View style={styles.container}>
        <HeadBar title='Messenger' />
        <SubHeader navigation={navigation}/>
        <ListaContactos datosMostrados={datosMostrados} formaRenderizado='chatsScreen' />
    </View>
  );
}

export default Home

