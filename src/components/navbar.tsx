import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import getBetterColorText from '../utils/getBetterColorText';
import style from './../styles/components/navbar';

interface props {
    btnLeft?: 'back' | 'home',
    btnRight?: 'save' | 'menu',
    title?: string,
    position?: 'center' | 'left',
    showImage?: boolean,
    type?: string
}

const Navbar = ({ btnLeft = 'back', btnRight = "save", title = 'Pokedex', position = 'left', showImage = true, type = 'normal' }: props) => {
    const navigation = useNavigation();
    const statusColor = getBetterColorText(type) == '#FFFFFF' ? 'light' : 'dark'

    const [save, setSave] = useState(false);

    function goBack() {
        navigation.goBack()
    }
    


    return (
        <View style={style.navbar}>
            <StatusBar style={statusColor} translucent={true}/>
            <View style={style.buttons}>
                {
                    btnLeft == 'back'
                        ? (<TouchableOpacity onPress={() => goBack()}><MaterialCommunityIcons name="arrow-left" size={26} style={style.btnRight} color={getBetterColorText(type)}/></TouchableOpacity>)
                        : (<MaterialCommunityIcons name="pokeball" size={26} style={style.btnRight} color={getBetterColorText(type)}/>)
                }
                <View>
                    {
                        btnRight == 'save'
                            ? (<TouchableOpacity onPress={() => setSave(!save)}>
                                {
                                    save
                                        ? (<Fontisto name="heart" size={26} style={style.btnRight} color={getBetterColorText(type)}/>)
                                        : (<Fontisto name="heart-alt" size={26} style={style.btnRight} color={getBetterColorText(type)}/>)
                                }
                            </TouchableOpacity>)
                            : (<Fontisto name="nav-icon-a" size={26} style={style.btnRight} color={getBetterColorText(type)}/>)
                    }
                    {
                        showImage && (
                            <Image
                                source={require('./../../assets/pokeball.png')}
                                style={style.pokeballImage}
                            />
                        )
                    }
                </View>
            </View>
            <View style={position == 'center' ? style.titleContentCenter : style.titleContentLeft}>
                <Text style={[style.title, {color: getBetterColorText(type)}]}>{title}</Text>
            </View>
        </View>
    );
}

export default Navbar