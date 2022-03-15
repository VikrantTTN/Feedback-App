import React from 'react'
import ContextFeedback from '../context/ContextFeedback'
import {useContext} from 'react'

function FeedbackStats() {

  const feedback = useContext(ContextFeedback)

    let average=feedback.feedback.reduce((previous,currentElement)=>{
        return previous+currentElement.rating;
    },0)/feedback.feedback.length;
    
  return (
    <div className='feedback-stats'>

        <h4>{feedback.feedback.length} reviews</h4>
        <h4>Average Rating: {isNaN(average)?0:average.toFixed(1) }</h4>
    </div>
  )
}

export default FeedbackStats