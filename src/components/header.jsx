import React from 'react'

function header({text,color,bgColor}) {
    return (

            <header style={{backgroundColor:bgColor,color:color}}>
                <div className="container">

                    <h2>{text}</h2>
                    
                </div>
            </header>

    )
}

export default header