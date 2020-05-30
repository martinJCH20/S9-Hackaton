import React, { Component } from 'react'
import { View,Text, StyleSheet,  SafeAreaView } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerSafeArea: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    containerTitle: {
        width: '100%',
        marginBottom: '10%',
        marginTop: '10%',
        alignItems:'center'
    },
    title: {
        fontSize: 30,
        fontFamily: 'Comic Sans'
    }
})
export default class Cart extends Component {
    render(){
        return(
            <SafeAreaView  style={styles.containerSafeArea}>
            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>My Shopping Cart</Text>
                </View>
            </View>
                {/* <MenuFooter navigation={this.props.navigation}/> */}
            </SafeAreaView>
        )
    }
}