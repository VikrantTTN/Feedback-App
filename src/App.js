import { v4 as uuidv4 } from 'uuid'
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/header";
import feedbackData from './data/feedbackData'
import FeedbackList from './components/feedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
function App() {
    const [feedback, setfeedback] = useState(feedbackData)
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) { setfeedback(feedback.filter((itemToDelete) => itemToDelete.id !== id)) }
        //Returns an array of feedback item deleting the one with the id that matched.
    }
    const handleAddition = (addFeedback) => {
        addFeedback.id = uuidv4()
        setfeedback([addFeedback, ...feedback])
        console.log(addFeedback)
    }


    return (

        <Router>

            <Header text="Feedback UI" color='#ff6a95' bgColor='rgba(0,0,0,0.4)' />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAddition={handleAddition} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }>

                    </Route>
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>


        </Router>
    )

}
export default App;

// Change in code 
