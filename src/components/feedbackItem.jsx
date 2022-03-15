import React from 'react'
import Card from './shared/Card'
import {FaTimes,FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import ContextFeedback from '../context/ContextFeedback'
function FeedbackItem({item}) {


  const {deleteFeedback,editFeedback} = useContext(ContextFeedback)
  
  
  return (
    <Card>

        <div className="num-display">{item.rating}</div>
        <button className='close' onClick={()=>deleteFeedback(item.id)}>
        <FaTimes color='purple'/>
        </button>
        <button className='edit' onClick={()=>editFeedback(item)}>
        <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.content}</div>
    
    </Card>
  )
}

export default FeedbackItem;