import React, { useEffect, useState } from 'react';

function SkillListPage() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('/skills/')
            .then(response => response.json())
            .then(data => setSkills(data));
    }, []);

    return (
        <div className='container'>
            <h2>Available Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <strong>{skill.name}</strong>: {skill.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillListPage;
