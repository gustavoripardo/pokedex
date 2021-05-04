import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import getBetterColorText from '../utils/getBetterColorText';

import style from './../styles/components/card'

import getColor from './../utils/typeColors'

interface props {
    type?:
    string |
    "normal" |
    "fire" |
    "water" |
    "electric" |
    "grass" |
    "ice" |
    "fighting" |
    "poison" |
    "ground" |
    "flying" |
    "psychic" |
    "bug" |
    "rock" |
    "ghost" |
    "dragon" |
    "dark" |
    "steel" |
    "fairy",
    url?: string,
    name?: string,
    pokemonId?: number | string,
}

const Card = ({ type = "water", url = '', name = '', pokemonId = 1 }: props) => {
    const navigation = useNavigation()
    const [imageFound, setImageFound] = useState(true)


    function goToPokeProfile(type:string, pokemonId:string | number, name: string) {
        navigation.navigate('pokeProfile', {type,pokemonId,name})
    }


    if (name.search('-') > 0) {
        name = name.split('-').join('- ')
    }
    return (
        <TouchableOpacity onPress={() => goToPokeProfile(type, pokemonId, name)} style={[style.card, { backgroundColor: getColor(type) }]}>
            <View>
                <Text style={[style.pokemonTitle, { color: getBetterColorText(type) }]}>{name.toUpperCase()}</Text>
                <Image
                    style={style.imageCard}
                    source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png` }}
                    onError={() => setImageFound(false)}
                />
                {
                    !imageFound && (
                        <Image
                            style={style.imageCard}
                            source={require('./../../assets/images/pokemon-not-found.png')}
                            onError={() => setImageFound(false)}
                        />
                    )
                }
            </View>
        </TouchableOpacity>
    );
}

export default Card