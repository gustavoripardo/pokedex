import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

// import { Container } from './styles';

const style = StyleSheet.create({
    tags: {
        marginTop: 15,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 15
    },
    tag: {
        backgroundColor: 'rgba(255,255,255, .3)',
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginHorizontal: 5,
        borderRadius: 15,
    },
    containerImage: {
        alignItems: 'center',
        zIndex: 3,
        // backgroundColor: 'red',
        height: 25
    },
    image: {
        width: 300,
        height: 300,
        bottom: 250,
        zIndex: 1,
    },

    container: {
        alignItems: 'center',
        zIndex: 3,
    },
    containerInfo: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255, 1)',
        alignSelf: 'stretch',
        minHeight: 360,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 30,
        paddingTop: 30,
        zIndex: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: '600'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 15
    },
    indicative: {
        // backgroundColor: 'red',
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.1)',
    },
    indicativeTitle: {},

    infomartion: {
        paddingHorizontal: 10,
        alignItems: 'stretch',
        textAlign: 'justify'
    },

    pages: {
        width: (Dimensions.get('window').width) - 61,
        marginTop: 15,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    label: {
        flex: 1,
        color: 'rgba(0,0,0,.5)'
    },
    text: {
        flex: 2
    },
    progressBar: {
        height: 12,
        borderRadius: 5,
        backgroundColor: 'green'
    },
    progressParent: {
        flex: 2,
        height: 20,
        width: 15,
        backgroundColor: 'red',
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        zIndex: 3,
    },
})

export default style;