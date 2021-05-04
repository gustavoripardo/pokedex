import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { min } from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const minColumns = windowWidth >= 1000 ? 3 : 2
const minWidth = minColumns == 3 ? 300 : windowWidth / 2.1
const style = StyleSheet.create({
    typeCard: {
        flex: 0.5,
        minWidth: minWidth,
        minHeight: 160,
        // width: 'auto',
        // justifyContent: 'space-between',
        // alignItems: 'flex-start',
        // alignContent: 'space-between',
        // alignSelf: 'center',
        // backgroundColor: 'red',
        // opacity: 0.5,
        // marginRight: 5,
        marginHorizontal: 0.9,
        // marginLeft: 5,
        marginBottom: 5,
        // marginHorizontal: 5,
        padding: 15,
        borderRadius:5,
        borderTopStartRadius: 15,
        borderBottomEndRadius: 15
    },
    titleContainer: {},
    title: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'PokemonHollow'
    },
    imageIcon: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 10,
        end: 10,
        zIndex: -1     
    },
    description: {
        textAlign: 'justify',
        marginBottom: 20
    }
});

export default style