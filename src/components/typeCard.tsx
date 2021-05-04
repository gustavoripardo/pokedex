import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../services/api';
import TypeCardSkeleton from '../skeleton/typeCard';
import filterUrl from '../utils/filterUrl';
import getDescription from '../utils/getDescription';
import getImage from '../utils/getImageType';
import getColor from '../utils/typeColors';
import style from './../styles/components/typeCard'
import getBetterColorText from '../utils/getBetterColorText';



interface props {
    type: string,
    url: string,
}

const TypeCard = ({ type = 'normal', url = '' }: props) => {
    const navigation = useNavigation()


    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState<iPokemonsName | null>(null);

    useEffect(() => {
        const getData = async () => {
            const result = await api.get<iPokemonsName>(filterUrl(url))
            setLoading(false);
            setPokemons(result.data)
        }

        getData()
    }, [])

    function navigatePokeType(pokemons: iPokemonsName) {
        navigation.navigate('pokeType', {typeData: pokemons})
    }


    if (loading || !pokemons) return <TypeCardSkeleton />

    return (
        <TouchableOpacity onPress={() => navigatePokeType(pokemons)} style={[style.typeCard, {backgroundColor: getColor(type)}]}>
            <View style={style.titleContainer}>
                <Text style={[style.title, {color: getBetterColorText(type)}]}>{type.toUpperCase()}</Text>
            </View>
            <View>
                <Text style={[style.description, {color: getBetterColorText(type)}]}>{getDescription(type)}</Text>
                <Text style={{color: getBetterColorText(type)}}>Geração: {pokemons?.generation.name.split('-').join(' ').toUpperCase()}</Text>
                <Text style={{color: getBetterColorText(type)}}>Pokemons: {pokemons?.pokemon.length}</Text>
            </View>
            <Image
                style={style.imageIcon}
                source={{ uri: `https://raw.githubusercontent.com/itsjavi/pokemon-assets/master/assets/img/symbols/${getImage(type)}` }}
            />
        </TouchableOpacity>
    );
}


interface iPokemonsName {
    damage_relations: {
        double_damage_from: {
            name: string,
            url: string
        }[],
        double_damage_to: {
            name: string,
            url: string
        }[],
        half_damage_from: {
            name: string,
            url: string
        }[],
        half_damage_to: {
            name: string,
            url: string
        }[],
        no_damage_from: {
            name: string,
            url: string
        }[],
        no_damage_to?: {
            name: string,
            url: string
        }[],
    },
    game_indices: {
        game_indice: number | string,
        generation: {
            name: string,
            url: string
        }[]
    }[],
    generation: {
        name: string,
        url: string
    },
    id: number,
    move_damage_class: {
        name: string,
        url: string
    },
    moves: {
        name: string,
        url: string
    }[],
    name: string,
    names: {
        name: string,
        language: {
            name: string,
            url: string
        }
    }[],
    pokemon: {
        slot: number,
        pokemon: {
            name: string,
            url: string
        }
    }[],
}


export default TypeCard