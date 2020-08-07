import React, { useState, FormEvent } from 'react'

import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'



function TeacherList() {

    const [teachers, setTeachers] = useState([])
    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    async function searchTeacher(e: FormEvent) {
        e.preventDefault()

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data)
    }

    return (

        <div id='page-teacher-list' className='container'>
            <PageHeader title="Estes são os proffys disponiveis" >
                <form onSubmit={searchTeacher} id='search-teachers'>

                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'biologia', label: 'Biologia' },
                            { value: 'matematica', label: 'Matematica' },
                            { value: 'quimica', label: 'Quimica' }
                        ]} />

                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda' },
                            { value: '2', label: 'Terça' },
                            { value: '3', label: 'Quarta' },
                            { value: '4', label: 'Quinta' },
                            { value: '5', label: 'Sexta' },
                            { value: '6', label: 'Sabado' },
                        ]} />




                    <Input type="time" name="time" label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }} />
                    <button type="submit">
                        Buscar
                    </button>

                </form>
            </PageHeader>

            <main >
                {teachers && teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem key={teacher.id} teacher={teacher} />
                    )
                })}
            </main>
        </div>
    )
}

export default TeacherList