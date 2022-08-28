import React from 'react'
import * as eva from '@eva-design/eva';
import { StyleSheet, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../assets/logo.svg'
import Favorite from '../assets/favorite.svg'
import Labrury from '../assets/library-music.svg'
import Recent from '../assets/recent.svg'
import Retwwet from '../assets/retweet-solid.svg'
import Shuffle from '../assets/shuffle-solid.svg'
import Music from '../assets/img-music.svg'
import Frame from '../assets/Frame.svg'
import Vector from '../assets/Vector.svg'
import { Text, Button, Layout, BottomNavigation, BottomNavigationTab, TabView, Tab } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline' />
);

export default function Home() {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <View style={{ backgroundColor: "#EFEFF1" }}>
            <View style={styles.topo}>
                <Logo height={50} width={150} fill="blue" />
                <Icon name="gear" size={40} color="#000" />
            </View>
            <View style={{ position: "relative" }}>
                <TextInput style={styles.busca} placeholder="Search musics" />
                <Icon name="search" size={25} color="#1252C9"
                    style={{ position: "absolute", top: 40, left: 320 }} />
            </View>
            <View style={styles.atalhos}>
                <View style={styles.card}>
                    <Favorite height={40} width={100} fill="blue" />
                    <Text>Favoritas</Text>
                </View>
                <View style={styles.card}>
                    <Labrury height={40} width={100} />
                    <Text>Favoritas</Text>
                </View>
                <View style={styles.card}>
                    <Recent height={40} width={100} />
                    <Text>Favoritas</Text>
                </View>
            </View>

            <TabView
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                <Tab title='Musicas'>
                    <Layout style={styles.tabContainer}>
                        <View style={{
                            justifyContent: 'space-between', paddingHorizontal: 35,
                            paddingTop: 16,
                            flexDirection: 'row',
                        }}>
                            <Shuffle height={25} width={25} fill="black" />
                            <Retwwet height={30} width={30} fill="black" />
                        </View>
                        <View style={{justifyContent: 'space-between', paddingHorizontal: 25,
                            paddingTop: 16,
                            flexDirection: 'row', alignItems: 'center'}}>
                            <Music height={50} width={50} />
                            <View>
                                <Text category="s1"  >Turning page</Text>
                                <Text category="c2" appearance='hint'>Corey Morton</Text>
                            </View>
                            <Text appearance='hint'>04:32</Text>
                            <Frame height={25} width={25}/>
                            <Vector height={20} width={20}/>
                        </View>
                        <View style={{justifyContent: 'space-between', paddingHorizontal: 25,
                            paddingTop: 16,
                            flexDirection: 'row', alignItems: 'center'}}>
                            <Music height={50} width={50} />
                            <View>
                                <Text category="s1"  >Turning page</Text>
                                <Text category="c2" appearance='hint'>Corey Morton</Text>
                            </View>
                            <Text appearance='hint'>04:32</Text>
                            <Frame height={25} width={25}/>
                            <Vector height={20} width={20}/>
                        </View>
                        <View style={{justifyContent: 'space-between', paddingHorizontal: 25,
                            paddingTop: 16,
                            flexDirection: 'row', alignItems: 'center'}}>
                            <Music height={50} width={50} />
                            <View>
                                <Text category="s1"  >Turning page</Text>
                                <Text category="c2" appearance='hint'>Corey Morton</Text>
                            </View>
                            <Text appearance='hint'>04:32</Text>
                            <Frame height={25} width={25}/>
                            <Vector height={20} width={20}/>
                        </View>
                        <View style={{justifyContent: 'space-between', paddingHorizontal: 25,
                            paddingTop: 16,
                            flexDirection: 'row', alignItems: 'center'}}>
                            <Music height={50} width={50} />
                            <View>
                                <Text category="s1"  >Turning page</Text>
                                <Text category="c2" appearance='hint'>Corey Morton</Text>
                            </View>
                            <Text appearance='hint'>04:32</Text>
                            <Frame height={25} width={25}/>
                            <Vector height={20} width={20}/>
                        </View>

                        <View style={{justifyContent: 'space-between', paddingHorizontal: 25,
                            paddingTop: 16,
                            flexDirection: 'row', alignItems: 'center'}}>
                            <Music height={50} width={50} />
                            <View>
                                <Text category="s1"  >Turning page</Text>
                                <Text category="c2" appearance='hint'>Corey Morton</Text>
                            </View>
                            <Text appearance='hint'>04:32</Text>
                            <Frame height={25} width={25}/>
                            <Vector height={20} width={20}/>
                        </View>
                    </Layout>
                </Tab>
                <Tab title='Albuns'>
                    <Layout style={styles.tabContainer}>
                        <Text category='h5'>ORDERS</Text>
                    </Layout>
                </Tab>
                <Tab title='Artistas'>
                    <Layout style={styles.tabContainer}>
                        <Text category='h5'>TRANSACTIONS</Text>
                    </Layout>
                </Tab>
                <Tab title='Pastas'>
                    <Layout style={styles.tabContainer}>
                        <Text category='h5'>TRANSACTIONS</Text>
                    </Layout>
                </Tab>
            </TabView>

        </View>
    )
}

const styles = StyleSheet.create({
    topo: {
        marginTop: 40,
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buscaBox: {
        position: 'relative'
    },
    busca: {
        marginTop: 30,
        marginHorizontal: 20,
        backgroundColor: "#74B0E8",
        borderRadius: 20,
        height: 48,
        paddingLeft: 20,
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        textDecorationLine: "none"
    },
    atalhos: {
        marginTop: 40,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    card: {
        flexDirection: "column",
        // backgroundColor: "red",
        alignItems: "center",
        backgroundColor: "white",
        // paddingTop: 10,
        paddingHorizontal: 3,
        paddingVertical: 15,
        borderRadius: 5
    },
    tabContainer: {
        height: 500,
        // alignItems: 'center',
        // justifyContent: 'center',


    },
});