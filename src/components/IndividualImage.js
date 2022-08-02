import React from 'react'

export const IndividualImage = ({image}) => {
    console.log("asd")
    return (
        <div className='photo'>
            <img src={image.urls.small} alt="unsplashg api" />
        </div>
    )
}