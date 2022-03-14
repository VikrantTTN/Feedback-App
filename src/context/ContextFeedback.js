import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const ContextFeedback=createContext();
export const FeedbackProvider=({children})=>{

    const [feedback, setFeedback] = useState([
        {
            content:"This is Feedback Item number One.",
            id:1,
            rating:10
        },
        {
            content:"This is Feedback Item number Two.",
            id:2,
            rating:6
        },
        {
            content:"This is Feedback Item number Three.",
            id:3,
            rating:3
        }
    ])
    const [feedbackEdit, setfeedbackEdit] = useState(
        {item:{},
        edit:false
    }
    )

    const handleAddition = (addFeedback) => {
        addFeedback.id = uuidv4()
        setFeedback([addFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) { setFeedback(feedback.filter((itemToDelete) => itemToDelete.id !== id)) }
        //Returns an array of feedback item deleting the one with the id that matched.
    }

    const editFeedback=(item)=>{
        setfeedbackEdit({
            item,
            edit:true
        })
    }

    const updateFeedback=(id,updItem)=>{


setFeedback(
    feedback.map((item)=>
    (item.id===id?{...item,...updItem}:item)
))

    }

    return(
        <ContextFeedback.Provider value={{
            feedback,
            deleteFeedback,
            handleAddition,
            editFeedback,
            feedbackEdit,
            updateFeedback}}>
            
            {children}

        </ContextFeedback.Provider>
    )

}
export default ContextFeedback;