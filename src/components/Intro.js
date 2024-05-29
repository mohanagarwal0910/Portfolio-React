import React from 'react'
import Avatar from './Avatar.png'
import Profile from './Profile.jpg'
import Typed from "./Typed.js"
import Pic from './Pic.png'
import Tilt from 'react-parallax-tilt';
import MohanResume from './MohanResume.pdf'


export default function Intro() {
    const backgroundStyle = {
        backgroundImage: `url(${Avatar})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100vw', 
      };
      
  return (
    
    <div >
        
      <section id="intro" className="py-20">
      <div style={backgroundStyle}>
      <h1 className="text-4xl font-bold flex justify-between items-center py-4" style={{ color: 'white', fontSize: '24px',textAlign: 'center' }}>Welcome to my portfolio!</h1>
      <section id="info" className="py-1000">
      
      <p>
      <div className='HomeText' style={{ color: 'white', fontSize: '24px',textAlign: 'center',width: '50%', float: 'left', marginTop: '100px' }}>
          <h1>Hi There!</h1>
          <h1>I'm <b>Mohan Agarwal</b></h1>
          <Typed/>  
        
        <div style={{ marginTop: '50px' }}>
        <a href={MohanResume}  download="MohanResume">
      <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Download Resume
      </button>
      </a>
    </div>
    </div>
        </p>
        <div style={{ width: '50%', float: 'right',display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <img className="profile" src={Profile} alt='profile' style={{ width: '450px', height: 'auto',border:'null' }} />
      </div>
      
        </section>
        
    
        </div>
    </section>
    <div>
    <div style={{backgroundColor:'black',backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        width: '100%',
        height: 'auto', }} >
        <div className='AboutText'>
          <h1 className='AboutTextHeading' style={{ justifyContent: 'center', alignItems: 'center',color:'white',paddingTop:'50px',textAlign:'center' }}>Carrer Objective</h1>
          <p style={{ color: 'white', fontSize: '24px',textAlign: 'center',width: '50%', float: 'left', marginTop: '90px',marginLeft:'50px' }}>
          Enthusiastic and skilled software developer with expertise in <b>Java programming</b>, <b>object-oriented programming,</b>
          <b>Data Structures</b>,<b>SQl</b> and <b>Web Development technologies(HTML,CSS,JS,REACT)</b>. I am passionate about creating innovative solutions 
          and leveraging a strong foundation in software engineering to contribute effectively.
            .<br /><br />
            I plan to learn <b>Next.js</b> and <b>MONGO DB</b> in the near future. <br /><br />
            
          </p>
        </div>
        
        <Tilt>
          <img className='pic' src={Pic} alt="pic"style={{ width: '450px', height: 'auto',marginLeft:'60px' }} />
        </Tilt>
        
      </div>
    </div>



    </div>
  )
}

