import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/header";
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/ContextFeedback'
function App() {
    
    
    


    return (
        
        <FeedbackProvider>
        <Router>

            <Header text="Feedback UI" color='#ff6a95' bgColor='rgba(0,0,0,0.4)' />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats/>
                            <FeedbackList />
                        </>
                    }>

                    </Route>
                    <Route path='/about' element={<About />} />

                </Routes>

                <AboutIconLink/>
            </div>

            


        </Router>
        </FeedbackProvider>
    )

}
export default App;

// Change in code 
