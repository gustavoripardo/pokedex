import React from 'react';
import { StyleSheet, View } from 'react-native';
import tailwind from 'tailwind-rn';

const style = StyleSheet.create({
    navbar: {
        marginTop: 50,
        marginBottom: 50,
        // flex: 1,
    },

    // Buttons
    buttons: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 15
    },
    btnLeft: {
        // flex: 1
    },
    btnRight: {
        
    },
    pokeballImage: {
        width: 300,
        height: 300,
        position: 'absolute',
        zIndex: -1,
        marginBottom: 15,
        start: -135, // horizonte
        bottom: -150, // vertical
        opacity: .3,
        // transform: [{rotate: '20deg'}]
    },

    // title
    titleContentCenter: {
        flex: 1,
        alignItems: 'center',
    },
    titleContentLeft: {
        flex: 1,
        paddingLeft: 15
    },
    title: {
        fontSize: 30,
        fontFamily: 'PokemonHollow'
    }

})

export default style;