import React from 'react';
// import  { useState } from 'react';
import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaBootstrap, FaGit, FaGithub } from 'react-icons/fa';
import Skillpic from './Skillpic.png'
const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Git', icon: <FaGit /> },
  { name: 'GitHub', icon: <FaGithub /> },
];
const backgroundStyle = {
    backgroundImage: `url(${Skillpic})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    height: '100vh', 
    width: '100vw', 
  };
const Skills = () => {

  return (
    <div style={backgroundStyle} >
      <h1 style={{justifyContent: 'center', alignItems: 'center',color:'white',paddingTop:'50px',textAlign:'center'}}>Professional Skills</h1>  
    <div style={styles.container}>
      {skills.map((skill, index) => (
        <div  key={index} style={styles.skillBox}>
          <div style={styles.icon}>{skill.icon}</div>
          {/* <div style={styles.skillName}>{skill.name} on</div> */}
        </div>
      ))}
    </div>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop:'50px',
    },
    skillBox: {
      width: '250px',
      height: '200px',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '3px solid black',
      borderRadius: '8px',
      transition: 'transform 0.3s',
      position: 'relative',
      cursor: 'pointer',
    },
    icon: {
      fontSize: '5em',
    },
    skillName: {
      marginTop: '10px',
      fontSize: '10em',
      color:'black',
      opacity: 0,
      transition: 'opacity 0.3s',
      position: 'absolute',
      bottom: '10px',
    },
    // skillBoxHover:{
    //   transform: 'scale(1.2)',
    //   boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
    // },
    // skillNameHover: {
    //   opacity: 1,
    // },
  };
  

export default Skills;
