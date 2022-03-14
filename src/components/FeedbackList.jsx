import FeedbackItem from './feedbackItem'
import {useContext} from 'react'
import ContextFeedback from '../context/ContextFeedback'

function FeedbackList() {

    const feedback = useContext(ContextFeedback)
    
    
    
  return (
    <>
      <div className='feedback-list'>
        
         {feedback.feedback.map((feedElement,index)=>(
             <FeedbackItem key={feedElement.id} item={feedElement} />
         )
             
         )} 
    </div>
    </>
  )
  
}

export default FeedbackList