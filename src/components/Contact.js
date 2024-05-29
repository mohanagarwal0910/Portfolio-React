import React from 'react'
import Contacts from './Contacts.png'


export default function Contact() {
    const backgroundStyle = {
        backgroundImage: `url(${Contacts})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100vw', 
      };
   return (
    <div>
      <div style={backgroundStyle}>
      <h1 classNameName="text-20xl font-bold flex justify-between items-center py-4" style={{ color: 'white', fontSize: '24px',textAlign: 'center' }}>Contact Me!</h1>
      <p style={{marginLeft:'200px',}}>    <b> Feel free to reach out to me using the form below:</b></p>
      <div style={{marginLeft:'100px',border:'3px solid black', marginRight:'850px', height:'500px',fontFamily: 'Arial, sans-serif',backgroundColor: '#e0f0ff',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
      <form className="contact-form" style={{backgroundColor: '#fff',padding: '20px',sborderRadius: '10px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',width: '400px'}} >
      <h2 style={{color:'#0033cc',marginBottom: '20px',textAlign: 'center'}}>Get In Touch</h2>
            <div className="form-group" style={{display: 'flex',justifyContent: 'space-between'}}>
                <input type="text" placeholder="First Name" required style={{ width: '48%'}}/>
                <input type="text" placeholder="Last Name" required style={{ width: '48%'}}/>
            </div>
            <div className="form-group" style={{display: 'flex',justifyContent: 'space-between' , marginTop:'20px'}}>
                <input type="email" placeholder="Email" required style={{ width: '48%'}}/>
                <input type="tel" placeholder="Phone" required style={{ width: '48%'}}/>
            </div>
            <input type="text" placeholder="Address" className="full-width" required style={{width: 'calc(100% - 20px)',padding: '10px',marginTop:'20px', marginBottom: '20px',border: '1px solid #cce0ff',borderRadius: '5px',backgroundColor: '#e0f0ff',}}/>
            <textarea placeholder="Type your message here" className="full-width" required style={{width: 'calc(100% - 20px)',padding: '10px',marginBottom: '20px',border: '1px solid #cce0ff',borderRadius: '5px',backgroundColor: '#e0f0ff',resize: 'vertical',height: '100px',}}></textarea>
      <button type="submit" className="btn btn-dark" style={{marginLeft:'280px'}} >Submit</button>
      
      </form>
      </div>
      </div>
    </div>
   )
 };
