import React from 'react'
import Image from './Image'

const ImageList = props => {
    const images = [
        { url: "../../images/art/art-01.jpg" },
        { url: "../../images/art/art-02.jpg" },
        { url: "../../images/art/art-01.jpg" },
        { url: "../../images/art/art-02.jpg" },
        { url: "../../images/art/art-01.jpg" },
        { url: "../../images/art/art-02.jpg" },
        { url: "../../images/art/art-01.jpg" },
        { url: "../../images/art/art-02.jpg" },
        { url: "../../images/art/art-01.jpg" },
        { url: "../../images/art/art-02.jpg" },
        { url: "../../images/art/art-01.jpg" },
        { url: "../../images/art/art-02.jpg" }
    ]

    return (
        <div className="image-list">
            {
                images.map((image, index) => {
                    return (
                        <Image key={index} image={image}/>
                    )
                })
            }
        </div>
    )
}

export default ImageList