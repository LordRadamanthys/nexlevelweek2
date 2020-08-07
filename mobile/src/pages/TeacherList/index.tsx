
import React, { useState } from 'react'
import styles from './styles'
import { View, ImageBackground, Text, ScrollView, TextInput } from 'react-native'
import { RectButton, BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

const TeacherList = () => {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)

    return (

        <View style={styles.container}>
            <PageHeader
                title="Proffys disponiveis"
                headerRight={
                <BorderlessButton onPress={()=>setIsFiltersVisible(!isFiltersVisible)}>
                    <Feather name="filter" size={20} color="#fff"/>
                </BorderlessButton>
            }
            >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Qual sua materia'
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Qual o dia'
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horario</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Qual o horario'
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>
                    </View>
                )}
            </PageHeader>

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

export default TeacherList