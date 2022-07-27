import React from 'react';
import "./Skills.css";

const Skills = () => {
  return (
    <div>
    <div className='skills-container'>
        </div>

        <div className='upper-layer'>
        <h3 className='subtitle'>SKILLS</h3>
        <h3 className='subtext'>Web Tools:</h3>
        <ul className='unordered-list'>
            <li>HyperText Markup Language (HTML)</li>
            <li>Cascading Style Sheets (CSS)</li>
            <li>JavaScript (JS)</li>
            <li>GitHub</li>
            <li>Python</li>
            <li>Bootstrap</li>
        </ul>

        <h3 className='subtext'>Adobe Creative Cloud</h3>
        <ul className='unordered-list'>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Premiere Pro</li>
            <li>After Effects</li>
            <li>Audition</li>
            <li>Character Animator</li>
        </ul>
        </div>

    </div>
  )
}

export default Skills