import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image, Platform, DeviceEventEmitter } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationContainer from '@react-navigation/native';
const { width: viewPortWidth } = Dimensions.get('window');
//const Stack = createStackNavigator();

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#DADADA',
        backgroundColor: '#F9F9F9',
        paddingBottom: Platform.select({
            ios: 30,
            default: 0
        })
    },
    title: {
        color: '#212121',
        fontSize: 12,
        textAlign: 'center'
    },
    buttonFooter: {
        width: viewPortWidth / 4,
        alignItems: 'center',
        paddingHorizontal: 2,
        paddingVertical: 4
    },
    image: {
        height: 36,
        width: 36
    }
})

class MenuFooter extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    onPressMenuFooter = async(route) => {
        if(route === 'Home'){
            DeviceEventEmitter.emit('eventHome', true);
        }
        if(route === 'Details'){
            DeviceEventEmitter.emit('eventDetails', true);
        }
        if(route === 'Cart'){
            DeviceEventEmitter.emit('eventIntro', true);
        }
       this.props.navigation.navigate(route)
    }
    render(){
        return(
            <View>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <View style={styles.box}>
                        <View style={styles.buttonFooter}>
                            <TouchableOpacity 
                                style={styles.buttonFooter}
                                onPress={() => this.onPressMenuFooter('Home')}    
                            >
                                <Image 
                                style={styles.image}
                                source={require('../../../assets/icons/025-warehouse.png')}
                                />
                                <Text style={styles.title}>Home</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonFooter}>
                            <TouchableOpacity 
                                style={styles.buttonFooter}
                                onPress={() => this.onPressMenuFooter('Details')} 
                            >
                                <Image 
                                style={styles.image}
                                source={require('../../../assets/icons/017-tracking.png')}
                                />
                                <Text style={styles.title}>Details</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonFooter}>
                            <TouchableOpacity
                                style={styles.buttonFooter}
                                onPress={() => this.onPressMenuFooter('Cart')} 
                            >
                                <Image 
                                style={styles.image}
                                source={require('../../../assets/icons/027-cargo.png')}
                                />
                                <Text style={styles.title}>Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default MenuFooter;