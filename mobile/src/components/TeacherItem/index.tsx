import React, { useEffect, useState } from 'react'
import styles from './styles'
import { View, Text, Image, Linking } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'

export interface Teacher {
    id: number
    avatar: string
    bio: string
    cost: number
    name: string
    subject: string
    whatsapp: string

}

interface TeacherItemProps {
    teacher: Teacher
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited)

    function handleLinkToWhatsapp() {
        api.post('connections', {
            user_id: teacher.id
        })
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }


    async function handleToggleFavorited() {
        const favorites = await AsyncStorage.getItem('favorites')
        let favoritesArray = []

        if (favorites) favoritesArray = JSON.parse(favorites)

        if (isFavorited) {
            const favoritedIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                if (teacherItem) {
                    return teacherItem.id == teacher.id
                }

            })

            favoritesArray.splice(favoritedIndex, 1)
            setIsFavorited(false)
        } else {
            favoritesArray.push(teacher)
            setIsFavorited(true)
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }
    return (

        <View style={styles.container}>

            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: teacher.avatar }} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name} >{teacher.name}</Text>
                    <Text style={styles.subject} >{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>{teacher.bio}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora{'  '}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton
                        onPress={handleToggleFavorited}
                        style={[
                            styles.favoritesButton,
                            isFavorited
                                ? styles.favorited
                                : {}
                        ]}>
                        {isFavorited
                            ? <Image source={unfavoriteIcon} />
                            : <Image source={heartOutLineIcon} />}

                    </RectButton>

                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem