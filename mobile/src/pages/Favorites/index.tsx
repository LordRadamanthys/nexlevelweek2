import React from 'react'
import styles from './styles'
import { View, ImageBackground, Text, ScrollView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

const Favorites = () => {

    return (

        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }} >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />

            </ScrollView>
        </View>
    )
}

export default Favorites