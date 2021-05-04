import React from 'react';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    parentCard: {
        borderRadius: 50,
        marginBottom: 5,
        paddingBottom: 5,
        borderBottomWidth:1,
        borderStyle: 'solid',
        borderColor: "#c7c7c7"
    },
    pokemonType: {
        fontSize: 20,
        // marginTop: 15
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 5
        // backgroundColor: 'red' 
    },
    collapse: {
        paddingLeft: 15
    }
})

export default style;