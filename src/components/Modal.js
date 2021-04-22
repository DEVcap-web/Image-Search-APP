import React from 'react'

const Modal = ({ selected, setSelected }) => {
    const handleClick = (e) => {
        setSelected(null);
    }

    return (
        <div className="backdrop" onClick={handleClick}> >
            <img src={selected} alt="englarged" />
        </div>
    )
}

export default Modal
