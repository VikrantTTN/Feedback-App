import FeedbackItem from './feedbackItem'

function feedbackList({feedback,handleDelete}) {
    
    
  return (
    <div className='feedback-list'>
         {feedback.map((feedElement,index)=>(
             <FeedbackItem key={feedElement.id} item={feedElement} handleDelete={handleDelete} />
         )
             
         )} 
    </div>
  )
}

export default feedbackList