import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Modalize } from 'react-native-modalize';

import Navbar from '../components/navbar';
import getLinearColor from '../utils/getLinearColor';
import { useRoute } from '@react-navigation/native';
import api from '../services/api';
import style from './../styles/pokeProfile'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import getDescription from '../utils/getDescription';
import Animated from 'react-native-reanimated';
import getBetterColorText from '../utils/getBetterColorText';

const pokeProfilePage = () => {
    const route = useRoute();
    // @ts-ignore
    const { type, pokemonId, name } = route?.params

    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState<iPokemon>();

    const [page, setPage] = useState([0, 0])

    useEffect(() => {
        const getData = async () => {
            const result = await api.get<iPokemon>(`pokemon/${pokemonId}`)
            setLoading(false);
            setPokemon(result.data)
        }

        getData()
    }, [])

    function changePageIndicative(number: number) {
        if (page[0] == number) return;
        let newPage = page[1] + 1;

        if (number < page[0])
            newPage = page[1] - 1;

        if (newPage > 3) newPage = 3;
        if (newPage < 0) newPage = 0;
        return setPage([number, newPage])
    }


    const headerImage = () => {
        return (
            <View style={style.containerImage}>
                <Image
                    style={style.image}
                    source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png` }}
                // onError={() => setImageFound(false)}
                />
            </View>
        );
    }

    if (loading || !pokemon) {
        // return <MainSkeleton />
        return null;
    }

    return (
        <LinearGradient colors={getLinearColor(type)} style={{ flex: 1, zIndex: -99 }}>
            <Navbar showImage={false} type={type} title={name} />

            <View style={style.tags}>
                {
                    pokemon.types.map((t, i) => <Text key={i} style={[style.tag, { color: getBetterColorText(type) }]}>{t.type.name}</Text>)
                }
            </View>
            <Modalize
                alwaysOpen={Dimensions.get('window').height / 3}
                HeaderComponent={headerImage()}
                withHandle={false}
            >
                <View style={style.container}>
                    <View style={style.containerInfo}>
                        <Animated.View style={style.header}>
                            <View style={[style.indicative, { borderBottomColor: page[1] <= 0 ? getLinearColor(type)[0] : 'rgba(0,0,0,.1)' }]}>
                                <Text style={style.indicativeTitle}>Sobre</Text>
                            </View>
                            <View style={[style.indicative, { borderBottomColor: page[1] == 1 ? getLinearColor(type)[0] : 'rgba(0,0,0,.1)' }]}>
                                <Text style={style.indicativeTitle}>Stats</Text>
                            </View>
                            <View style={[style.indicative, { borderBottomColor: page[1] == 2 ? getLinearColor(type)[0] : 'rgba(0,0,0,.1)' }]}>
                                <Text style={style.indicativeTitle}>Abilidades</Text>
                            </View>
                            <View style={[style.indicative, { borderBottomColor: page[1] >= 3 ? getLinearColor(type)[0] : 'rgba(0,0,0,.1)' }]}>
                                <Text style={style.indicativeTitle}>Movimentos</Text>
                            </View>
                        </Animated.View>
                        <ScrollView
                            pagingEnabled
                            horizontal
                            indicatorStyle="default"
                            showsHorizontalScrollIndicator={false}
                            automaticallyAdjustContentInsets={true}
                            contentContainerStyle={{ flexGrow: 1 }}
                            bounces={true}
                            onMomentumScrollEnd={e => {
                                changePageIndicative(e.nativeEvent.contentOffset.x)
                            }}
                        >
                            <View style={style.pages}>
                                <View style={style.row}>
                                    <Text style={style.label}>Família: </Text>
                                    <Text style={style.text}>{type.toUpperCase()}</Text>
                                </View>
                                <View style={style.row}>
                                    <Text style={style.label}>Altura: </Text>
                                    <Text style={style.text}>{pokemon?.height}</Text>
                                </View>
                                <View style={style.row}>
                                    <Text style={style.label}>Largura: </Text>
                                    <Text style={style.text}>{pokemon?.weight}</Text>
                                </View>
                            </View>

                            <View style={style.pages}>
                                {
                                    pokemon.stats.map((stat, index) => (
                                        <View style={{ marginBottom: 15 }} key={index}>
                                            <View style={style.row}>
                                                <Text style={style.label}>{stat.stat.name.toUpperCase()}</Text>
                                                <LinearGradient
                                                    colors={getLinearColor(type)}
                                                    style={style.progressParent}
                                                    start={[0, 1]}
                                                    end={[1, 0]}
                                                    locations={[stat.base_stat / 100, 1]}
                                                >
                                                    <Text style={{ color: getBetterColorText(type) }}>{stat.base_stat}</Text>
                                                </LinearGradient>
                                            </View>
                                            <View style={[style.row, { paddingLeft: 10 }]}>
                                                <Text style={style.label}>Esforço: </Text>
                                                <Text style={style.text}>{stat.effort}</Text>
                                            </View>
                                        </View>
                                    ))
                                }

                            </View>

                            <View style={[style.pages, {paddingLeft: 5}]}>
                                {
                                    pokemon.abilities.map((ab, index) => (
                                        <View style={style.row} key={index}>
                                            <Text style={style.label}># {index + 1}</Text>
                                            <Text style={style.text}>{ab.ability.name.toUpperCase()}</Text>
                                        </View>
                                    ))
                                }
                            </View>

                            <View style={style.pages}>
                                {
                                    pokemon.moves.map((move, index) => (
                                        <View style={style.row} key={index}>
                                            <Text style={style.label}> # {index + 1}</Text>
                                            <Text style={style.text}>{move.move.name.toUpperCase()}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modalize>
        </LinearGradient>
    );
}

interface iPokemon {
    abilities: {
        ability: {
            name: string,
            url: string,
        },
        is_hidden: boolean,
        slot: number
    }[],
    base_experience: number,
    forms: {
        name: string,
        url: string,
    }[],
    game_indices: {
        game_index: number,
        version: {
            name: string,
            url: string,
        }
    }[],
    height: number,
    held_items: [],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: {
        move: {
            name: string,
            url: string,
        },
        version_group_details: {
            level_learned_at: number,
            move_learn_method: {
                name: string,
                url: string,
            }
        }[]
    }[],
    name: string,
    order: number,
    past_type: [],
    species: {
        name: string,
        url: string,
    },
    sprites: {},
    stats: {
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string,
        }
    }[],
    types: {
        slot: number,
        type: {
            name: string,
            url: string,
        }

    }[],
    weight: number,
}





export default pokeProfilePage