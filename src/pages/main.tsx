import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import api from './../services/api'
import Navbar from './../components/navbar'
import { FlatList } from 'react-native-gesture-handler';
import MainSkeleton from './../skeleton/listCard'
import TypeCard from './../components/typeCard'

interface ipokemonTypes {
    count: number
    next: null | string
    previous: null | string,
    results: {
        name: string
        url: string
    }[]
}

const Main = () => {
    const [loading, setLoading] = useState(true);
    const [pokemonTypes, setPokemonTypes] = useState<ipokemonTypes>();

    useEffect(() => {
        const getData = async () => {
            const result = await api.get<ipokemonTypes>('type')
            setLoading(false);
            setPokemonTypes(result.data)
        }

        getData()
    }, [])

    if (loading) {
        return <MainSkeleton />
    }


    return (
        <View style={{ marginBottom: 150 }}>
            <Navbar btnLeft="home" btnRight="menu" position='left' />
            <View style={{
                padding: 10,
                marginBottom: 130
            }}>
                <FlatList
                    data={pokemonTypes?.results}
                    renderItem={({ index, item, separators }) => {
                        if (item.name == 'unknown' || item.name == 'shadow') return <></>;
                        return (
                            <TypeCard type={item.name} url={item.url} />
                        )
                    }}
                    keyExtractor={(data) => data.name}
                />
            </View>
        </View>
    );
}

export default Main;