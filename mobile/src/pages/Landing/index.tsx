import React, { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import { RectButton } from 'react-native-gesture-handler'
import api from '../../services/api'

const Landing = () => {
    const navigation = useNavigation()
    const [totaConnections, setTotaConnections] = useState('')
    function handleNavigateToGiveClasses() {
        navigation.navigate('GiveClasses')
    }

    function handleNavigatePages() {
        navigation.navigate('Study')
    }

    useEffect(() => {
        api.get('connections')
            .then((response) => {
                setTotaConnections(response.data.total)
            })
    }, [])

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja Bem-Vindo,{'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>

                <RectButton onPress={handleNavigatePages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton onPress={handleNavigateToGiveClasses} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totaConnections} conexões realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default Landing