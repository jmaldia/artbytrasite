import React from 'react'

const Image = props => {
    return (
        <div className="image">
            <img src={require(props.image.url)} alt="Art" />
        </div>
    )
}

export default Image