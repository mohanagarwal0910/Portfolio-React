import React from 'react'
import Typewriter from  'typewriter-effect';


export default function Typed() {
  return (
    <div>
      <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Java Developer', 'React Developer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:20,
        }}
      />
    </div>
    </div>
  )
}
