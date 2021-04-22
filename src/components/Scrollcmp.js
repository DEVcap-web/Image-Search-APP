import React from 'react'
import UnsplashImage from './UnsplashImage'

const Scrollcmp = ({ images, setSelected }) => {
    return (
        <div className="wrapper">
            {
                images.map((image, index) => (
                    <UnsplashImage setSelected={setSelected} image={image} murl={image.urls.regular} key={index} />
                ))
            }
        </div>
    )
}

export default Scrollcmp
