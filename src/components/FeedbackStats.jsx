import React from 'react'

function FeedbackStats({feedback}) {

    let average=feedback.reduce((previous,currentElement)=>{
        return previous+currentElement.rating;
    },0)/feedback.length;
    
  return (
    <div className='feedback-stats'>

        <h4>{feedback.length} reviews</h4>
        <h4>Average Rating: {isNaN(average)?0:average.toFixed(1) }</h4>
    </div>
  )
}

export default FeedbackStats