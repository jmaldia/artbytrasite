import React from 'react'
import Image from './Image'

const ImageList = props => {
    const sampleArray = [
        { url: "https://imgplaceholder.com/320x320?text=Art+by+TRA" },
        { url: "https://imgplaceholder.com/320x320?text=Art+by+TRA" },
        { url: "https://imgplaceholder.com/320x320?text=Art+by+TRA" },
        { url: "https://imgplaceholder.com/320x320?text=Art+by+TRA" },
        { url: "https://imgplaceholder.com/320x320?text=Art+by+TRA" },
        { url: "https://imgplaceholder.com/320x320?text=Art+by+TRA" }
    ]
    return (
        <div className="image-list">
            This is where the ImageList will be
            <Image />
        </div>
    )
}

export default ImageList