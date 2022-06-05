import React from 'react'

// es6 module import export system

import Something from './Module'  // Default import 

import { Module2 ,Module4,Module3 } from './Module'  // desturctured import or non default import 

export const Moduleuse = () => {
  return (
    <div>Moduleuse


        <Module3/>
        <Module2/>
    </div>
  )
}
