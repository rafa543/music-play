import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/logo.svg'

export default function Home() {

    return (
        <>
            <View style={styles.topo}>
                <Logo height={50} width={150} fill="blue" />
                <Icon name="gear" size={40} color="#000"/>
                {/* <Image source={require('../assets/Vector.png')} /> */}
            </View>
            <View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // marginTop: 20
        //   alignItems: 'center',
        //   justifyContent: 'center',
    },
    logo: {
        // marginTop: 10,
        // marginLeft: 20
    },
    topo: {
        marginTop: 20,
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }

});