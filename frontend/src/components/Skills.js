import React from 'react'

const Skills = ({ language }) => {
    return (
        <section id="Skills">
            <h2>{language === 'ES' ? 'Habilidades' : 'Skills'}</h2>
        </section>
    )
}

export default Skills
