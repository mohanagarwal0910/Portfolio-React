import React from 'react'
import Skillpic from './Skillpic.png'
export default function Education() {

const backgroundStyle = {
        backgroundImage: `url(${Skillpic})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100vw', 
};
const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      margin: '40px',
      paddingTop:'48px',
    },
    table: {
      width: '80%',
      height:'100%',
      borderCollapse: 'collapse',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    th: {
      padding: '15px',
      textAlign: 'left',
      backgroundColor: '#4CAF50',
      color: 'white',
    },
    td: {
      padding: '15px',
      textAlign: 'left',
      borderBottom: '1px solid black',
    },
    trOdd: {
      backgroundColor: '#f2f2f2',
    },
    trHover: {
      backgroundColor: '#ddd',
    },
  };

  return (
    <div>
      <div style={backgroundStyle} >
      <h1 style={{justifyContent: 'center', alignItems: 'center',color:'white',paddingTop:'100px',textAlign:'center'}}>Education Qualification</h1> 
      <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Education Level</th>
            <th style={styles.th}>Percentage/CGPA</th>
            <th style={styles.th}>School/College</th>
            <th style={styles.th}>Passing Year</th>
          </tr>
        </thead>
        <tbody>
          {[
            { level: 'Class 10', percentage: <b>'95.8%'</b>, school: "St. Michael's School, Siliguri", year: <b>'2019'</b> },
            { level: 'Class 12', percentage: <b>'84.5%'</b>, school: 'Deigratia International School,Madhepura', year: <b>'2021'</b> },
            { level: 'B.Tech', percentage: <b>'8.4 CGPA'</b>, school: 'Technocrats Institute Of Technology,Bhopal', year: <b>'2025'</b> },
          ].map((item, index) => (
            <tr
            //   key={index}
            //   style={index % 2 === 0 ? styles.trOdd : null}
            //   onMouseEnter={() => setHoverIndex(index)}
            //   onMouseLeave={() => setHoverIndex(null)}
            //   style={hoverIndex === index ? styles.trHover : index % 2 === 0 ? styles.trOdd : null}
            >
              <td style={styles.td}>{item.level}</td>
              <td style={styles.td}>{item.percentage}</td>
              <td style={styles.td}>{item.school}</td>
              <td style={styles.td}>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div> 
    <div>
        {/* <h1>Certification & Position Of Responsibility</h1> */}
    </div>
      </div>
    </div>
  )
}

