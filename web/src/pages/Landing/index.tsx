import React, { useEffect, useState } from 'react'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import { Link } from 'react-router-dom'
import './styles.css'
import api from '../../services/api'


function Landing() {

    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data
            setTotalConnections(total)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="imaged" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="imaged" />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="dar aulas" />
                        Dar aulas
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="classes" />
                        Estudar
                    </Link>

                </div>

                <span className='total-connections'>
                    {`total de ${totalConnections} conexões ja realizadas`}
                    <img src={purpleHeartIcon} alt='Coração roxo' />
                </span>

            </div>
        </div>
    )
}

export default Landing