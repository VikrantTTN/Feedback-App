import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAddition}) {
    // This is the one for form input
    const [content, settext] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)
    
    const handleTextChange = (e) => {

        if (content === '') {
            setbtnDisabled(true)
            setMessage(null)
        }
        else if (content !== '' && content.trim().length <= 10) {

            setbtnDisabled(true)
            setMessage('Text must be at least 10 characters.')

        }
        else {

            setbtnDisabled(false)
            setMessage(null)


        }

        settext(e.target.value)

    }
    const handleSubmit=(e)=>{

        e.preventDefault()
        if(content.trim().length>10){
            const newFeedback={
                content,
                rating
            }
            handleAddition(newFeedback)
            settext('')
        }

    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How Would you Rate our Service?</h2>
                <RatingSelect select={(rating)=>setRating(rating)}/>
                <div className="input-group">

                    <input type="text" placeholder='Write a Review' onChange={handleTextChange} value={content} />

                    <Button type='submit' version='secondary' isDisabled={btnDisabled}>Send</Button>

                </div>
                {/* if message is there display the below mentioned code */}
                {message && <div className="message">{message}</div>}

            </form>
        </Card>

    )
}

export default FeedbackForm