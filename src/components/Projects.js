import React from 'react'
import Projectimage from './Projectimage.png'
import Tictac from './Tictac.png'
import Amazon from './Amazon.png'
import Textutils from './Textutils.png'
import Portfolio from './Portfolio.png'
import Aajkikhabar from './Aajkikhabar.png'


export default function Projects() {
    const backgroundStyle = {
        backgroundImage: `url(${Projectimage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100vw', 
};
const box = {
    width: '450px',
     height: 'auto',
     marginLeft:'40px',
     border:'3px solid black',
     transition:' 0.5s', 
     cursor:'pointer', 
     marginTop:'30px',

};
const handleClick = () => {
    window.open('https://mohanagarwal0910.github.io/Amazon-Clone/', '_blank');
  };
  const handleClick2 = () => {
    window.open('https://mohanagarwal0910.github.io/Tic-Tac-Toe/', '_blank');
  };
  const handleClick3 = () => {
    window.open('https://github.com/mohanagarwal0910/TextUtils-React', '_blank');
  };
  const handleClick4 = () => {
    window.open('https://github.com/mohanagarwal0910/Aaj-Ki-Khabar.git', '_blank');
  };
  return (
    <div>
      <div style={backgroundStyle} >
      <h1 style={{justifyContent: 'center', alignItems: 'center',color:'black',paddingTop:'20px',textAlign:'center',}}>Projects I Worked On</h1> 
      <div className="project-box1" style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center',marginTop:'50px', }}>
      <img className='pic' src={Amazon} alt="pic"style={box} onClick={handleClick} />
      <img className='pic' src={Aajkikhabar} alt="pic"style={box} onClick={handleClick4} />
      {/* <img className='pic' src={} alt="pic"style={{ width: '450px', height: 'auto',marginLeft:'40px' }} /> */}
      <img className='pic' src={Tictac} alt="pic"style={box} onClick={handleClick2} />
      <img className='pic' src={Portfolio} alt="pic"style={box} />
      <img className='pic' src={Textutils} alt="pic"style={box} onClick={handleClick3} />
    </div>
    </div>
    </div>
  )
}
