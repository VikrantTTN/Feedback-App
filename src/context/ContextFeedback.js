import { createContext,useState } from "react";
const FeedbackContext=createContext();
export const FeedbackProvider=({children})=>{

    const [feedback, setFeedback] = useState([
        {
            content:"this is the text from context API",
            id:1,
            rating:10
        }
    ])

    return(
        <FeedbackContext.Provider value={{feedback}}>
            
            {children}

        </FeedbackContext.Provider>
    )

}
export default FeedbackContext;