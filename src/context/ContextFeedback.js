import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const ContextFeedback = createContext();
export const FeedbackProvider = ({ children }) => {

    
    const [isLoading, setisLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setfeedbackEdit] = useState(
        {
            item: {},
            edit: false
        }
    )
    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setisLoading(false)
    }
    useState(() => {

        fetchFeedback()

    }, [])



    const handleAddition = (addFeedback) => {
        addFeedback.id = uuidv4()
        setFeedback([addFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) { setFeedback(feedback.filter((itemToDelete) => itemToDelete.id !== id)) }
        //Returns an array of feedback item deleting the one with the id that matched.
    }

    const editFeedback = (item) => {
        setfeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {


        setFeedback(
            feedback.map((item) =>
                (item.id === id ? { ...item, ...updItem } : item)
            ))

    }

    return (
        <ContextFeedback.Provider value={{
            feedback,
            deleteFeedback,
            handleAddition,
            editFeedback,
            feedbackEdit,
            updateFeedback
        }}>

            {children}

        </ContextFeedback.Provider>
    )

}
export default ContextFeedback;