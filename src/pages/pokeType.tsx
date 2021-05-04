import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Dimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Card from '../components/card';
import Navbar from '../components/navbar';
import filterUrl from '../utils/filterUrl';

const PokeType = () => {
    const route = useRoute()
    // @ts-ignore
    const typeData = route?.params.typeData as iPokemonsName
    const windowWidth = Dimensions.get('window').width;
    const minColumns = windowWidth >= 1000 ? 3 : 2
    const [pokemons, setPokemons] = useState<iPokemonsName | null>(null);

    useEffect(() => {
        setPokemons(typeData)
    }, [])

    return (
        <View>
            <Navbar title={typeData.name.toUpperCase()} />

            <SafeAreaView style={{
                padding: 10,
                paddingBottom: 300
            }}>
                <FlatList
                    style={{
                        flexWrap: 'wrap'
                    }}
                    contentContainerStyle={{
                        alignItems: 'flex-start'
                    }}
                    data={pokemons?.pokemon}
                    renderItem={({ index, item }) => {
                        return (
                            <Card
                                name={item.pokemon.name}
                                url={item.pokemon.url}
                                key={index}
                                type={typeData.name}
                                pokemonId={filterUrl(item.pokemon.url, "https://pokeapi.co/api/v2/pokemon/")}
                            />

                        )
                    }}
                    numColumns={minColumns}
                    keyExtractor={(data) => Math.random().toString()}
                />
            </SafeAreaView>
        </View>
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

export default PokeType