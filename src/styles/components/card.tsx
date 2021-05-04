import React from 'react';
import { StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const minColumns = windowWidth >= 1000 ? 3 : 2
const minWidth = minColumns == 3 ? 300 : windowWidth / 2.1
const style = StyleSheet.create({
    card: {
        // backgroundColor: 'red',
        // marginRight: 5,
        // minWidth: minWidth,
        // width: (windowWidth / 2) - 20,
        // minHeight: 180,
        // borderRadius: 10,
        // padding: 15
        alignItems: "center",
        flexGrow: 1,
        // flex: 1,
        flexBasis: 0,
        minWidth: minWidth,
        maxWidth: minWidth,
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
        padding: 5,
        borderRadius:5,
        borderTopStartRadius: 15,
        borderBottomEndRadius: 15
    },
    imageCard: {
        width: 100,
        height: 100,
        position: 'relative',
        alignSelf: 'center',
        zIndex: -1,
    },
    pokemonTitle: {
        fontSize: 26,
        fontFamily: 'PokemonHollow',
        flex: 1,
        flexWrap: 'wrap',
    }
})

export default style;