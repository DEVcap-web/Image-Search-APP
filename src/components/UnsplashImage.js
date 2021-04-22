import React from 'react'

const UnsplashImage = ({ image, setSelected, murl }) => {
    return (
        <div className="unimage" onClick={() => setSelected(murl)}>
            <img className="unimage__img" src={murl} alt={image.alt_description} />
        </div>
    )
}

export default UnsplashImage
