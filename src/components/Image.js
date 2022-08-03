import React from 'react'

export const Images = ({images}) => {
    // console.log(images);
    return images.map ((image) => (
        <Image key={image.id} image={image} onClick={onClick} />
    ))
}

export const Image = ({image, onClick}) => {
    return (
        <div className='photo'>
            <img src={image} alt="unsplashg api" onClick={onClick} />
        </div>
    )
}