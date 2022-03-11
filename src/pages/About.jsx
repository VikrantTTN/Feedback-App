import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
function About() {
  return (
    <Card>
      <div className='about'>
      <h1>About This Project</h1>
      <p>This is a react based application to leave feedback for a particular Service.</p>  
      <p>1.0</p>
      <Link to='/' >Back to Homepage</Link>
      </div>
    </Card>
  )
}

export default About