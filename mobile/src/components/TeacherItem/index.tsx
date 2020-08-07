import React from 'react'
import styles from './styles'
import { View, Text, Image } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import { useNavigation } from '@react-navigation/native'

interface PageHeaderProps {
    title: string
}

const TeacherItem: React.FC<PageHeaderProps> = () => {

    return (

        <View style={styles.container}>

            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/49004830?s=460&u=1ec9efab3f4637738e8580fffa7155052d78e011&v=4' }} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name} > Mateus Lima</Text>
                    <Text style={styles.subject} >Matematica</Text>
                </View>
            </View>

            <Text style={styles.bio}>Entusiasta da melhores tecnologias do mercado.{'\n \n'}Apaixonado por testar coisas</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora{'  '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton  style={[styles.favoritesButton, styles.favorited]}>
                        {/* <Image source={heartOutLineIcon}/> */}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>
                    
                    <RectButton  style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem