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
    }
})
export default class Cart extends Component {
    render(){
        return(
            <SafeAreaView  style={styles.containerSafeArea}>
            <View style={styles.container}>
                <Text>Cart</Text>
            </View>
                <MenuFooter navigation={this.props.navigation}/>
            </SafeAreaView>
        )
    }
}