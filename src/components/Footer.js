import React from 'react';
// import { BiColor } from 'react-icons/bi';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
// import {SiLeetcode} from "react-icons/si"
export default function Footer() {
    const footer={
        backgroundColor:'black',
        color:'white',
//     width: '90%',
  height: '40px',
//   margin: '10px auto',
//   margginTop: '80px',
  letterSpacing: '0.5px',
  
  display:'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  
  position: 'relative',
  bottom: '0px',
  textAlign: 'center',
    };
  return (
    <footer style={footer}>
      <h4 style={{margin: '0 25px',fontWeight: '500',}}>Developed by Mohan Agarwal</h4>
      <h4 style={{margin: '0 25px',fontWeight: '500',}}>Copyright &copy; 2025 IT</h4>
      <div className='footerLinks' style={{display: 'flex',width: '180px',fontSize: '18px',justifyContent: 'space-evenly'}}>
        <a href="https://github.com/mohanagarwal0910" ><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mohan-agarwal-5964b2252/" ><FaLinkedin/></a>
        <a href='mailTo:mohanagarwal09101@gmail.com' ><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}
