import React, { Component, useState } from 'react'
import { View,Text, StyleSheet,  SafeAreaView, ImageBackground, Dimensions } from 'react-native'
import MenuFooter from '../Components/Menu/MenuFooter'
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerSafeArea: {
        flex: 1
    },
    containerSlider: {
        flex: 1,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre:''
        }
    }
    render(){
        const {fondo,nombre ,precio }= this.props.route.params;
        return(
            <ImageBackground source={fondo} style={styles.containerSlider}>
            <SafeAreaView  style={styles.containerSafeArea}>
                    <View style={styles.container}>
                    <Text style={{color:'white'}}>{precio} {nombre}</Text>
                    </View>
                        {/* <MenuFooter navigation={this.props.navigation}/> */}
            </SafeAreaView>
            </ImageBackground>
        )
    }
}