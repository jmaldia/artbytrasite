import React from 'react'

const Image = props => {
    return (
        <div className="image">
            <img src={props.image.url} alt="Art" />
        </div>
    )
}

export default Image