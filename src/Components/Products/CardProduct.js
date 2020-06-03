import React, { Component, version } from 'react'
import {View, Text, ImageBackground, StyleSheet,Image, Dimensions,TouchableOpacity, DeviceEventEmitter } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginHorizontal: 15,
        width: screenWidth * 0.60,
        height: 340,
        borderRadius: 10,
    },
    containerImageBrand: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    imageBrand: {
        // width: 50,
         height: 20,
        resizeMode: 'stretch',
    },
    containerImageProduct: {
        justifyContent: 'center',
        alignItems:  'flex-end',
        marginVertical: 5,
        height: '60%'
    },
    imageProduct: {
        width: 230,
        height: 190,
       // resizeMode: 'stretch',
        marginRight: '3%'
    },
    containerDetails: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 5
    },
    productName: {
        flex: 0.6,
        color: '#85144b', 
        fontSize: 15,
        fontWeight: 'bold'
    },
    productPrice: {
        flex: 0.4,
        color: 'black', 
        fontSize: 15,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontWeight: 'bold'
    }
});
export default class CardProduct extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    onPressDetail = async(route, nameProduct, priceProduct, imgFondo, imageProduct) => {
        if(route === 'Details'){
            this.props.navigation.navigate(route, {nombre: nameProduct, precio: priceProduct, fondo: imgFondo, imgProduct: imageProduct })
        }
    }

    render(){
        const {imgFondo, imageBrand, imageProduct, productName, productPrice, backgroundColor} = this.props;
        return(
            <View style={[styles.container, { backgroundColor: backgroundColor}]}>
                <View style={styles.containerImageBrand}>
                    <Image
                        source={imageBrand}
                        style={styles.imageBrand}

                    />
                </View>
                <View style={styles.containerImageProduct}>
                    <Image
                        source={imageProduct}
                        style={styles.imageProduct}
                    />
                </View>
                <View style={styles.containerDetails}>
                    <Text style={styles.productName}>
                    {productName}
                    </Text>
                    <TouchableOpacity onPress={() => this.onPressDetail('Details', productName, productPrice, imgFondo, imageProduct )} >
                        <Text style={styles.productPrice}>
                        {productPrice}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}